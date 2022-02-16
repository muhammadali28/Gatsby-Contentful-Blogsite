import React, { useContext } from "react"
import { Link, navigate } from "gatsby"
import { AuthContext } from "../context/auth"
import firebase from "gatsby-plugin-firebase"
import PropTypes from "prop-types"


const Header = ({ siteTitle }) => {
  
  const { user } = useContext(AuthContext)

  const handleLogout = async () => {
    await firebase.auth().signOut()
    navigate("/login")
  }
  
  return(

  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding:10,
        display:'flex',
        justifyContent: 'center',
      }}
    >
      <h1 style={{ margin: 0 ,marginRight:400}}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div style={{display:"flex" ,alignItems:"center"}}>
          <p 
            style={{margin:0, marginRight:30}}>
            <Link to="/" style={{
            color: `white`,
            textDecoration: `none`,
            }}>Home</Link>
          </p>
        {!user ? (
          <>
            <p 
            style={{margin:0, marginRight:30}}>
            <Link to="/register" style={{
            color: `white`,
            textDecoration: `none`,
            }}>Register</Link>
            </p>
            <p style={{margin:0}}>
            <Link to="/login" style={{
            color: `white`,
            textDecoration: `none`,
            }}>Login</Link>
            </p>
          </>
        ) : (
          <>
            <p 
            style={{margin:0, marginRight:30}}>
            <Link to="/blog" style={{
            color: `white`,
            textDecoration: `none`
            }}>Blog</Link>
            </p>
            <p onClick={handleLogout}
            style={{margin:0}}>
            <Link to="#!" style={{
            color: `white`,
            textDecoration: `none`,
            }}>Logout</Link>
            </p>
          </>  
        )}
      </div>
    </div>
  </header>
)
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
