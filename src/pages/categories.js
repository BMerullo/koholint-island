import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import setupCategories from "../../utils/setupCategories"
import { StaticImage } from "gatsby-plugin-image"
import SEO from "../components/SEO"

const categories = ({ data }) => {
  const newCategories = setupCategories(data.allContentfulLinksAwakening.nodes)
  return (
    <Layout>
      <SEO title="Categories" />
      <main>
        <header>
          <StaticImage
            src="../assets/images/sword.jpeg"
            alt="koholint island"
            placeholder="blurred"
            layout="fullWidth"
          ></StaticImage>
          <div>
            <div>
              <h1>Categories</h1>
            </div>
          </div>
        </header>
        <section>
          {newCategories.map((category, index) => {
            const [text] = category
            return (
              <Link to={`/${text}`} key={index}>
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
          catagories
        }
      }
    }
  }
`

export default categories
