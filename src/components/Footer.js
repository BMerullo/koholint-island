import React from "react"
import { Link } from "gatsby"
import logoImg from "../assets/images/logos/computer-logo.png"
import linkedinImg from "../assets/images/logos/linkedin-img.png"
import githubImg from "../assets/images/logos/github-img.png"
import logo from "../assets/images/logos/logo.png"

const Footer = () => {
  return (
    <footer className="bg-grey px-4 lg:px-[300px] lg:flex justify-between items-top py-10">
      <div className="pb-4 lg:pb-4">
        <Link to="https://bob-merullo.netlify.app/">
          <img src={logo} alt="logo" className="h-10 " />
        </Link>
      </div>
      <div className="flex justify-between">
        <div className="">
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
        <div className="lg:ml-20">
          <ul>
            <div>
              <li>
                <a
                  href="https://bob-merullo.netlify.app/"
                  className="flex items-center"
                >
                  <img src={logoImg} alt="linkedin logo" className="h-4 pr-2" />{" "}
                  portfolio
                </a>
              </li>
            </div>
            <div>
              <li>
                <a
                  href="https://www.linkedin.com/in/bobmerullo/"
                  className="flex items-center"
                >
                  <img
                    src={linkedinImg}
                    alt="linkedin logo"
                    className="h-4 pr-2"
                  />{" "}
                  linkedin
                </a>
              </li>
            </div>
            <div className="flex">
              <li>
                <a
                  href="https://github.com/BMerullo"
                  className="flex items-center"
                >
                  <img src={githubImg} alt="github logo" className="h-4 pr-2" />{" "}
                  github
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
