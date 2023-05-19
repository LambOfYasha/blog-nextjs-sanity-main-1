'use client'
import { groq } from "next-sanity"
import {client} from '../../../../../lib/sanity.client'
import { PortableText } from "@portabletext/react"
import Image from "next/image"
import urlFor from "../../../../../lib/urlFor"
import ABSTabs from "../../../../../components/Tabs"
import { TabPanel } from "react-tabs"

   const query = groq`
   
    *[_type=='character'][0]
    {
        ...,
        coverImage,
    }`
    
export default async function Page(){

 

const character: Character = await client.fetch(query)

   return (

   <article className="w3-hide-small w3-center">
          <div>
            <div>
            <Image className="w3-hide-small w3-image" width={643} height={991} src={urlFor(character.coverImage).url()} alt={character.title} />

            </div>
            
            </div> 
            <PortableText value={character.description}></PortableText>
        
</article> 
)
}

