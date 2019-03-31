import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Langs from "../components/langs"
import SiteTitle from "../components/title"
import CurrentWeather from "../components/current-weather"
import Week from "../components/week"

import { getWeek, defaultDay } from "../utils/data-provider"
import DictContent from "../utils/dict-context"
import LangContent from "../utils/lang-context"
import dict from "../utils/dict.json"

class IndexPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      day: defaultDay,
      week: [],
      lang: "en",
    }
  }

  componentDidMount() {
    fetch(
      "https://mars.nasa.gov/rss/api/?feed=weather&category=insight&feedtype=json&ver=1.0"
    )
      .then(response => {
        return response.json()
      })
      .then(data => {
        const week = getWeek(data)
        this.setState({
          day: week.length > 0 ? week[week.length - 1] : defaultDay,
          week,
        })
      })
  }

  changeDay = day => {
    this.setState({
      day: day,
    })
  }

  changeLang = lang => {
    this.setState({
      lang: lang,
    })
  }

  render() {
    return (
      <LangContent.Provider value={this.state.lang}>
        <DictContent.Provider value={dict[this.state.lang]}>
          <Layout>
            <SEO
              title="Latest Weather at Elysium Planitia, Mars"
              keywords={[`Mars`, `weather`, `nasa`]}
            />
            <Langs onClick={this.changeLang}> </Langs>
            <SiteTitle />
            <CurrentWeather day={this.state.day} />
            <Week days={this.state.week} onClick={this.changeDay} />
          </Layout>
        </DictContent.Provider>
      </LangContent.Provider>
    )
  }
}

export default IndexPage
