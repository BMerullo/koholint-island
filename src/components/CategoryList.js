import React from "react"
import { Link } from "gatsby"
import setupCategories from "../../utils/setupCategories"

const CategoryList = ({ items }) => {
  const newCategory = setupCategories(items)
  return (
    <div>
      <div>
        <h2>Categories</h2>
        <div>
          {newCategory.map((category, index) => {
            const [text, value] = category
            return (
              <Link to={`/${text}`} key={index}>
                <div>
                  <span>
                    <h4>
                      {text}
                      {/* ({value}) */}
                    </h4>
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default CategoryList
