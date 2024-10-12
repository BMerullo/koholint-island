import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import LocationItemList from "../components/LocationItemList"
import slugify from "slugify"
import SEO from "../components/SEO"

const ItemTemplate = ({ data }) => {
  const {
    name,
    description: { description },
    image,
    info: { locations, catagories },
    locationBoolean,
  } = data.contentfulLinksAwakening
  const pathToImage = getImage(image)
  // const { locations, catagories } = info
  // console.log(data)
  return (
    <Layout>
      <SEO title={name} />
      <main>
        <h3>{name}</h3>
        <section>
          <article>
            <div>
              <GatsbyImage
                image={pathToImage}
                alt={name}
                className="singleImage"
              />
            </div>
            <p>{description}</p>
          </article>
          <div>
            <h5>Location(s): </h5>
            {/* <div className="tag-container"> */}
            <h5>
              {locations.map((location, index) => {
                const locationSlug = slugify(location, { lower: true })
                return (
                  <Link to={`/${locationSlug}`} key={index}>
                    {location}
                  </Link>
                )
              })}
            </h5>
          </div>
          {/* </div> */}
          <div>
            <h5>Categorie(s): </h5>
            <h5>
              {catagories.map((catagory, index) => {
                return (
                  <Link to={`/${catagory}`} key={index}>
                    {catagory}
                  </Link>
                )
              })}
            </h5>
          </div>
        </section>
        {locationBoolean === true ? <h3>Found in {name} . . .</h3> : null}
        <section>
          {locationBoolean === true ? (
            <div>
              <LocationItemList name={name} />
            </div>
          ) : null}
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query getSingleItem($name: String) {
    contentfulLinksAwakening(name: { eq: $name }) {
      name
      description {
        description
      }
      id
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }
      info {
        locations
        catagories
      }
      locationBoolean
    }
  }
`

export default ItemTemplate
