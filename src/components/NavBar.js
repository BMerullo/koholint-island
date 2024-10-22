import React from "react"
import { Link } from "gatsby"
import palmTree from "../assets/images/logos/island.jpg"

const NavBar = () => {
  return (
    <nav className="block lg:flex justify-between items-center px-4 lg:px-[300px]">
      <div>
        <Link to="/">
          <div className="flex items-bottom justify-between my-6">
            <h2 className="text-2xl font-bold">Koholint Wiki</h2>

            <img
              className="display-block h-7 md:ml-4"
              src={palmTree}
              alt="logo"
            />
          </div>
          {/* <div>
            <h2>Koholint Wiki</h2>
          </div> */}
        </Link>
        {/* <Link to="https://koholint-island.netlify.app/koholint-island">
          <img src={palmTree} alt="logo" />
        </Link> */}
      </div>
      <div className="flex justify-between mx-8 border-b-2 my-6 md:border-b-0 md:mx-0 font-medium">
        <Link to="/" className="md:ml-4" activeClassName="active">
          home
        </Link>
        <Link to="/categories" className="md:ml-4" activeClassName="active">
          categories
        </Link>
        <Link to="/explore" className="md:ml-4" activeClassName="active">
          explore
        </Link>
      </div>
    </nav>
  )
}

export default NavBar
