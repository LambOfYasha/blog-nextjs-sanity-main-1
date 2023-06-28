'use client'
import { groq } from "next-sanity"
import {client} from '../../../../../lib/sanity.client'
import { PortableText } from "@portabletext/react"
import Image from "next/image"
import urlFor from "../../../../../lib/urlFor"


   const query = groq`
   
    *[_type=='character'][1]
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
            <div className="w3-left">
            <Image className="w3-hide-small w3-image" width={443} height={791} src={urlFor(character.coverImage).url()} alt={character.title} />
            </div>
                <div className="w3-right w3-margin">
                <ul className="w3-ul w3-border">
                    <li>Name: {character.name}</li>
                    <li>Gender: {character.gender}</li>
                    <li>Age: {character.age}</li>
                    <li>Origin: {character.origins}</li>
                    <li>Height: {character.height}</li>
                    <li>Faith: {character.faith}</li>
                    <li>Sin Affinities: {character.sinaffinities}</li>
                    <li>Likes: {character.likes}</li>
                    <li>Dislikes: {character.dislikes}</li>
                </ul>
                </div>
            </div>
            </div> 
            <div className="w3-margin w3-container">
            <PortableText value={character.description}></PortableText>
            </div>
</article> 
)
}

