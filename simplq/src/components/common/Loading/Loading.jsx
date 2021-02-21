import React from 'react';
import PropTypes from 'prop-types';
import PropagateLoader from 'react-spinners/PropagateLoader';
import styles from './Loading.module.scss';

const Loading = ({ children, actionStatus, isLoading }) => {
  if (actionStatus === 'fulfilled' || isLoading === false) {
    return <>{children}</>;
  }

  if (actionStatus === 'rejected') {
    return (
      <div className={styles.main}>
        An unknown error occured. Please look at the console log for more nfo.
      </div>
    );
  }

  return (
    <div className={styles.main}>
      <PropagateLoader color="#3a3768" />
    </div>
  );
};

Loading.defaultProps = {
  isLoading: undefined,
  actionStatus: undefined,
};

Loading.propTypes = {
  isLoading: PropTypes.bool,
  actionStatus: PropTypes.oneOf(['pending', 'fulfilled', 'rejected']),
};

export default Loading;
