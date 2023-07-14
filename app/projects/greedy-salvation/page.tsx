'use client'
import { groq } from "next-sanity"
import {client} from '../../../lib/sanity.client'
import { PortableText } from "@portabletext/react"
import Image from "next/image"
import urlFor from "../../../lib/urlFor"
import GreedySalvationLinks from "../../../data/Greedy-Salvation-Links"
import Link from "next/link"


   const query = groq`
   
    *[_type=='page'][5]
    {
        ...,
        coverImage,
    }`
    
export default async function Page(){

 

const page: Page = await client.fetch(query)
const character: Character = await client.fetch("*[_type == 'character']{...,avi, mainImage}")

   return (

   <article className="w3-hide-small w3-center">
    <section>
        <div className="w3-amber w3-container w3-center">{page.title}</div>
    </section>
    <section className="w3-margin w3-center">
    <Image className="w3-hide-small" width={300} height={350} src={urlFor(page.coverImage).url()} alt={page.title} />
    <div >
        {GreedySalvationLinks.map((gslink => {
            return (<div className="w3-amber w3-bar" key={gslink.id}>
                <Link href={gslink.href}><button className="w3-button w3-bar-item w3-row">{gslink.link}</button></Link>
                </div>
            )
        }))}
    </div>
            <PortableText value={page.content}></PortableText>
        
    </section>
        
</article> 
)
}

