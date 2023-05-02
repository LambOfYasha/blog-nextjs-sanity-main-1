import React from 'react'
import Dropdown from "../Dropdown"
import {AbsLogo} from '../../styles/images'
import {Header} from "../Header"
import Footer from "../Footer"
import * as Navigation from '../../styles/styles'


export default function Mobile(props) {
  return (
    <div className="w3-content w3-panel w3-mobile  w3-hide-medium w3-hide-large" >   <section  >           
                    <button className={Navigation.RegisterButton}>Get Started</button>
    <button className={Navigation.MemberButton}>Sign In</button>
    <Dropdown title="Menu"  demo="MenuMobile" classType="w3-tiny w3-border w3-rightbar w3-button w3-black w3-bar-item"><Header /></Dropdown>
</section>

<section className='w3-circle' style={{ 
      backgroundImage: `url(${AbsLogo})`, backgroundRepeat: 'no-repeat', backgroundSize:'cover', height:'250px' 
    }} >
<div className=''>
<article  className="w3-tiny w3-border w3-border-black w3-block w3-center w3-amber">
  <h5>News</h5>
</article>
{props.children}
</div>


</section>

<Footer settings="w3-tiny w3-center w3-black" />
 
 </div>
  )
}
