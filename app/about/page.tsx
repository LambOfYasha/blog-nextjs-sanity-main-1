import { groq } from "next-sanity"
import {client} from '../../lib/sanity.client'
import { PortableText } from "@portabletext/react"
import Image from "next/image"
import urlFor from "../../lib/urlFor"
// import Image from "next/image"
// import urlFor from "../../lib/urlFor"

   const query = groq`
     *[_type=='page' && title == "About"][0]
    {
        ...,
        coverImage,
    }`
    
export default async function Page(){

 

const page: Page = await client.fetch(query)

   return (

   <article className="w3-mobile w3-center">
    <section>
        <h1 className="w3-margin w3-text-amber w3-border-bottom w3-border-top w3-border-amber">{page.title}</h1>
    </section>
    <section className="w3-margin w3-center w3-text-amber w3-large">
    <Image className="w3-hide-small" width={700} height={350} src={page.coverImage ? urlFor(page.coverImage).url() : '/assets/about.gif'} alt="About" />
        <PortableText value={page.content}></PortableText></section>
</article> 
)
}

