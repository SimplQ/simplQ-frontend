import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ShareButton } from '../../common/Button/Button.stories';

const CopyQueue = (props) => {
  const [clicked, setClicked] = React.useState(false);
  const shareUrl = `${window.location.origin}/j/${props.queueId}`;

  const handleShareButtonClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 5000); // changes back to old text and color after 5 seconds
  };

  return (
    <CopyToClipboard text={shareUrl}>
      <ShareButton onClick={handleShareButtonClick} outlined={!clicked}>
        {clicked ? 'Copied to clipboard' : 'Copy Queue Link'}
      </ShareButton>
    </CopyToClipboard>
  );
};

export default CopyQueue;
