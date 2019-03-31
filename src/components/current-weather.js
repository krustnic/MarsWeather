import React from "react"

import Temperature from "./current-weather/temperature"
import Yesterday from "./current-weather/yesterday"
import Additional from "./current-weather/additional"

import styles from "./current-weather.module.css"

const CurrentWeather = ({ day }) => (
  <div className={styles.container}>
    <div className={styles.group}>
      <Temperature day={day} />
    </div>
    <Yesterday day={day} />
    <Additional day={day} />
  </div>
)

export default CurrentWeather
