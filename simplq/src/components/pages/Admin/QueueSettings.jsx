import React, { useState, useEffect } from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import { Grid } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import SidePanelItem from 'components/common/SidePanel/SidePanelItem';
import { useUpdateQueueSettings } from 'store/asyncActions';
import { useDispatch, useSelector } from 'react-redux';
import SaveIcon from '@material-ui/icons/Save';
import {
  selectMaxQueueCapacity,
  selectIsSelfJoinAllowed,
  selectIsNotifiableByEmail,
} from 'store/selectedQueue';
import Button from 'components/common/Button';
import InputField from 'components/common/InputField';
import Checkbox from 'components/common/Checkbox/Checkbox';
import Modal from '../../common/Modal/Modal';
import styles from './QueueSettings.module.scss';

const MAX_SIZE = 100000;

export default ({ queueId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const maxQueueSize = useSelector(selectMaxQueueCapacity);
  const isSelfJoinAllowed = useSelector(selectIsSelfJoinAllowed);
  const isNotifiableByEmail = useSelector(selectIsNotifiableByEmail);
  const [size, setSize] = React.useState(maxQueueSize);
  const [selfJoin, setSelfJoin] = React.useState(false);
  const [notifyByEmail, setNotifyByEmail] = React.useState(false);

  useEffect(() => {
    setSize(maxQueueSize);
    setSelfJoin(!!isSelfJoinAllowed);
    setNotifyByEmail(!!isNotifiableByEmail);
  }, [maxQueueSize, isSelfJoinAllowed, isNotifiableByEmail]);

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

  const handleSelfJoinCheckBox = React.useCallback(
    (userChoiceEvent) => {
      const userChoice = userChoiceEvent?.target?.checked;
      setSelfJoin(!!userChoice);
    },
    [setSelfJoin]
  );

  const handleNotifyByEmailCheckBox = React.useCallback(
    (userChoiceEvent) => {
      const userChoice = userChoiceEvent?.target?.checked;
      setNotifyByEmail(!!userChoice);
    },
    [setNotifyByEmail]
  );

  const handleSave = async () => {
    const response = await dispatch(
      updateSettings({
        queueId,
        settings: {
          maxQueueCapacity: size,
          isSelfJoinAllowed: selfJoin,
          notifyByEmail,
        },
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
          <Checkbox
            checked={selfJoin}
            onChange={handleSelfJoinCheckBox}
            name="selfJoinCheckBox"
            label="Self Join"
          />

          <Checkbox
            checked={notifyByEmail}
            onChange={handleNotifyByEmailCheckBox}
            name="notifyByEmailCheckBox"
            label="Notify By Email"
          />
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
