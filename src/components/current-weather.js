import React from "react"

import Temperature from "./current-weather/temperature"
import Yesterday from "./current-weather/yesterday"
import Additional from "./current-weather/additional"

import styles from "./current-weather.module.css"

const CurrentWeather = ({ today, yesterday, solId }) => (
  <div className={styles.container}>
    <div className={styles.group}>
      <Temperature solId={solId} today={today} />
    </div>
    <Yesterday weather={yesterday} />
    <Additional weather={today} />
  </div>
)

export default CurrentWeather
