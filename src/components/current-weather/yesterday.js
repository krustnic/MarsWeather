import React from "react"

import styles from "./yesterday.module.css"

const Yesterday = ({ temperature }) => {
  const t = temperature || "?"
  return <div className={styles.container}>Днем ранее: {t} °C</div>
}

export default Yesterday
