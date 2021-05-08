import React, { useState, useEffect } from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import Modal from 'components/common/Modal';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import SidePanelItem from 'components/common/SidePanel/SidePanelItem';
import { useUpdateQueueSettings } from 'store/asyncActions';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import SaveIcon from '@material-ui/icons/Save';
import { selectMaxQueueCapacity, selectIsSelfJoinAllowed } from 'store/selectedQueue';
import Button from 'components/common/Button';
import InputField from 'components/common/InputField';
import Checkbox from '@material-ui/core/Checkbox';
import styles from './QueueSettings.module.scss';

const MAX_SIZE = 100000;

export default ({ queueId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const maxQueueSize = useSelector(selectMaxQueueCapacity);
  const isSelfJoinAllowed = useSelector(selectIsSelfJoinAllowed);
  const [size, setSize] = React.useState(maxQueueSize);
  const [selfJoin, setSelfJoin] = React.useState(false);

  useEffect(() => {
    setSize(maxQueueSize);
    setSelfJoin(isSelfJoinAllowed);
  }, [maxQueueSize, isSelfJoinAllowed]);

  const handleSizeChange = (e) => {
    const positiveInteger = /^\d+$/i;
    const input = positiveInteger.test(e.target.value) ? e.target.value : 0;
    setSize(input);
  };

  const isInvalidSize = () => {
    return size < 1 || size > MAX_SIZE;
  };

  const dispatch = useDispatch();
  const updateSettings = useUpdateQueueSettings();

  const toggleModal = () => setIsModalOpen((isOpen) => !isOpen);

  const handleSelfJoinCb = React.useCallback(
    (userChoiceEvent) => {
      const userChoice = userChoiceEvent?.target?.checked;
      setSelfJoin(!!userChoice);
    },
    [setSelfJoin]
  );

  const handleSave = async () => {
    const response = await dispatch(
      updateSettings({
        queueId,
        settings: { maxQueueCapacity: size, isSelfJoinAllowed: selfJoin },
      })
    );
    if (!response.error) {
      toggleModal();
    }
  };

  return (
    <>
      <SidePanelItem Icon={SettingsIcon} title="Queue Settings" onClick={toggleModal} />
      <Modal open={isModalOpen}>
        <Grid container className={styles['modal-content']} direction="column">
          <h2 className={styles['title']}>Settings</h2>
          <InputField
            inputProps={{ 'data-testid': 'size-input' }}
            className={styles['size-input']}
            label="Maximum Queue Capacity"
            value={size}
            type="number"
            onChange={handleSizeChange}
            error={isInvalidSize()}
            helperText={isInvalidSize() && `Enter a number between 1 and ${MAX_SIZE}`}
            autoFocus
          />
          <CheckboxComponent selfJoin={selfJoin} handleSelfJoinCb={handleSelfJoinCb} />
          <div className={styles['action-container']}>
            <Button icon={<SaveIcon />} onClick={handleSave} disabled={isInvalidSize()}>
              Save
            </Button>
            <Button icon={<HighlightOffIcon />} onClick={toggleModal} outlined>
              Close
            </Button>
          </div>
        </Grid>
      </Modal>
    </>
  );
};

const CheckboxComponent = (props) => {
  const { selfJoin, handleSelfJoinCb } = props;
  return (
    /* eslint-disable react/jsx-wrap-multilines */
    <div className={styles['self-join-checkbox']}>
      <FormControlLabel
        control={
          <Checkbox
            checked={selfJoin}
            color="primary"
            name="selfJoinCheckBox"
            onChange={handleSelfJoinCb}
            size="small"
          />
        }
        label={
          <span
            className={
              selfJoin ? styles['checkbox-label-checked'] : styles['checkbox-label-unchecked']
            }
          >
            Self Join
          </span>
        }
      />
    </div>
  );
};
