import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <Layout>
      <SEO title="Error" />
      <main>
        <header>
          <StaticImage
            src="../assets/images/tired-link.jpeg"
            alt="koholint island"
            placeholder="blurred"
            layout="fullWidth"
          ></StaticImage>
          <div>
            <div>
              <h1>404</h1>
              <h4>Page Not Found</h4>
            </div>
          </div>
        </header>
      </main>
    </Layout>
  )
}

export default Error
