import React from 'react'
import Image from 'next/image'
import { ABSDesktopBanner } from '../../styles/images'
import Footer from '../Footer'
import { HeaderDT } from '../Header'

export default function Desktop(props) {
  return (
    <div className='l1 w3-hide-small w3-hide-medium  w3-border w3-border-black'>

<HeaderDT />
<section >
 
{props.children}
</section>
<Footer settings="w3-center w3-border w3-border-black"/>
    </div>
  )
}

export function Banner (){
return(<section className='w3-black w3-hide-medium w3-hide-small'>
<Image src={ABSDesktopBanner} className='w3-image' alt="ABSBanner" width="2400" height="450" />
<h4 className='w3-center w3-black'>#CreativityInTheNameOfChrist</h4>
<h2 className='w3-center w3-amber'></h2>
</section>)
}