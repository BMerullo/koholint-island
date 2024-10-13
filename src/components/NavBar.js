import React from "react"
import { Link } from "gatsby"
import palmTree from "../assets/images/logos/island.jpg"

const NavBar = () => {
  return (
    <nav className="block">
      <div>
        <Link to="/">
          <div className="flex items-center justify-between my-4">
            <h2 className="">Koholint Wiki</h2>

            <img className="display-block h-7" src={palmTree} alt="logo" />
          </div>
          {/* <div>
            <h2>Koholint Wiki</h2>
          </div> */}
        </Link>
        {/* <Link to="https://koholint-island.netlify.app/koholint-island">
          <img src={palmTree} alt="logo" />
        </Link> */}
      </div>
      <div className="flex justify-between">
        <Link to="/" activeClassName="active-link">
          home
        </Link>
        <Link to="/categories" activeClassName="active-link">
          categories
        </Link>
        <Link to="/explore" activeClassName="active-link">
          explore
        </Link>
      </div>
    </nav>
  )
}

export default NavBar
