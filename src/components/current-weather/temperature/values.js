import React from "react"

import styles from "./values.module.css"

const Values = ({ day }) => (
  <div className={styles.container}>
    <div className={styles.avg}>{day.AT.av} °C</div>
    <div className={styles.minmax}>
      <div>
        {day.AT.mn} .. {day.AT.mx}
      </div>
    </div>
  </div>
)

export default Values
