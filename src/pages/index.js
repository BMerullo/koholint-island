import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import AllItems from "../components/AllItems"
import SEO from "../components/SEO"

export default function Home() {
  return (
    <Layout>
      <SEO title="Home Page" />
      <main>
        <hero>
          <StaticImage
            src="../assets/images/koholint-img.jpeg"
            alt="koholint island"
            placeholder="blurred"
            layout="fullWidth"
          ></StaticImage>
          <div>
            <div>
              <h3>The Legend of Zelda</h3>
              <h2>Link's Awakening</h2>
            </div>
          </div>
        </hero>
        <AllItems />
      </main>
    </Layout>
  )
}
