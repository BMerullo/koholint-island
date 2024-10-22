import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import AllItems from "../components/AllItems"
import SEO from "../components/SEO"

export default function Home() {
  return (
    <Layout>
      <SEO title="Home Page" />
      <main>
        <hero className="relative">
          <StaticImage
            className="rounded-2xl h-[400px]"
            src="../assets/images/koholint-img.jpeg"
            alt="koholint island"
            placeholder="blurred"
            layout="fullWidth"
          ></StaticImage>
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-white text-center rounded-2xl h-[400px]">
            <div>
              <h3 className="size-md">The Legend of Zelda</h3>
              <h2 className="text-4xl">Link's Awakening</h2>
            </div>
          </div>
        </hero>
        <AllItems />
      </main>
    </Layout>
  )
}
