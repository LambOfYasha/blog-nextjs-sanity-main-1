'use client'
import Link from 'next/link'
import React from 'react'
import {Tab, Tabs, TabList} from 'react-tabs'


       

 const ABSTabs = (props)  => {
    

  return (

<Tabs>   
  
  <TabList className={'w3-bar w3-border w3-border-black w3-amber w3-round-xxlarge'}>
    <Link href={`${props.link0}`}><Tab className={'w3-bar-item w3-button'}>{props.title0}</Tab></Link>
    <Link href={`${props.link1}`}><Tab className={'w3-bar-item w3-button'}>{props.title1}</Tab></Link>
    <Link href={`${props.link2}`}><Tab className={'w3-bar-item w3-button'}>{props.title2}</Tab></Link>
    <Link href={`${props.link3}`}><Tab className={'w3-bar-item w3-button'}>{props.title3}</Tab></Link>
    <Link href={`${props.link4}`}><Tab className={'w3-bar-item w3-button'}>{props.title4}</Tab></Link>
    <Link href={`${props.link5}`}><Tab className={'w3-bar-item w3-button'}>{props.title5}</Tab></Link>
    <Link href={`${props.link6}`}><Tab className={'w3-bar-item w3-button'}>{props.title6}</Tab></Link>
  </TabList>

{props.children}
    
  </Tabs>
  
  )
  
}


export default ABSTabs