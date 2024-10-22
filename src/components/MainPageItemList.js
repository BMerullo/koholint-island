import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import slugify from "slugify"

const MainPageItemList = ({ items = [] }) => {
  return (
    <>
      <div className="lg:flex lg:flex-wrap lg:justify-end lg:text-center">
        {items.map((item, index) => {
          const { id, name, image, slug } = item
          const itemSlug = slugify(name, { lower: true })
          return (
            <Link
              to={`https://koholint-island.netlify.app/${itemSlug}`}
              key={id}
              className="py-10 lg:pl-10 lg:py-8"
            >
              <div>
                <GatsbyImage
                  image={image.gatsbyImageData}
                  alt={name}
                  className="h-[150px] w-[250px] rounded-xl "
                />
              </div>
              <h5 className="pb-10 font-bold lg:pb-0">{name}</h5>
            </Link>
          )
        })}
      </div>{" "}
    </>
  )
}

export default MainPageItemList
