import React from "react"

import Value from "./temperature/values"
import SeasonImage from "./temperature/season-image"
import Day from "./temperature/day"
import styles from "./temperature.module.css"

const Temperature = ({ day }) => (
  <div className={styles.container}>
    <Value day={day} />
    <SeasonImage day={day} />
    <Day day={day} />
  </div>
)

export default Temperature
