import React from "react"

import styles from "./day.module.css"

const Day = ({ day }) => (
  <div className={styles.container}>
    <div className={styles.date}>
      <div className={styles.day}>{day.firstDate.day}</div>
      <div className={styles.month}>{day.firstDate.month.full}</div>
    </div>
    <div className={styles.sol}>SOL: {day.solId}</div>
  </div>
)

export default Day
