import React from 'react';
import Header from '../../common/Header';
import styles from '../../../styles/statusPage.module.scss';

export default () => {
  // https://dabblet.com/gist/1506530 --> checkbox hack
  return (
    /* eslint-disable jsx-a11y/label-has-associated-control */
    <div>
      <label htmlFor="toggle">
        <Header text="Queue Details" className={styles['details-header']} />
      </label>
      <input type="checkbox" id="toggle" className={styles['visually-hidden']} />
      <div className={styles.details}>
        <table>
          <tr>
            <p>Queue Name:</p>
          </tr>
          <tr>
            <p>People currently in queue:</p>
          </tr>
          <tr>
            <p>Creation time:</p>
          </tr>
          <tr>
            <p>Total number of people in queue:</p>
          </tr>
        </table>
      </div>
    </div>
  );
};
