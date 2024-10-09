import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { baseUrl } from './auth'

function Register() {
    const BASE_API_URL = baseUrl()
    const [username , setusername] = useState("")
    const [password , setpassword] = useState("")

    const navigate = useNavigate()

    const registerSubmit =  (e) => {
        e.preventDefault();

        const id = Date.now()
        const user = {username,password,id};

        fetch( `${BASE_API_URL}/users`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
          })
          .then((res)=>{
            if(res.ok){
                navigate('/login')
            }else{
              alert('Registration failed !')
            }
          }).catch((error)=>{
            alert(error)
          })
      };

  return (
    <>
    <div className='wraper'>
      <div className="form-container">
        <form className="register-form" onSubmit={registerSubmit}>
          <h2>Register</h2>
          <input type="text" placeholder="User Name" required value={username} onChange={(e) => setusername(e.target.value)}/>
          <input type="password" placeholder="Password" required value={password} onChange={(e) => setpassword(e.target.value)}/>
          <button type="submit">Register</button>
          <div className="links">
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </form>
      </div>
      </div>
    </>
  )
}

export default Register