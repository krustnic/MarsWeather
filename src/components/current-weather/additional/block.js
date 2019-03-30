import React from "react"

import styles from "./block.module.css"

const AdditionalBlock = ({ Icon, value, unit }) => (
  <div className={styles.container}>
    <div>
      <Icon className={styles.icon} />
    </div>
    <div className={styles.value}>
      {value} {unit}
    </div>
  </div>
)

export default AdditionalBlock
