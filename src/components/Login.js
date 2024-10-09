import {useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { baseUrl } from './auth';

function Login() {

    const BASE_API_URL = baseUrl()
    const [username , setusername] = useState("")
    const [password , setpassword] = useState("")

    const navigate = useNavigate()
    
    const loginsubmit = async (e) => {
      e.preventDefault();      
      const response = await fetch(`${BASE_API_URL}/users?username=${username}&password=${password}`);
      const data = await response.json();
      if (data.length) {
          localStorage.setItem('userId', data[0].id);
          localStorage.setItem(data[0].id, []);
          navigate('/')
      }else(
        alert('Invalid credentials !')
      )
    };

  return (
    <>
    <div className='wraper'>
      <div className="form-container">
        <form className="login-form" onSubmit={loginsubmit}>
          <h2>Login</h2>
          <input type="text" placeholder="User Name" required value={username} onChange={(e) => setusername(e.target.value)}/>
          <input type="password" placeholder="Password" required value={password} onChange={(e) => setpassword(e.target.value)}/>

          <button type="submit">Login</button>
          <div className="links">
            <p>
              Don't have an account? <Link to="/register">Sign up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default Login;