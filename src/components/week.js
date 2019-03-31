import React from "react"

import WeekDay from "./week/week-day"
import styles from "./week.module.css"

const Week = ({ days, onClick }) => {
  const items = days.map(day => {
    return <WeekDay onClick={onClick} day={day} key={day.solId} />
  })
  return <div className={styles.container}>{items}</div>
}

export default Week
