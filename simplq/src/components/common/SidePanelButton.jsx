import React, { useState } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Collapse } from '@material-ui/core';
import PropagateLoader from 'react-spinners/PropagateLoader';
import styles from '../../styles/sidePanelButton.module.scss';

const ExpandButton = ({ isOpen, onToggle }) => (
  <div
    role="button"
    tabIndex={0}
    className={styles['expand-button']}
    onClick={onToggle}
    onKeyDown={onToggle}
  >
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

const SidePanelButton = ({
  title,
  description,
  Icon,
  expandable = false,
  loading = false,
  onClick,
  children,
}) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);

  return (
    <button type="button" className={styles['side-panel-button']} onClick={onClick}>
      <div className={styles['header']}>
        <Icon className={styles['icon']} fontSize="large" />
        <div>
          <h2>{title}</h2>
          <p className={styles['description']}>{description}</p>
        </div>
        {expandable && <ExpandButton isOpen={open} onToggle={toggleOpen} />}
      </div>
      {expandable && (
        <Collapse timeout="auto" in={open}>
          {loading ? (
            <div className={styles['loading']}>
              <PropagateLoader color="#3a3768" />
            </div>
          ) : (
            children
          )}
        </Collapse>
      )}
    </button>
  );
};

export default SidePanelButton;
