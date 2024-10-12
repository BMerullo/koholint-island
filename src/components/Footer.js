import React from "react"
import { Link } from "gatsby"
import logoImg from "../assets/images/logos/computer-logo.png"
import linkedinImg from "../assets/images/logos/linkedin-img.png"
import githubImg from "../assets/images/logos/github-img.png"
import logo from "../assets/images/logos/logo.png"

const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <Link to="https://bob-merullo.netlify.app/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/explore">Explore</Link>
              </li>
              <li>
                <Link to="/catagories">Categories</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <div>
                <li>
                  <a href="https://bob-merullo.netlify.app/">
                    <img src={logoImg} alt="linkedin logo" /> portfolio
                  </a>
                </li>
              </div>
              <div>
                <li>
                  <a href="https://www.linkedin.com/in/bobmerullo/">
                    <img src={linkedinImg} alt="linkedin logo" /> linkedin
                  </a>
                </li>
              </div>
              <div>
                <li>
                  <a href="https://github.com/BMerullo">
                    <img src={githubImg} alt="github logo" /> github
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
