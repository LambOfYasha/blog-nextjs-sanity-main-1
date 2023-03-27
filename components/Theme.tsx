import React from 'react'
import Desktop from "./Themes/Desktop"
import Mobile from "./Themes/Mobile"
import Tablet from "./Themes/Tablet"

function Theme(props){

return (
    <div>
        <Mobile title={props.title}>
           {props.children}
        </Mobile>

        <Tablet />

        <Desktop title={props.title} >
 {props.children}
        </Desktop>

   </div>
)

}

export default Theme