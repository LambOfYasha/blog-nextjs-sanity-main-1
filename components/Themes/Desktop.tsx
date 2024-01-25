import React from 'react'
import Image from 'next/image'
import { ABSDesktopBanner } from '../../styles/images'
import Footer from '../Footer'
import { HeaderDT } from '../Header'

export default function Desktop(props) {
  return (
    <div className='l1 w3-hide-small w3-hide-medium '>


<section >
 
{props.children}
</section>
    </div>
  )
}

export function Banner (){
return(<section className='w3-black w3-hide-medium w3-hide-small'>
<Image src={ABSDesktopBanner} className='w3-image w3-border-top w3-border-black' alt="ABSBanner" width="2150" height="250" />
<h4 className='w3-center w3-black'>#CreativityInTheNameOfChrist</h4>
</section>)
}