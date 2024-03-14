import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import { useContext,useState } from "react";
import "./SignUp.css";
import Spinner from "react-bootstrap/esm/Spinner";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { UilTwitter } from '@iconscout/react-unicons'
import DateSelects from "../../components/date/Date";

const signUpValidation = yup.object({
  name: yup.string().required("Enter Your First Name"),
  phone: yup
    .string()
    .required("Enter your Phone Number")
    .min(10, "Enter Valid Phone Number"),
  
});

const SignUpPage = () => {
  const navigate = useNavigate();
  const [showSignUp, setShow] = useState(false);
  const [loader, setLoader] = useState(false);
  const { values, handleChange, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        name: "", 
        phone: "",
      },
      validationSchema: signUpValidation,
      
    });
    const setLoaderFunction =()=>{
      if(!values.name ||
        !values.phone || (errors.name && touched.phone)){
       return setLoader(false)
      }
      else{
        return setLoader(true)
      };
    }
 
  return (
      <div className="signUpPage">
        <div className="signUp-main">

     
   
<form onSubmit={handleSubmit} className="form-signUp">
  <div style={{textAlign:"centre"}}>
  <UilTwitter color="rgba(31, 54, 226, 0.89)" size="4rem" />
  </div>
  <div className="title-signUp"
  onClick={()=>navigate("/")}>Create an account</div>
<div className="input-div">
    <input
      className="input-signUp"
      placeholder="Name"
      type="name"
      id="name"
      name="name"
      onChange={handleChange}
      value={values.email}
      onBlur={handleBlur}
    ></input>
  </div>
 

    <div className="input-div">
   <input
      placeholder="Phone number"
      className="input-signUp"
      type="phone"
      id="phone"
      name="phone"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.password}
    ></input>
  </div>
  <div className="useEmail">
    Use Email
  </div>

  <div>
    <h1 className="dob-title">Date of birth</h1>
    <p className="dob-content">Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.</p>
  <div className="date"><DateSelects/></div>
  </div>
 

  <div className="flex-container">
    <div className="w-100">
      <button type="" className="login-btn-land"
      onClick={()=>setLoaderFunction()}
      >
        {loader?<Spinner animation="border" variant="secondary" size="md" />:"Next"}
      </button>
    </div>
  </div>
</form>
</div>

<div className="foot-signUp">
            <p>
              Already have an account? Click Here{" "}
              <span
                onClick={() => {
                  navigate("/logIn");
                }}
                className="sup-login"
              >
                Sign in !
              </span>{" "}
              for go to signIn page
            </p>
          </div>
</div>


);
};


  

export default SignUpPage;


