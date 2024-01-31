import React from 'react'
import * as Navigation from '../styles/styles'
import Link from 'next/link'
import NavLinks from '../data/data'
import NavLink2 from '../data/data2'
import Image from 'next/image'
import SignInButton from './SignInButton'
import { AbsLogo } from '../styles/images'

export function HeaderDT (props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined }){


    return (<header className={Navigation.NavBarDT} >

    <Image src={AbsLogo} className='w3-image w3-hide-large w3-hide-medium' alt="ABSBanner" width="150" height="100" />

{/* <SignInButton/> */}
        {NavLinks.map((nlinks) => {
    return (<button key={nlinks.id} className={Navigation.NavButtonDT}>
        <Link  href={nlinks.href}>{nlinks.link}</Link>
    </button>
 )})} 
 {NavLinks.map((nlinks) => {
    return (<button key={nlinks.id} className={Navigation.NavButtonTab}>
        <Link  href={nlinks.href}>{nlinks.link}</Link>
    </button>
 )})} 
  {NavLink2.map((nlinks) => {
    return (<button key={nlinks.id} className={Navigation.NavButtonMobile}>
        <Link  href={nlinks.href}>{nlinks.link}</Link>
    </button>
 )})} 
         <h3 className='w3-bar-item w3-hide-small w3-hide-medium w3-center'>AntiBlasphemy Studios</h3>
         <h3 className='w3-bar-item w3-hide-small w3-hide-large w3-large w3-center'>AntiBlasphemy Studios</h3>

{props.children}
</header>)
}

export default [HeaderDT]