import React from "react"

import styles from "./block.module.css"

const AdditionalBlock = ({ Icon, value, unit }) => {
  const v = value || "?"
  return (
    <div className={styles.container}>
      <div>
        <Icon className={styles.icon} />
      </div>
      <div className={styles.value}>
        {v} {unit}
      </div>
    </div>
  )
}

export default AdditionalBlock
