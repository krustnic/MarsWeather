import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SiteTitle from "../components/title"
import CurrentWeather from "../components/current-weather"
import Week from "../components/week"

import { getLastSol, getWeek } from "../utils/data-provider"

class IndexPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      day: getLastSol(),
      week: getWeek(),
    }

    this.changeDay = this.changeDay.bind(this)
  }

  changeDay(day) {
    this.setState({
      day: day,
    })
  }

  render() {
    return (
      <Layout>
        <SEO
          title="Latest Weather at Elysium Planitia, Mars"
          keywords={[`Mars`, `weather`, `nasa`]}
        />
        <SiteTitle title="Погода на Марсе (Elysium Planitia)" />
        <CurrentWeather day={this.state.day} />
        <Week days={this.state.week} onClick={this.changeDay} />
      </Layout>
    )
  }
}

export default IndexPage
