import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { graphql, Link } from "gatsby"
import setupLocations from "../../utils/setupLocations"
import slugify from "slugify"
import SEO from "../components/SEO"

const explore = ({ data }) => {
  const newLocations = setupLocations(data.allContentfulLinksAwakening.nodes)
  // console.log(data)
  return (
    <Layout>
      <SEO title="Explore" />
      <main>
        <header>
          <StaticImage
            src="../assets/images/landscape.jpeg"
            alt="koholint island"
            placeholder="blurred"
            layout="fullWidth"
          ></StaticImage>
          <div>
            <div>
              <h1>Explore</h1>
            </div>
          </div>
        </header>
        <section>
          {newLocations.map((location, index) => {
            const [text] = location
            const locationSlug = slugify(text, { lower: true })
            return (
              <Link to={`/${locationSlug}`} key={index}>
                <h5>{text}</h5>
              </Link>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulLinksAwakening {
      nodes {
        info {
          locations
        }
      }
    }
  }
`

export default explore
