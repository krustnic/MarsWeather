import React from "react"

import WeekDay from "./week/week-day"
import styles from "./week.module.css"

const Week = ({ days, onClick }) => {
  const items = days.map(weather => {
    return <WeekDay onClick={onClick} weather={weather} key={weather.sol} />
  })
  return <div className={styles.container}>{items}</div>
}

export default Week
