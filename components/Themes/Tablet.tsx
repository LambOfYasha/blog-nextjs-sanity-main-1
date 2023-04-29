import React from 'react'
import {ABSTabletBanner} from '../../styles/images'
import * as Navigation from '../../styles/styles'
import BlogBox from '../BlogBox'
import Footer from '../Footer'
import {HeaderTab}  from '../Header'

export function Tablet(props) {
  return (
    <div className='w3-content w3-hide-small w3-hide-large w3-white'>
 <section>
  <h1>AntiBlasphemy Studios</h1>
   
      <HeaderTab/>
  </section>
<section className='w3-black'>
  <h2>{props.title}</h2>
  </section>
<article className='w3-card-4 w3-opacity-min'>

<div style={{ 
      backgroundImage: `url(${ABSTabletBanner})`, backgroundRepeat: 'no-repeat', backgroundSize:'cover', height:'450px' 
    }}>            
{props.children}</div>
          </article>
              <section><Footer settings="w3-container w3-amber w3-center"></Footer></section>

    </div>
  )
}
export default Tablet