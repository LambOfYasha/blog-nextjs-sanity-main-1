import React from 'react'
import Accordion from './Accordion'
import BlogBox from './BlogBox'
import Dropdown from './Dropdown'

function Body(props) {
  return (
    <article className="">
    <Accordion title={props.title} demo="News" classType="w3-amber w3-button w3-cell w3-block">    <div className="w3-tiny w3-white w3-opacity-min" >{props.children}</div>
</Accordion>
    
    </article>
  )
}

export function BodyTab(props) {
  return (
    <article className="">
          <BlogBox classType='w3-white  w3-opacity-min' >jlfjaljl;jofjaoifjwljlajajf  joiajflajiofjf  fifjlaj fiajfij iafjfi  fiajfijafajaifji </BlogBox>

    
     </article>
  )
}

export default Body