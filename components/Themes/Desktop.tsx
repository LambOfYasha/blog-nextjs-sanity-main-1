import React from 'react'
import * as Navigation from '../../styles/styles'
import Link from 'next/link'
import Image from 'next/image'
import { ABSDesktopBanner } from '../../styles/images'
import Footer from '../Footer'

function Desktop(props) {
  return (
    <div className='l1 w3-hide-small w3-hide-medium  w3-border w3-border-black'>
<header  className={Navigation.NavBarDT} >
<button className={Navigation.RegisterButtonDT}>Get Started</button>
        <button className={Navigation.MemberButtonDT} >Login</button>
    <button className={Navigation.HomeButtonDT}><Link href="/">Home</Link></button>
    <button className={Navigation.NavButtonDT}><Link href="/projects">Projects</Link></button>
    <button className={Navigation.NavButtonDT}><Link href="https://www.antiblasphemystudios.com">Blog</Link></button>
    <button className={Navigation.NavButtonDT}><Link href="/contact">Contact</Link></button>
    <button className={Navigation.NavButtonDT}><Link href="/about">About</Link></button>
    <button className={Navigation.NavButtonDT}><Link href="/members">Members</Link></button>
    <button className={Navigation.NavButtonDT}><Link href="/staff">Staff</Link></button>
</header>
<section className='w3-black'>
<Image src={ABSDesktopBanner} alt="ABSBanner" width="2560" height="450" />
<h4 className='w3-center w3-black'>#CreativityInTheNameOfChrist</h4>
<h2 className='w3-center w3-amber'>{props.title}</h2>
</section>
<section className=''>
  {props.children}
 
</section>
<Footer settings="w3-center"/>
    </div>
  )
}

export default Desktop