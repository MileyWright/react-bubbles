import React, {useState} from "react";
import {axiosWithAuth} from '../utils/axiosWithAuth.js'

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [credentials, setCredentials] = useState({username: '', password: ''})

  const handleChange = e => {
    setCredentials(
      {
        ...credentials,
        [e.target.name]: e.target.value
      }
    )
  }
  const login = e => {
    e.preventDefault();
    console.log(credentials)
    axiosWithAuth()
    .post ('/login', credentials)
    .then(res => {
      localStorage.setItem('token', res.data.payload)
      props.history.push('/colors');
    })
    .catch(err => console.log(err))
  };
  return (
    <><div className='loginContainer'>
      <h1 className='header'>Welcome to the Bubble App!</h1>
        <form class='form' onSubmit = {login}>
          <input 
          type='text'
          name='username'
          placeholder='Username'
          value={credentials.username}
          onChange={handleChange}/>

          <input
          type='password'
          name='password'
          placeholder='Password'
          value={credentials.password}
          onChange={handleChange}/>

          <button type='submit'>Log In</button>
        </form>
      </div>
    </>
  );
};

export default Login;
