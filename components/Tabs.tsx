'use client'
import React from 'react'
import {Tab, Tabs, TabList} from 'react-tabs'


       

 const ABSTabs = (props)  => {
    

  return (

<Tabs>   
  
  <TabList className={'w3-bar w3-border w3-border-black w3-amber w3-round-xxlarge'}>
    <Tab className={'w3-bar-item w3-button'}>{props.title0}</Tab>
    <Tab className={'w3-bar-item w3-button'}>{props.title1}</Tab>
    <Tab className={'w3-bar-item w3-button'}>{props.title2}</Tab>
    <Tab className={'w3-bar-item w3-button'}>{props.title3}</Tab>
    <Tab className={'w3-bar-item w3-button'}>{props.title4}</Tab>
    <Tab className={'w3-bar-item w3-button'}>{props.title5}</Tab>
  </TabList>

{props.children}
    
  </Tabs>
  
  )
  
}


export default ABSTabs