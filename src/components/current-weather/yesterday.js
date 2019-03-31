import React from "react"

import styles from "./yesterday.module.css"
import LangContext from "../../utils/lang-context"

class Yesterday extends React.Component {
  static contextType = LangContext

  render() {
    const { temperature } = this.props
    const t = temperature || "?"
    const dict = this.context

    return (
      <div className={styles.container}>
        {dict["yesterday_weather"]}: {t} °C
      </div>
    )
  }
}

export default Yesterday
