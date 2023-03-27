import React from 'react'
import {ABSTabletBanner} from '../../styles/images'
import * as NavTab from '../../styles/styles'
import { BodyTab } from '../Body'
import Footer from '../Footer'
import Link from 'next/link'


function Tablet() {
  return (
    <div className='w3-content w3-hide-small w3-hide-large w3-white'>
  <h1>AntiBlasphemy Studios</h1>
     <button className={NavTab.RegisterButtonTab}>Get Started</button>
    <button className={NavTab.MemberButtonTab}>Sign In</button>
    <header  className={NavTab.NavBarTab} >
    <button className={NavTab.HomeButtonTab}><Link href="/">Home</Link></button>
    <button className={NavTab.HomeButtonTab}><Link href="/projects">Projects</Link></button>
    <button className={NavTab.HomeButtonTab}><Link href="https://www.antiblasphemystudios.com">Blog</Link></button>
    <button className={NavTab.HomeButtonTab}><Link href="/contact">Contact</Link></button>
    <button className={NavTab.HomeButtonTab}><Link href="/about">About</Link></button>
    <button className={NavTab.HomeButtonTab}><Link href="/members">Members</Link></button>
    <button className={NavTab.HomeButtonTab}><Link href="/staff">Staff</Link></button>
</header>
<section className='w3-black'>
  <h2>News</h2>
  </section>
<article className='w3-card-4 w3-opacity-min'>

<div style={{ 
      backgroundImage: `url(${ABSTabletBanner})`, backgroundRepeat: 'no-repeat', backgroundSize:'cover', height:'450px' 
    }}>            
<BodyTab title="News" />
</div>
          </article>
              <section><Footer settings="w3-container w3-amber w3-center"></Footer></section>

    </div>
  )
}

export default Tablet