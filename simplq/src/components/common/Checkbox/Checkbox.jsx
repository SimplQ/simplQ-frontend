import React from 'react';
import styles from './Checkbox.module.scss';

const Checkbox = ({ name, label, checked, onChange }) => {
  return (
    /* eslint-disable react/jsx-wrap-multilines */
    <div className={styles['checkbox']}>
      <input
        className={styles['checkbox-input']}
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <span
        className={
          checked ? `${styles['checkbox-label-checked']}` : `${styles['checkbox-label-unchecked']}`
        }
      >
        {label}
      </span>
    </div>
  );
};

export default Checkbox;
