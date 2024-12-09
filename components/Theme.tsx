import React from 'react'
import Desktop from "./Themes/Desktop"

function Theme(props: { title: any; children: any }){

return (
    <div>
        <Desktop title={props.title} >
            {props.children}
        </Desktop>

   </div>
)

}

export default Theme