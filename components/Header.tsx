import React from 'react'
import * as Navigation from '../styles/styles'
import Link from 'next/link'
import NavLinks from '../data/data'
import Image from 'next/image'
import SignInButton from './SignInButton'
import { AbsLogo } from '../styles/images'


export function Header() {

    return (
            <header  className={Navigation.NavBar} style={{width:'75px'}}>
            {NavLinks.map((nlinks) => {
    return (<button key={nlinks.id} className={Navigation.NavButton}>
        <Link  href={nlinks.href}>{nlinks.link}</Link>
    </button>
 )})}
 
            </header>
       
    )
}

export function HeaderTab (props: { children: string | number | boolean | React.ReactFragment | React.ReactPortal | React.ReactElement<any, string | React.JSXElementConstructor<any>> | null | undefined }){
    return (<header  className={Navigation.NavBarTab} >
          <button className={Navigation.RegisterButtonTab}>Get Started</button>
    <button className={Navigation.MemberButtonTab}>Sign In</button>
   {NavLinks.map((nlinks) => {
    return (<button key={nlinks.id} className={Navigation.HomeButtonTab}>
        <Link  href={nlinks.href}>{nlinks.link}</Link>
    </button>
 )}).shift()} 
 {props.children}
</header>)
}


export function HeaderDT (props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined }){


    return (<>
    {/* <Image src={AbsLogo} className='w3-image w3-hide-large w3-hide-medium' alt="ABSBanner" width="300" height="250" /> */}
<header className={Navigation.NavBarDT} >

{/* <SignInButton/> */}
        {NavLinks.map((nlinks) => {
    return (<button key={nlinks.id} className={Navigation.NavButtonDT}>
        <Link  href={nlinks.href}>{nlinks.link}</Link>
    </button>
 )})} 
 {/* {NavLinks.map((nlinks) => {
    return (<button key={nlinks.id} className={Navigation.NavButtonMobile}>
        <Link  href={nlinks.href}>{nlinks.link}</Link>
    </button>
 )})}  */}
         <h3 className='w3-bar-item w3-hide-small w3-center'>AntiBlasphemy Studios</h3>

{props.children}
</header></>)
}

export default [Header, HeaderDT, HeaderTab]