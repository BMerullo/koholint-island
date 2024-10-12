import React from "react"
import { Link } from "gatsby"
import palmTree from "../assets/images/logos/island.jpg"

const NavBar = () => {
  return (
    <nav className="flex">
      <div>
        <Link to="/">
          <div>
            <h2 className="">Koholint Wiki</h2>

            <img className="display-none" src={palmTree} alt="logo" />
          </div>
          {/* <div>
            <h2>Koholint Wiki</h2>
          </div> */}
        </Link>
        {/* <Link to="https://koholint-island.netlify.app/koholint-island">
          <img src={palmTree} alt="logo" />
        </Link> */}
      </div>
      <div className="sm:hidden">
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
