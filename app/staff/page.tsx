'use client'
import { groq } from "next-sanity"
import {client} from '../../lib/sanity.client'
import { PortableText } from "@portabletext/react"
import { Center, Square, Circle } from '@chakra-ui/react'
import Image from "next/image"
import urlFor from "../../lib/urlFor"
import React from "react"

export const revalidate = 30

   const query = groq`
   *[_type=='page' && title == "Staff"][0]    {
        ...,
        coverImage,
    }`

 
const query2 = groq`
*[_type=='staff'][0]
{
    ...,
    picture,
}`
    
export default async function Page(){

 const staff = await client.fetch(query2)

const page: Page = await client.fetch(query)

   return (

   <article className="w3-mobile w3-center ">
    <section>
        <h1 className="w3-center w3-text-amber w3-border-bottom w3-border-top w3-border-amber">{page.title}</h1>
    </section>
    <section className="w3-margin w3-center w3-text-amber w3-large">
    {/* <Image className="w3-hide-small" width={700} height={350} src={urlFor(page.coverImage).url()} alt={post.author.name} /> */}
        <PortableText value={page.content}></PortableText>
        
        
<Center className="w3-card-4 w3-black w3-border w3-border-amber w3-bar">
      
     <Image className="w3-image w3-circle w3-border w3-border-amber" width={225} height={225} src={urlFor(staff.picture).url()} alt={staff.name} /> 
        <div className="w3-bar-item w3-ul w3-black w3-text-amber w3-border-left w3-border-amber w3-right w3-container">
            <li>Name: {staff.name}</li> 
            <li>Alias: {staff.alias}</li>
            <li>Position: {staff.position}</li>
        </div> 
</Center> 

        </section>
</article> 
)
}

