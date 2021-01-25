import React, { useRef, forwardRef } from 'react';
import { makeStyles, Modal, useMediaQuery } from '@material-ui/core';
import { QRCode } from 'react-qrcode-logo';
import PrintIcon from '@material-ui/icons/Print';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { useReactToPrint } from 'react-to-print';
import StandardButton from '../Button';
import { getSentenceCaseText } from '../../../utils/textOperations';

const ComponentToPrint = forwardRef(({ style, url, queueName }, ref) => {
  return (
    <div className={style} ref={ref}>
      <h1>
        <u>{getSentenceCaseText(queueName)}</u>
      </h1>
      <h2>Scan this QR to begin!</h2>
      <QRCode value={url} />
      <p style={{ textAlign: 'center' }}>
        {'or visit '}
        <a href={url} target="_blank" rel="noopener noreferrer">
          {url}
        </a>
      </p>
    </div>
  );
});

const QrCode = (props) => {
  const { queueName, show, onClose } = props;

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const componentPrintRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentPrintRef.current,
  });

  const styles = makeStyles(() => {
    return {
      modalContainer: {
        position: 'absolute',
        top: '20%',
        backgroundColor: '#fff',
        borderRadius: '25px',
        outline: 'none',
        width: isMobile ? '95%' : 400,
        padding: 10,
        margin: isMobile ? 10 : 0,
      },
      centered: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
        height: '80%',
      },
      actionContainer: {
        display: 'flex',
        justifyContent: 'space-evenly',
        width: '90%',
      },
    };
  })();

  const handleModalClose = () => onClose(false);

  return (
    <Modal
      style={{
        overflow: 'scroll',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      open={queueName ? show : !show}
      onClose={handleModalClose}
    >
      <div className={styles['modalContainer']}>
        <div className={styles['centered']}>
          <ComponentToPrint
            style={styles['centered']}
            url={`${window.location.origin}/j/${queueName}`}
            queueName={queueName}
            ref={componentPrintRef}
          />
          <div className={styles['actionContainer']}>
            <StandardButton onClick={handlePrint} icon={<PrintIcon />}>
              Print
            </StandardButton>
            <StandardButton onClick={handleModalClose} icon={<HighlightOffIcon />} outlined>
              Close
            </StandardButton>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default QrCode;
