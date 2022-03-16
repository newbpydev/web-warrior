import { Link, graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Home({ data }) {
  console.log(data)
  const bannerImg = getImage(data.file.childImageSharp.gatsbyImageData)

  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop and Deploy</h3>
          <p>UX designer & web developer based in Santo Domingo</p>
          <Link className={styles.btn} to="/projects">
            My Portfolio Projects
          </Link>
        </div>
        {/* <img src="/banner.png" alt="site banner" style={{ maxWidth: "100%" }} /> */}
        <GatsbyImage image={bannerImg} alt="Banner image" />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner.png" }) {
      id
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH, formats: AUTO)
      }
    }
  }
`
