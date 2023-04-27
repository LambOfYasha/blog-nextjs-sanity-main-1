'use client'
import React from "react"
import * as Navigation from '../styles/styles'
import Link from 'next/link'
import Image from 'next/image'
import { ABSDesktopBanner } from '../styles/images'
import Footer from "../components/Footer"
import {Header, HeaderDT, HeaderTab } from "../components/Header"
import Dropdown from "../components/Dropdown"
import { BodyTab } from "../components/Body"
import { ABSTabletBanner } from "../styles/images"
import { AbsLogo } from "../styles/images"
import Body from "../components/Body"
import Theme from "../components/Theme"
import BlogBox from "../components/BlogBox"

export const Page = () => {
return (
<div>
<Theme title="News"><BlogBox classType="w3-container  w3-row-padding w3-section"/></Theme>
</div> 
)
}






  export function Mobile() {
    return (
      <div className="w3-content w3-panel w3-mobile  w3-hide-medium w3-hide-large" >   <section  >           
      <button className={Navigation.RegisterButton}>Get Started</button>
      <button className={Navigation.MemberButton}>Sign In</button>
      <Dropdown title="Menu"  demo="MenuMobile" classType="w3-tiny w3-border w3-rightbar w3-button w3-black w3-bar-item"><Header/></Dropdown>
  </section>
  
  <section className='w3-circle' style={{ 
        backgroundImage: `url(${AbsLogo})`, backgroundRepeat: 'no-repeat', backgroundSize:'cover', height:'250px' 
      }} >
  <div className='w3-display-container'><Body title="News"></Body></div>
  
  
  </section>
  
  <Footer settings="w3-tiny w3-center w3-black" />
   
   </div>
    )
  }
  


  export default Page