'use client'
import { groq } from "next-sanity"
import {client} from '../../../../lib/sanity.client'
import { PortableText } from "@portabletext/react"
import GreedySalvationMenu from "../../../../components/GreedySalvationMenu"
import Image from "next/image"
import urlFor from "../../../../lib/urlFor"
import { HeaderTitleBar } from "../../../../styles/styles"

// import Image from "next/image"
// import urlFor from "../../lib/urlFor"

export const revalidate = 30

   const query = groq`
    *[_type=='page'][6]
    {
        ...,
        coverImage,
    }`
    
export default async function Page(){

 

const page: Page = await client.fetch(query)

   return (

   <article className="w3-hide-small w3-center ">
    <section>
        <h3 className={HeaderTitleBar}>{page.title}</h3>
        <GreedySalvationMenu/>
    </section>
    <section className=" w3-center w3-margin w3-container w3-bar">
    {/* <Image className="w3-hide-small" width={700} height={350} src={urlFor(page.coverImage).url()} alt={page.title} /> */}
    
    <div className="w3-amber w3-cell-middle w3-center">
        <h4 className="w3-black">Legend:</h4>
        {page.excerpt}
        </div>
        <h4 className="w3-black">Table of Contents</h4>
        <PortableText value={page.content} /></section>
</article> 
)
}

