import React from "react"

import AdditionalBlock from "./additional/block"
import WindIcon from "../../images/breeze.svg"
import PressureIcon from "../../images/gauge.svg"
import styles from "./additional.module.css"

const Additional = ({ weather }) => (
  <div className={styles.container}>
    <AdditionalBlock
      Icon={WindIcon}
      value={Math.round(weather.HWS.av)}
      unit="м/с"
    />
    <AdditionalBlock
      Icon={PressureIcon}
      value={Math.round(weather.PRE.av)}
      unit="мм рт. ст."
    />
  </div>
)

export default Additional
