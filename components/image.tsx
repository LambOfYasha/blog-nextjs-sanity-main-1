import React from 'react'

export default function Image(props) {
  return (
    <div><img className="w3-image" src={props.imgSrc} style={props.style} />
</div>
  )
}


