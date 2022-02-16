import firebase from "gatsby-plugin-firebase"
import React, { useState, useContext } from "react"
import { navigate } from "gatsby"
import { AuthContext } from "../context/auth"
import Layout from '../components/layout'
import Seo from '../components/seo'

const Register = () =>{
    
    const [data, setData] = useState({
        email: "",
        password: "",
      })
      
    const { setUser } = useContext(AuthContext)
    
    const handleChange = e =>
        setData({ ...data, [e.target.name]: e.target.value })
    
    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const result = await firebase
              .auth()
              .createUserWithEmailAndPassword(data.email, data.password)
            setUser(result.user)
            navigate("/login")
        } 
        catch (err) {
            console.log(err.message)
        }
    }

return(
    <Layout>
        <Seo title='Register'/>
        <h4>Register</h4>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='email'>Email</label>
                <br/>
                <input 
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}/>
                <br/>
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <br/>
                <input 
                type='password'
                name='password'
                value={data.password}
                onChange={handleChange}/>
                <br/>
            </div>
            <br/>
            <input 
            style={{backgroundColor:"#663399", color:"white", borderColor:"white", borderRadius:"10px" }}
            type='submit' value='Register'/>
        </form>
    </Layout>
)
}
export default Register;




















