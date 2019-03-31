import React from "react"

import styles from "./yesterday.module.css"
import DictContex from "../../utils/dict-context"
import LangContex from "../../utils/lang-context"
import convertorFabric from "../../utils/convertor"

class Yesterday extends React.Component {
  static contextType = LangContex

  render() {
    const { temperature } = this.props
    const lang = this.context

    let t = "?"
    if (temperature) {
      t = convertorFabric[lang](temperature)
    }

    return (
      <DictContex.Consumer>
        {dict => (
          <div className={styles.container}>
            {dict["yesterday_weather"]}: {t} °{dict["degrees"]}
          </div>
        )}
      </DictContex.Consumer>
    )
  }
}

export default Yesterday
