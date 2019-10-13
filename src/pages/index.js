import React from "react"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  return (
    <>
      {data.helloAll.map(hello => (
        <p>{hello}</p>
      ))}
    </>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    helloAll
  }
`
