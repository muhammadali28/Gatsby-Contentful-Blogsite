import React from "react"
import { graphql, Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import SEO from "../components/seo"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publisheddate(formatString: "Do MMMM, YYYY")
      featuredImage {
        gatsbyImageData(width: 200, placeholder: BLURRED)
      }
     body{
       raw
     }
    }
  }
`


const BlogPost = props => {

  const image = getImage(props.data.contentfulBlogPost.featuredImage)
  
  // const options = {
  //   renderNode: {
  //     "embedded-asset-block": node => {
  //       const alt = node.data.target.fields.title["en-US"]
  //       const url = node.data.target.fields.file["en-US"].url
  //       return <img alt={alt} src={url} />
  //     },
  //   },
  // }

  return (
    <Layout>
      <SEO title={props.data.contentfulBlogPost.title} />
      <Link to="/blog/">Visit the Blog Page</Link>
      <div className="content">
        <h1>{props.data.contentfulBlogPost.title}</h1>
        <span className="meta">
          Posted on {props.data.contentfulBlogPost.publisheddate}
        </span>

        {props.data.contentfulBlogPost.featuredImage && (
          <GatsbyImage className="featured" image={image} alt={props.data.contentfulBlogPost.title} />
        )}
        {/* {documentToReactComponents(props.data.contentfulBlogPost.body.raw, options)} */}
      </div>
    </Layout>
  )
}

export default BlogPost;