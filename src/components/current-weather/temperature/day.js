import React from "react"

import styles from "./day.module.css"

const Day = ({ solId, today }) => (
  <div className={styles.container}>
    <div className={styles.date}>
      <div className={styles.day}>{today.firstDate.day}</div>
      <div className={styles.month}>{today.firstDate.month}</div>
    </div>
    <div className={styles.sol}>SOL: {solId}</div>
  </div>
)

export default Day
