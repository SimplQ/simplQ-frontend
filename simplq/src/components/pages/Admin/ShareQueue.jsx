import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { ShareButton } from '../../common/Button/Button.stories';

const ShareQueue = (props) => {
  const [clicked, setClicked] = React.useState(false);
  const shareUrl = `${window.location.origin}/j/${props.queueName}`;

  const handleShareButtonClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 5000); // changes back to old text and color after 5 seconds
  };

  const CopyToClipboardButton = () =>
    clicked ? (
      <>
        <img src="/images/verified-24px.svg" alt="copied" />
        <p>Copied to clipboard</p>
      </>
    ) : (
      <>
        <FileCopyIcon />
        <p>Copy to clipboard</p>
      </>
    );

  return (
    <CopyToClipboard text={shareUrl}>
      <ShareButton onClick={handleShareButtonClick} outlined={!clicked}>
        <CopyToClipboardButton />
      </ShareButton>
    </CopyToClipboard>
  );
};

export default ShareQueue;
