import React, { useState, useRef } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { useDispatch } from 'react-redux';
import {
  ButtonGroup,
  ClickAwayListener,
  MenuList,
  Paper,
  Popper,
  Button,
  Grow,
  MenuItem,
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share';
import StandardButton from '../../common/Button';
import { setInfoPopupMessage } from '../../../store/appSlice';
import styles from './admin.module.scss';

const CopyButton = ({ tourTag, link }) => {
  const dispatch = useDispatch();
  const handleShareButtonClick = () => {
    dispatch(setInfoPopupMessage('Copied queue link to clipboard'));
  };

  return (
    <CopyToClipboard text={link}>
      <StandardButton onClick={handleShareButtonClick} icon={<FileCopyIcon />} tourTag={tourTag}>
        Copy Queue Link
      </StandardButton>
    </CopyToClipboard>
  );
};

const ShareQueue = ({ queueName, tourTag }) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const link = `${window.location.origin}/j/${queueName}`;
  const quote = `Hi! Use ${link} to join my queue and get live updates.`;

  return (
    <div className={styles['share']}>
      <ButtonGroup
        variant="contained"
        className={styles['button-background']}
        ref={anchorRef}
        aria-label="split button"
      >
        <CopyButton {...{ tourTag, link }} />
        <Button
          className={styles['button-background']}
          color="primary"
          size="small"
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        className={styles['popper']}
        open={open}
        anchorEl={anchorRef.current}
        transition
        disablePortal
        placement="bottom-end"
      >
        {({ TransitionProps, placement }) => (
          <Grow
            in={TransitionProps?.in}
            onEnter={TransitionProps?.onEnter}
            onExited={TransitionProps?.onExited}
            style={{
              transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList>
                  Share
                  <MenuItem>
                    <FacebookShareButton
                      url={link}
                      quote={quote}
                      className={styles['share-button']}
                    >
                      <FacebookIcon size={24} round className={styles['share-icon']} />
                      Facebook
                    </FacebookShareButton>
                  </MenuItem>
                  <MenuItem>
                    <TwitterShareButton url={link} title={quote} className={styles['share-button']}>
                      <TwitterIcon size={24} round className={styles['share-icon']} />
                      Twitter
                    </TwitterShareButton>
                  </MenuItem>
                  <MenuItem>
                    <WhatsappShareButton
                      url={link}
                      title={quote}
                      className={styles['share-button']}
                    >
                      <WhatsappIcon size={24} round className={styles['share-icon']} />
                      Whatsapp
                    </WhatsappShareButton>
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default ShareQueue;
