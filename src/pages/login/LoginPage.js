import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import * as yup from "yup";
import { useFormik } from "formik";
import { useState } from "react";
import Spinner from 'react-bootstrap/Spinner';
import "./Login.css"
import TwitterIcon from '@mui/icons-material/Twitter';
import { UilTwitter } from '@iconscout/react-unicons'

const LogInPage = () => {
 const[loader,setLoader]=useState(false)
  const navigate = useNavigate();
  
  const { values, handleChange, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
    });
    

    const setLoaderFunction =()=>{
      if(!values.email ||
        !values.password || (errors.password && touched.password)){
       return setLoader(false)
      }
      else{
        return setLoader(true)
      };
    }
  
  return (
   
    <div className="loginPage">
      
      <div className="login-main">

     
   
          <form onSubmit={handleSubmit} className="form-signIn">
            <div style={{textAlign:"left"}}>
            <UilTwitter color="rgba(31, 54, 226, 0.89)" size="4rem" />
            </div>
            <div className="title-login"
            onClick={()=>navigate("/")}>Log in to Twitter</div>
          <div className="input-div">
              <input
                className="input-login"
                placeholder="phone number, email address"
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                value={values.email}
                onBlur={handleBlur}
              ></input>
            </div>
           

              <div className="input-div">
             <input
                placeholder="Password"
                className="input-login"
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              ></input>
            </div>
            
           

            <div className="flex-container">
              <div className="w-100">
                <button type="" className="login-btn-land"
                onClick={()=>setLoaderFunction()}
                >
                  {loader?<Spinner animation="border" variant="secondary" size="md" />:"Login"}
                </button>
              </div>
            </div>
            <div className="w-100 m-1">
               
               <p
               className="forget-password-login-user"
               style={{float:"left"}}
             >
               Forget Password?
             </p>

             <p
               className="forget-password-login-user"
               style={{float:"right"}}
               onClick={()=>navigate("/signUp")}
             >
              Sign up to Twitter
             </p>
                 </div>
            <div>
       </div>
          </form>
      </div>
    
    </div>
   
    
  );
};

export default LogInPage;
