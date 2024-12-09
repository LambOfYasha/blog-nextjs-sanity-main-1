"use client"
import React from 'react'
import * as Navigation from '../styles/styles'
import Link from 'next/link'
import NavLinks from '../data/data'
import NavLink2 from '../data/ministrynav'
import Image from 'next/image'
import HomeButtons from './WebElements/Buttons'
import SignInButton from './SignInButton'
import { width } from './OpenGraphImage'
import { ABSDesktopBanner} from '../styles/images'


function myClick() {
    const x = document.getElementById("Click");
    if (x) {
        if (!x.className.includes("w3-show")) { 
            x.className += " w3-show";
        } else {
            x.className = x.className.replace(" w3-show", "");
        }
    }
  }




export function Header (props: {settings: string}){


    return (<header id="header" className="w3-bar w3-black w3-content">
{NavLinks.map((link) => {
    return (
      <HomeButtons 
        id={link.id} 
        href={link.href} 
        settings={props.settings}
        link={link.link}
      />
    )
  })}
    </header>)
}

export default Header