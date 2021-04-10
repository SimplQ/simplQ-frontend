import React, { useState } from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import Modal from 'components/common/Modal';
import PrintIcon from '@material-ui/icons/Print';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { makeStyles } from '@material-ui/core/styles';
import SidePanelItem from 'components/common/SidePanel/SidePanelItem';
import { useUpdateQueueSettings } from 'store/asyncActions';
import { useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Button from '../../common/Button';
import InputField from '../../common/InputField';

const style = makeStyles((theme) => ({
  modalContent: {
    display: 'flex',
    padding: theme.spacing(1),
  },
  actionContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    textDecoration: 'underline',
  },
  sizeInput: {
    marginBottom: theme.spacing(3),
  },
}));

const MAX_SIZE = 100000;

export default ({ queueId }) => {
  const classes = style();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [size, setSize] = React.useState(1);

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

  const handleSave = () => {
    dispatch(updateSettings({ queueId, settings: { maxQueueCapacity: size } }));
  };
  return (
    <>
      <SidePanelItem Icon={SettingsIcon} title="Queue Settings" onClick={toggleModal} />
      <Modal open={isModalOpen}>
        <Grid container className={classes.modalContent} direction="column">
          <h2 className={classes.title}>Settings</h2>
          <InputField
            inputProps={{ 'data-testid': 'size-input' }}
            className={classes.sizeInput}
            label="Maximum Queue Capacity"
            value={size}
            type="number"
            onChange={handleSizeChange}
            error={isInvalidSize()}
            helperText={isInvalidSize() && `Enter a number between 1 and ${MAX_SIZE}`}
            autoFocus
          />
          <div className={classes.actionContainer}>
            <Button icon={<PrintIcon />} onClick={handleSave} disabled={isInvalidSize()}>
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
