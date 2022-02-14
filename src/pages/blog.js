import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import {GatsbyImage, getImage} from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulBlogPost(sort: {fields: publisheddate, order: ASC}) {
          edges {
            node {
              excerpt {
                childMarkdownRemark {
                  excerpt(pruneLength: 150)
                }
              }
              title
              slug
              publisheddate(formatString: "DD MMMM,YYYY")
              id
              featuredImage {
                gatsbyImageData(width: 200, placeholder: BLURRED)
              }
            }
          }
        }
    }    
    `
  )
  const image = getImage(data.allContentfulBlogPost.edge.node.featuredImage)
  return (
    <Layout>
      <SEO title="Blog" />
      <p>
        <Link to="/">Go back to the homepage</Link>
      </p>
      <ul className="posts">
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <li className="post" key={edge.node.id}>
              <h2>
                <Link to={`/blog/${edge.node.slug}/`}>{edge.node.title}</Link>
              </h2>
              <div className="meta">
                <span>Posted on {edge.node.publisheddate}</span>
              </div>
              <p/>
               <GatsbyImage image={image} alt={edge.node.title} /> 

              <p className="excerpt">
                {edge.node.excerpt.childMarkdownRemark.excerpt}
              </p>
              <div className="button">
                <Link to={`/blog/${edge.node.slug}/`}>Read More</Link>
              </div>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default Blog;