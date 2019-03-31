import React from "react"

import styles from "./langs.module.css"
import ABIcon from "../images/transformer-ab.svg"
import DSIcon from "../images/transformer-ds.svg"
import DictContent from "../utils/dict-context"

class Langs extends React.Component {
  static contextType = DictContent

  cnangeToRU = () => {
    this.props.onClick("ru")
  }

  cnangeToEN = () => {
    this.props.onClick("en")
  }

  render() {
    return (
      <div className={styles.container}>
        <div onClick={this.cnangeToRU} className={styles.lang}>
          <ABIcon className={styles.icon} />
          <div className={styles.langText}>RU</div>
        </div>
        <div onClick={this.cnangeToEN} className={styles.lang}>
          <DSIcon className={styles.icon} />
          <div className={styles.langText}>EN</div>
        </div>
      </div>
    )
  }
}

export default Langs
