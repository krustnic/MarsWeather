import React from "react"

import styles from "./week-day.module.css"

const WeekDay = ({ weather, onClick }) => (
  <div
    className={styles.container}
    onClick={() => {
      onClick(weather)
    }}
  >
    <div className={styles.day}>{weather.firstDate.day}</div>
    <div className={styles.sol}>{weather.sol}</div>
  </div>
)

export default WeekDay
