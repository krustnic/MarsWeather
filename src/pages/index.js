import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SiteTitle from "../components/title"
import CurrentWeather from "../components/current-weather"

import { getLastSol, getPrevSol, lastSolId } from "../utils/data-provider"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Latest Weather at Elysium Planitia, Mars"
      keywords={[`Mars`, `weather`, `nasa`]}
    />
    <SiteTitle title="Погода на Марсе (Elysium Planitia)" />
    <CurrentWeather
      solId={lastSolId}
      today={getLastSol()}
      yesterday={getPrevSol()}
    />
  </Layout>
)

export default IndexPage
