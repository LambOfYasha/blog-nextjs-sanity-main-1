import React from 'react'
import Theme from "../components/Theme";

export default function Home() {


  return (
    <div>
   <Theme title="News">       <div className='w3-container  w3-row-padding w3-section ' style={{margin:"auto", width: '50%'}}>
  <article className='w3-card w3-margin w3-col m3 w3-border w3-border-black w3-amber w3-button w3-round-xlarge'>
      <div className="w3-border w3-white w3-panel w3-border-black">Picture</div>
      <div className='w3-black'>Title</div>
      <div className='w3-grey'>Date</div>
  </article>
  <article className='w3-card w3-margin w3-col m3 w3-border w3-border-black w3-amber w3-button w3-round-xlarge'>
      <div className="w3-border w3-white w3-panel w3-border-black">Picture</div>
      <div className='w3-black'>Title</div>
      <div className='w3-grey'>Date</div>
  </article>
  <article className='w3-card w3-margin w3-col m3 w3-border w3-border-black w3-amber w3-button w3-round-xlarge'>
      <div className="w3-border w3-white w3-panel w3-border-black">Picture</div>
      <div className='w3-black'>Title</div>
      <div className='w3-grey'>Date</div>
  </article>
  <article className='w3-card w3-margin w3-col m3 w3-border w3-border-black w3-amber w3-button w3-round-xlarge'>
      <div className="w3-border w3-white w3-panel w3-border-black">Picture</div>
      <div className='w3-black'>Title</div>
      <div className='w3-grey'>Date</div>
  </article>
  </div></Theme>
   </div>
  )
}
