import React from 'react'
import Desktop from "./Themes/Desktop"
import Mobile from "./Themes/Mobile"
import Tablet from "./Themes/Tablet"
import PageModal from './PageModal'

function Theme(props: { title: any; children: any }){

return (
    <div>
        {/* <Mobile title={props.title}>
           {props.children}
        </Mobile> */}

        {/* <Tablet title={props.title} >{props.children}</Tablet> */}

        <Desktop title={props.title} >
 {props.children}
        </Desktop>

   </div>
)

}

export default Theme