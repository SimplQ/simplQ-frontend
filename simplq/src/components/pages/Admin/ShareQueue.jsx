import React, { useState, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { ShareButton } from '../../common/Button';

const ShareQueue = (props) => {
  const [clicked, setClicked] = useState(false);
  const shareUrl = `Hi! Use ${window.location.origin}/j/${props.queueName} to join my queue and get live updates.`;

  useEffect(() => {
    // https://www.alexhughes.dev/blog/setTimeout-with-hooks/
    if (!clicked) {
      return () => {};
    }
    // changes back to old text and color after 5 seconds
    const timerId = setTimeout(() => setClicked(false), 5000);
    return () => clearTimeout(timerId);
  }, [clicked]);

  const handleShareButtonClick = () => {
    setClicked(true);
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
