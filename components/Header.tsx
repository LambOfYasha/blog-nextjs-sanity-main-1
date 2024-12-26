"use client"
import React from 'react'
import NavLinks from '../data/data'
import HomeButtons from './WebElements/Buttons'




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