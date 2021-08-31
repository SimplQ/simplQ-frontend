//Component responsible for the /scanQr route

import React, { Component } from 'react';
import QrReader from 'react-qr-scanner';
import styles from "./QR_Scanner.module.scss";

class QRscanner extends Component {
  constructor(props){
    super(props)
    this.handleScan = this.handleScan.bind(this)
  }

  componentDidMount(){
    window.scrollTo('40px', '0px');
  }

// Gets the route from the url in the scan. Returns the route if the target-url 
// is in the same domain or redirects to a target url. 

  getRoute(baseurl, targeturl){
    for(var i=0;i<baseurl.length;i++){
      if(baseurl.charAt(i)!==targeturl.charAt(i)){
        return {
          verdict: false,
          targetRoute: ""
        }
      }
    }

    return {
      verdict: true,
      targetRoute: targeturl.substring(baseurl.length)
    }
  }

  handleScan(data){
    if(data!=null){
      const res = this.getRoute(window.location.origin, data.text);

      if(res.verdict){
        this.props.history.push(res.targetRoute);
      }
      else{
        window.location.href = data.text;
      }
    }
  }

  handleError(err){
    console.error(err)
  }

  render(){
    return(
      <>
        <div className={styles["scan-window"]}>
          <div className={styles["description-panel"]}>
            <p className={styles["description-para"]}>Scan a QR-Code</p>
            <p className={styles["description-para"]}>Allow access to your camera</p>
          </div>
          <div className={styles["qrscan-panel"]}>
            <QrReader 
              delay={100} 
              onError={this.handleError} 
              onScan={this.handleScan}
              className={styles["scan"]}
              legacyMode={true}
            />
          </div>
        </div>
        
      </>
    )
  }
}

export default QRscanner;