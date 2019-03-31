import React from "react"

import styles from "./values.module.css"

const Values = ({ day }) => (
  <div className={styles.container}>
    <div className={styles.avg}>{Math.round(day.AT.av)} °C</div>
    <div className={styles.minmax}>
      <div>
        {Math.round(day.AT.mn)} {Math.round(day.AT.mx)}
      </div>
    </div>
  </div>
)

export default Values
