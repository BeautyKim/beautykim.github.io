import React from 'react'
import styles from "@/styles/button/sysButton.module.css";

function SysButton() {
  return (
    <div className="sysButton">
      <label className={styles.switch}>
        <input className={styles.input} type="checkbox"/>
        <span className={styles.slider}></span>
      </label>
    </div>

  )
}

export default SysButton