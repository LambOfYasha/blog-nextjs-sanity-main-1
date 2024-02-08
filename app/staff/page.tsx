'use client'
import { groq } from "next-sanity"
import {client} from '../../lib/sanity.client'
import { PortableText } from "@portabletext/react"
import { Center, Square, Circle } from '@chakra-ui/react'
import Image from "next/image"
import urlFor from "../../lib/urlFor"
import { HeaderTitleBar } from "../../styles/styles"
import React from "react"

   const query = groq`
    *[_type=='page'][3]
    {
        ...,
        coverImage,
    }`

 
const query2 = groq`
*[_type=='staff']
{
    ...,
    picture,
}`
    
export default async function Page(){

 const staff: Staff = await client.fetch(query2)

const page: Page = await client.fetch(query)

   return (

   <article className="w3-hide-small w3-center ">
    <section>
        <div className={HeaderTitleBar}>{page.title}</div>
    </section>
    <section className="w3-margin w3-center w3-container">
    {/* <Image className="w3-hide-small" width={700} height={350} src={urlFor(page.coverImage).url()} alt={post.author.name} /> */}
        <PortableText value={page.content}></PortableText>
        
        
<Center className="w3-card-4 w3-amber w3-bar">
  {staff.map((stff: any, index: any) => {
  
 (<React.Fragment key={index}>
 <div key={index}>
      
     <Image  className="w3-hide-small  w3-circle w3-border w3-border-black" width={225} height={225} src={urlFor(stff.picture).url()} alt={stff.name} /> 
       
         
       
        <div key={stff.id} className="w3-bar-item w3-ul w3-white w3-right w3-container">
            <li>Name: {stff.name}</li> 
            <li>Alias: {stff.alias}</li>
            <li>Position: {stff.position}</li>
            <li>Portfolio: <PortableText value={stff.content}></PortableText></li>
        </div> 
        </div> </React.Fragment>
         )})}       

</Center> 

        </section>
</article> 
)
}

