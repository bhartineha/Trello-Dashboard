import React from 'react';
import styles from './popup.module.css';

export default function Popup(props) {
  
    return (props.trigger) ? (

      <div className={styles.popup}>

        <div className={styles.popupInner}>
            <button className={styles.closeBtn} onClick={() => props.setTrigger(false)}> 
                close
            </button>
            {props.children}
        </div>

      </div>
    ) : "";

}
