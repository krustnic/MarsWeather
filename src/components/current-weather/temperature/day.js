import React from "react"

import styles from "./day.module.css"
import DictContent from "../../../utils/dict-context"

class Day extends React.Component {
  static contextType = DictContent

  render() {
    const { day } = this.props
    const dict = this.context

    return (
      <div className={styles.container}>
        <div className={styles.date}>
          <div className={styles.day}>{day.firstDate.day}</div>
          <div className={styles.month}>
            {dict["months"][day.firstDate.index]}
          </div>
        </div>
        <div className={styles.sol}>SOL: {day.solId}</div>
      </div>
    )
  }
}

export default Day
