import React, { useState, useRef, forwardRef } from 'react';
import { makeStyles, Modal, useMediaQuery } from '@material-ui/core';
import { QRCode } from 'react-qrcode-logo';
import PrintIcon from '@material-ui/icons/Print';
import { useReactToPrint } from 'react-to-print';
import StandardButton from '../Button';
import { title } from '../utilFns';

const ComponentToPrint = forwardRef(({ style, url, queueName }, ref) => {
  return (
    <div className={style} ref={ref}>
      <h1>
        <u>{title(queueName)}</u>
      </h1>
      <h2>Scan this QR to begin!</h2>
      <QRCode value={url} />
      <p>{`or visit ${url}`}</p>
    </div>
  );
});

const QrCode = (props) => {
  const { queueName, show, onClose } = props;
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('xs'));

  const getModalStyle = () => {
    return {
      position: 'absolute',
      top: '20%',
      backgroundColor: '#fff',
      borderRadius: '25px',
      outline: 'none',
      width: isMobile ? '50%' : 400,
      padding: 10,
    };
  };

  const [modalStyle] = useState(getModalStyle);
  const componentPrintRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentPrintRef.current,
  });

  const styles = makeStyles(() => {
    return {
      centered: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
        height: '80%',
      },
    };
  })();
  return (
    <Modal
      style={{
        overflow: 'scroll',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      open={queueName ? show : !show}
      onClose={() => onClose(false)}
    >
      <div style={modalStyle}>
        <div className={styles['centered']}>
          <ComponentToPrint
            style={styles['centered']}
            url={`${window.location.origin}/j/${queueName}`}
            queueName={queueName}
            ref={componentPrintRef}
          />
          <StandardButton onClick={handlePrint} icon={<PrintIcon />}>
            Print
          </StandardButton>
        </div>
      </div>
    </Modal>
  );
};

export default QrCode;
