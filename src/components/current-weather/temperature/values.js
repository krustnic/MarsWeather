import React from "react"

import styles from "./values.module.css"

const Values = ({ today }) => (
  <div className={styles.container}>
    <div className={styles.avg}>{Math.round(today.AT.av)} °C</div>
    <div className={styles.minmax}>
      <div>
        {Math.round(today.AT.mn)} {Math.round(today.AT.mx)}
      </div>
    </div>
  </div>
)

export default Values
