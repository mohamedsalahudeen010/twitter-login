import React from 'react'
import "./LandingPage.css"
import { UilTwitter } from '@iconscout/react-unicons'
import FloatingDiv from '../../components/floatingDiv/FloatingDiv'
import { useNavigate } from 'react-router-dom'

function LandingPage() {

  const navigate=useNavigate()
  return (
    <div className='landingPage '>
      <div className='land-main'>
      <div className='row'>
      <div className='col-6 land-left'>
          <img src="https://m.economictimes.com/thumb/msid-94635807,width-1200,height-900,resizemode-4,imgsize-4700/twitter-blue-subscribers-getting-edit-feature.jpg" alt="twitter"></img>
          </div>
          <div className='col-5 land-right' style={{textAlign:"left"}}>
          <div style={{textAlign:"left"}}>
            <UilTwitter color="rgba(31, 54, 226, 0.89)" size="4rem" />
          
            <h1
            className='land-title'>Happening Now</h1>
          <h3
          className='land-title'>Join Twitter today</h3>

          <div>
            <div><FloatingDiv
            img={"https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png"}
            text1="Sign up with Google">
            </FloatingDiv></div>
            <div>
            <FloatingDiv
            img={"https://i.pinimg.com/originals/3a/80/d0/3a80d08597eb583fc0784a694b56169a.jpg"}
            text1="Sign up with Apple">
            </FloatingDiv></div>
            <div onClick={()=>navigate("/signUp")}>
            <FloatingDiv
           text1="Sign up with Phone or Email">
            </FloatingDiv></div>
            <div className='footer'>
  <p>This site is protected by reCAPTCHA and the Google 
    <span><a href='https://policies.google.com/privacy' target={"_blank"}  rel={"noreferrer"}>Privacy Policy 
    </a></span>and <span><a href='https://policies.google.com/terms' target={"_blank"}  rel={"noreferrer"}>Terms of Condition </a></span> apply.</p>
    <hr></hr>
    <div className='footer_Newuser'>
      <p>Already have an Account? <span style={{color:"blue",cursor:"pointer"}}
      onClick={()=>navigate("/login")}>Log in</span> </p>
      </div>
  </div>
          </div>
            </div>
          </div>
      </div>
      </div>
 
   </div>

        
  )
}

export default LandingPage