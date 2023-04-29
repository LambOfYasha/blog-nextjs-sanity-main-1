import React from 'react'
import Dropdown from "../Dropdown"
import {AbsLogo} from '../../styles/images'
import {Header} from "../Header"
import Footer from "../Footer"
import * as Navigation from '../../styles/styles'
import BlogBoxM from '../BlogBox'


export default function Mobile(props) {
  return (
    <div className="w3-content w3-panel w3-mobile  w3-hide-medium w3-hide-large" >   <section  >           
    
    <Dropdown title="Menu"  demo="MenuMobile" classType="w3-tiny w3-border w3-rightbar w3-button w3-black w3-bar-item"><Header /></Dropdown>
</section>

<section className='w3-circle' style={{ 
      backgroundImage: `url(${AbsLogo})`, backgroundRepeat: 'no-repeat', backgroundSize:'cover', height:'250px' 
    }} >
<div className=''>
  <Dropdown title="News" demo="NewsContentMobile" classType="w3-tiny w3-border w3-block  w3-button w3-amber ">{props.children}</Dropdown>
</div>


</section>

<Footer settings="w3-tiny w3-center w3-black" />
 
 </div>
  )
}
