import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import {GatsbyImage, getImage} from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulBlogPost(sort: {fields: publisheddate, order: DESC}) {
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
  
  return (
    <Layout>
      <SEO title="Blog" />
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
              {console.log(edge.node.featuredImage)}
              <GatsbyImage classNmae="featured" image={getImage(edge.node.featuredImage)} alt={edge.node.title} />

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