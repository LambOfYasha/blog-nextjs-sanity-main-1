'use client'
import { groq } from "next-sanity"
import {client} from '../../../lib/sanity.client'
import { PortableText } from "@portabletext/react"
import Image from "next/image"
import urlFor from "../../../lib/urlFor"
import GreedySalvationLinks from "../../../data/Greedy-Salvation-Links"
import Link from "next/link"
import GreedySalvationMenu from "../../../components/GreedySalvationMenu"


   const query = groq`
   
    *[_type=='page'][6]
    {
        ...,
        coverImage,
    }`
    
export default async function Page(){

 

const page: Page = await client.fetch(query)
const character: Character = await client.fetch("*[_type == 'character']{...,avi, mainImage}")

   return (

   <article className="w3-hide-small">
    <section className="w3-center">
        <div className="w3-amber w3-container">{page.title}</div>
        <GreedySalvationMenu/>
    </section>

    <section className="w3-center">
        <article className="w3-container w3-center"><Image className="w3-hide-small" width={300} height={350} src={urlFor(page.coverImage).url()} alt={page.title} /></article>
           <article className="w3-container w3-amber w3-cell w3-left-align"><PortableText value={page.content}></PortableText></article> 
    </section>
       <section className="w3-container"><b>Synopsis:</b>
            <p>{page.excerpt}</p></section>

</article> 
)
}

