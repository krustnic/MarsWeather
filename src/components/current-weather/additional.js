import React from "react"

import AdditionalBlock from "./additional/block"
import WindIcon from "../../images/breeze.svg"
import PressureIcon from "../../images/gauge.svg"
import styles from "./additional.module.css"
import DictContent from "../../utils/dict-context"

class Additional extends React.Component {
  static contextType = DictContent

  render() {
    const { day } = this.props
    const dict = this.context

    return (
      <div className={styles.container}>
        <AdditionalBlock
          Icon={WindIcon}
          value={day.HWS.av}
          unit={dict["wind_speed"]}
        />
        <AdditionalBlock
          Icon={PressureIcon}
          value={day.PRE.av}
          unit={dict["pressure_units"]}
        />
      </div>
    )
  }
}

export default Additional
