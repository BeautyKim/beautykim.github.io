import React from 'react'

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