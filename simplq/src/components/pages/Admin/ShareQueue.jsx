import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { useDispatch } from 'react-redux';
import StandardButton from '../../common/Button';
import { setInfoPopupMessage } from '../../../store/appSlice';

const ShareQueue = (props) => {
  const shareUrl = `Hi! Use ${window.location.origin}/j/${props.queueName} to join my queue and get live updates.`;
  const dispatch = useDispatch();

  const handleShareButtonClick = () => {
    dispatch(setInfoPopupMessage('Copied queue link to clipboard'));
  };

  return (
    <CopyToClipboard text={shareUrl}>
      <StandardButton onClick={handleShareButtonClick} icon={<FileCopyIcon />} tour_tag={props.tour_tag} >
        Copy Queue Link
      </StandardButton>
    </CopyToClipboard>
  );
};

export default ShareQueue;
