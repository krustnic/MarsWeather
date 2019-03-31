import React from "react"

import styles from "./values.module.css"
import LangContext from "../../../utils/lang-context"

class Values extends React.Component {
  static contextType = LangContext

  render() {
    const { day } = this.props
    const dict = this.context

    return (
      <div className={styles.container}>
        <div className={styles.avg}>{day.AT.av} °C</div>
        <div className={styles.minmax}>
          <div>
            {day.AT.mn} .. {day.AT.mx}
          </div>
        </div>
      </div>
    )
  }
}

export default Values
