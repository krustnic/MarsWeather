import React from "react"

import styles from "./season-image.module.css"
import WinterIcon from "../../../images/snow-flake.svg"

const SeasonImage = ({ today }) => (
  <div>
    <WinterIcon className={styles.icon} />
  </div>
)

export default SeasonImage
