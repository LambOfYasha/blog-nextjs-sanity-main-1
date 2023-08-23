import React from 'react'

function Center(props) {
  return (
    <div style={{width:'50%', display:'block', marginLeft:'auto', marginRight:'auto'}}>{props.children}</div>
  )
}

export default Center