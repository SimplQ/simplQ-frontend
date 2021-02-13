import React from 'react';
import Button from 'components/common/Button';
import CreateJoinForm from 'components/common/CreateJoinForm';
import styles from './pageNotFound.module.scss';

function PageNotFound(props) {
  const MainContent = () => {
    if (props.match.params.queueName) {
      // display CreateJoinForm
      return (
        <div className={styles.main}>
          <div className={styles.text}>
            <h1 className={styles.center}>Oops 404!</h1>
            <p>
              A queue with that name doesn&apos;t exist, please enter a valid queue name or create
              one
            </p>
            <CreateJoinForm defaultTextFieldValue={props.match.params.queueName} />
          </div>
        </div>
      );
    }
    return (
      <div className={styles.main}>
        <div className={styles.text}>
          <h1>Oops 404!</h1>
          <h3>Looks like the bugs stole that page.</h3>
          <div className={styles.buttondiv}>
            <div>
              <Button onClick={() => props.history.push('/')}>Return home</Button>
            </div>
            <div>
              <a
                href="https://github.com/SimplQ/simplQ-frontend/issues/new"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button outlined>Report a bug</Button>
              </a>
            </div>
          </div>
        </div>
        <div>
          <img className={styles.img} src="/images/error404.svg" alt="Error 404" />
        </div>
      </div>
    );
  };
  return (
    <>
      <MainContent />
      <img src="/images/wavecurve.svg" alt="Error 404" />
    </>
  );
}

export default PageNotFound;
