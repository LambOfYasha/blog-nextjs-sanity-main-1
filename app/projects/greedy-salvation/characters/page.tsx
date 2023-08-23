'use client'
import { groq } from "next-sanity"
import {client} from '../../../../lib/sanity.client'
import Image from "next/image"
import urlFor from "../../../../lib/urlFor"



   const query = groq`
    *[_type=='character']
    {
        ...,
        avi,
        coverImage,
    }`
    
export default async function Page(){

 

const character: Character = await client.fetch(query)

   return (

<article className="w3-hide-small w3-center">
    <h4 className="w3-amber">Greedy Salvation - Characters</h4>
   {character.map(chrInfo => {
    return (
       <div className="w3-bar" key={chrInfo._id}>
        <div className="w3-bar-item w3-right"><p>{chrInfo.title}</p> <Image className="w3-hide-small w3-circle w3-image w3-border w3-border-black" width={100} height={200} src={urlFor(chrInfo.avi).url()} alt={chrInfo.title} /></div>
       
        </div>)
   }) }
        
</article> 
)
}

