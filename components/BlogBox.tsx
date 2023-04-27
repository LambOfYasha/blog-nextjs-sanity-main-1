import React from 'react'

function BlogBox(props) {
  return (
    <div className={`${props.classType}`} style={{margin:"auto", width: '50%'}}>
 <article className='w3-card w3-margin w3-col m3 w3-border w3-border-black w3-amber w3-button w3-round-xlarge'>
     <div className="w3-border w3-hide-small w3-white w3-panel w3-border-black"><img  alt="" /></div>
     <div className='w3-black'>Title</div>
     <div className='w3-grey'>Date</div>
 </article></div>
  )
}




export default BlogBox