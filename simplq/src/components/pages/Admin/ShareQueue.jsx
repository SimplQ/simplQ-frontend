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

const CopyButton = (props) => {
  const link = `${window.location.origin}/j/${props.queueName}`;
  const dispatch = useDispatch();

  const handleShareButtonClick = () => {
    dispatch(setInfoPopupMessage('Copied queue link to clipboard'));
  };

  return (
    <CopyToClipboard text={link}>
      <StandardButton
        onClick={handleShareButtonClick}
        icon={<FileCopyIcon />}
        tourTag={props.tourTag}
      >
        Copy Queue Link
      </StandardButton>
    </CopyToClipboard>
  );
};

const ShareQueue = (props) => {
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

  const quote = `Hi! Use ${window.location.origin}/j/${props.queueName} to join my queue and get live updates.`;
  const link = `${window.location.origin}/j/${props.queueName}`;

  return (
    <>
      <ButtonGroup
        variant="contained"
        className={styles['button-group']}
        ref={anchorRef}
        aria-label="split button"
      >
        <CopyButton {...props} />
        <Button
          className={styles['button-group']}
          color="primary"
          size="small"
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        style={{ zIndex: 100, backgroundColor: '#fff' }}
        open={open}
        anchorEl={anchorRef.current}
        transition
        disablePortal
        placement="bottom-end"
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList>
                  Share
                  <MenuItem>
                    <FacebookShareButton url={link} quote={quote} style={{ display: 'flex' }}>
                      <FacebookIcon size={24} round style={{ marginRight: 10 }} />
                      Facebook
                    </FacebookShareButton>
                  </MenuItem>
                  <MenuItem>
                    <TwitterShareButton url={link} title={quote} style={{ display: 'flex' }}>
                      <TwitterIcon size={24} round style={{ marginRight: 10 }} />
                      Twitter
                    </TwitterShareButton>
                  </MenuItem>
                  <MenuItem>
                    <WhatsappShareButton url={link} title={quote} style={{ display: 'flex' }}>
                      <WhatsappIcon size={24} round style={{ marginRight: 10 }} />
                      Whatsapp
                    </WhatsappShareButton>
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default ShareQueue;
