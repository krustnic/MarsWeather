import React from "react"

import styles from "./yesterday.module.css"

const Yesterday = ({ day }) => (
  <div className={styles.container}>Днем ранее: {day.prev} °C</div>
)

export default Yesterday
