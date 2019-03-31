import React from "react"

import styles from "./values.module.css"
import DictContex from "../../../utils/dict-context"
import LangContex from "../../../utils/lang-context"
import convertorFabric from "../../../utils/convertor"

class Values extends React.Component {
  static contextType = LangContex

  render() {
    const { day } = this.props
    const lang = this.context

    const av = convertorFabric[lang](day.AT.av)
    const mn = convertorFabric[lang](day.AT.mn)
    const mx = convertorFabric[lang](day.AT.mx)

    return (
      <DictContex.Consumer>
        {dict => (
          <div className={styles.container}>
            <div className={styles.avg}>
              {av} °{dict["degrees"]}
            </div>
            <div className={styles.minmax}>
              <div>
                {mn} .. {mx}
              </div>
            </div>
          </div>
        )}
      </DictContex.Consumer>
    )
  }
}

export default Values
