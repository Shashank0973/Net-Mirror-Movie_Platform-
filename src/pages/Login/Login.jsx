import React, { useState } from 'react';
import './Login.css';
import logo from '../../assets/Logo.png';

const Login = () => {

const [signState, setSignState] = useState("Sign In");

  return (
    <div className='login'>
      <img src={logo} className='login-logo' alt="NetMirror Logo" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState==="Sign Up"?<input type="text" placeholder="Your name"/>:<></>}
          <input type="email" placeholder="Email or phone number" required />
          <input type="password" placeholder="Password" required />
          <button>{signState}</button>
          <div className="form-help">
          <div className="remember">
            <input type="checkbox" />
            <label htmlFor="">Remember me</label>
            </div>
            <p>Need help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign In" ?
          <p>New to NetMirror? <span onClick={()=>{setSignState("Sign Up")}}>Sign Up Now</span></p>
          :<p>Already have an account? <span onClick={()=>{setSignState("Sign In")}}>Sign In</span></p>
        }
          
        </div>
      </div>
    </div>
  );
}

export default Login;
