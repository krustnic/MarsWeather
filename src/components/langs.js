import React from "react"

import styles from "./langs.module.css"
import LangContext from "../utils/lang-context"

class Langs extends React.Component {
  static contextType = LangContext

  render() {
    const { onClick } = this.props

    return (
      <div className={styles.container}>
        <div
          onClick={() => {
            onClick("ru")
          }}
          className={styles.lang}
        >
          RU
        </div>
        <div
          onClick={() => {
            onClick("en")
          }}
          className={styles.lang}
        >
          EN
        </div>
      </div>
    )
  }
}

export default Langs
