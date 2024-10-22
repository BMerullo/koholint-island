import React from "react"
import { Link } from "gatsby"
import setupCategories from "../../utils/setupCategories"

const CategoryList = ({ items }) => {
  const newCategory = setupCategories(items)
  return (
    <>
      <div className="text-center py-4 lg:text-left">
        <h2 className="font-bold text-3xl lg:py-8">Categories</h2>
        <div>
          {newCategory.map((category, index) => {
            const [text, value] = category
            return (
              <Link to={`/${text}`} key={index}>
                <div className="py-4 text-xl lg:py-2 hover:text-green">
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
    </>
  )
}

export default CategoryList
