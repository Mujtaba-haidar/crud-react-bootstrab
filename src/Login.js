import React from 'react'
import '../src/css/styleLogin.css'
import { BiUser,BiLockAlt } from "react-icons/bi";
import { Link } from 'react-router-dom';

 const Login = () => {
  
  return (
<div className='container' style={{width:'500px'}}>
  <form>
    <h1>LOGIN</h1>
      <div className='inputall'>
          <BiUser style={{fontSize:'40px'}}/> <input type='text' placeholder='UserName'/>  
          <br/>
           <BiLockAlt style={{fontSize:'40px'}}/> <input type='password' placeholder='Password' />
            
      </div>
      <Link to="/">
          <input type='submit' value='LOGIN' /> 
          </Link>
  </form>
</div>
  )
}
export default Login;