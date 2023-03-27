import React from 'react'

function BlogBox(props) {
  return (
    <div className={`${props.classType}`}>
        <div>
        <div className='w3-center w3-amber'>Title</div>
        <div className='w3-left w3-padding w3-margin w3-black'>Avatar</div>
        <div className='w3-padding'>
        <div>Author</div>
        <div>Date</div>
        </div>
        </div>
        <div className='w3-padding w3-margin w3-center w3-white'>
        {props.children}
        </div></div>
  )
}

export default BlogBox