import React from "react"

import styles from "./title.module.css"

const Title = ({ title }) => (
  <div className={styles.title}>
    <div className={styles.main}>Погода на Марсе</div>
    <div className={styles.details}>Elysium Planitia</div>
  </div>
)

export default Title
