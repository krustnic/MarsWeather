import React from "react"

import Value from "./temperature/values"
import SeasonImage from "./temperature/season-image"
import Day from "./temperature/day"
import styles from "./temperature.module.css"

const Temperature = ({ today, solId }) => (
  <div className={styles.container}>
    <Value today={today} />
    <SeasonImage today={today} />
    <Day solId={solId} today={today} />
  </div>
)

export default Temperature
