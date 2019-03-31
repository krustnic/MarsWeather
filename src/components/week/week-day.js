import React from "react"

import styles from "./week-day.module.css"

const WeekDay = ({ day, onClick }) => (
  <div
    className={styles.container}
    onClick={() => {
      onClick(day)
    }}
  >
    <div className={styles.day}>{day.firstDate.day}</div>
    <div className={styles.sol}>{day.solId}</div>
  </div>
)

export default WeekDay
