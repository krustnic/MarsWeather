import React from "react"

import styles from "./yesterday.module.css"

const Yesterday = ({ weather }) => (
  <div className={styles.container}>
    Днем ранее: {Math.round(weather.AT.av)} °C
  </div>
)

export default Yesterday
