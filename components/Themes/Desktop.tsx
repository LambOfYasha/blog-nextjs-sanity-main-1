import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { AbsLogo } from '../../styles/images'
import * as Navigation from '../../styles/styles'
import Image from 'next/image'

function abmTitle() {
  return (<>
  <section className='w3-center w3-display-top w3-hide-large w3-hide-medium'><Image src={AbsLogo} alt="AntiBlasphemy Ministries Logo" width={300} height={300} /></section>
  <section><h2 className=' w3-mobile w3-right w3-hide-large w3-hide-small w3-text-amber'>AntiBlasphemy Ministries</h2></section>
       <section ><h1 id="title" className='w3-right w3-hide-small w3-hide-medium w3-bar-item w3-text-amber'>AntiBlasphemy Ministries</h1></section></>)
}

export default function Desktop(props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | Iterable<React.ReactNode> | null | undefined , title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | Iterable<React.ReactNode> | null | undefined }) {
  return (
    <div className='w3-mobile w3-container'>
       {/* {abmTitle()}
      <Header settings={Navigation.NavButtonDT} />
      <Header settings={Navigation.NavButtonTab} />
      <Header settings={Navigation.NavButtonMobile} />
      <Footer settings="w3-center w3-mobile w3-large w3-border w3-black w3-border-amber w3-text-amber" />  */}
      {props.children}
    </div>
  )
}

