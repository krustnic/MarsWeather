/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import styles from "./layout.module.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className={styles.container}>
        <main className={styles.content}>{children}</main>
        <footer>
          © {new Date().getFullYear()} Information about weather powered by{" "}
          <a href="https://mars.nasa.gov/insight/">NASA InSight Mission</a>,
          source at <a href="https://github.com/krustnic/MarsWeather">github</a>
          <br />
          <div>
            Icons made by{" "}
            <a
              href="https://www.flaticon.com/authors/those-icons"
              title="Those Icons"
            >
              Those Icons
            </a>
          </div>
        </footer>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
