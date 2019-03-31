import React from "react"

import styles from "./title.module.css"
import DictContent from "../utils/dict-context"

class Title extends React.Component {
  static contextType = DictContent

  render() {
    const dict = this.context

    return (
      <div className={styles.title}>
        <div className={styles.main}>{dict["title"]}</div>
        <div className={styles.details}>Elysium Planitia</div>
      </div>
    )
  }
}

export default Title
