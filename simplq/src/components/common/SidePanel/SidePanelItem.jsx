import React, { useState } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Collapse } from '@material-ui/core';
import styles from './SidePanel.module.scss';

const ExpandButton = ({ isOpen }) => (
  <div className={styles['expand-button']}>
    <ExpandMoreIcon
      className={
        isOpen
          ? `${styles['expand-icon']} ${styles['expand-icon-open']}`
          : `${styles['expand-icon']}`
      }
      fontSize="large"
    />
  </div>
);

const SidePanelItem = ({
  title,
  description,
  Icon,
  expandable = false,
  onClick,
  children,
  tourTag = '',
}) => {
  const [open, setOpen] = useState(false);
  const onClickHandler = () => {
    if (expandable) {
      setOpen(!open);
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className={styles['side-panel-item']}>
      <div
        reactour-selector={tourTag}
        className={styles['header']}
        tabIndex={0}
        role="button"
        onKeyDown={onClickHandler}
        onClick={onClickHandler}
      >
        <Icon className={styles['icon']} fontSize="large" />
        <div>
          <h2>{title}</h2>
          <p className={styles['description']}>{description}</p>
        </div>
        {expandable && <ExpandButton isOpen={open} />}
      </div>
      {expandable && (
        <Collapse timeout="auto" in={open}>
          {children}
        </Collapse>
      )}
    </div>
  );
};

export default SidePanelItem;
