import { groq } from "next-sanity"
import {client} from '../../lib/sanity.client'
import { PortableText } from "@portabletext/react"
// import Image from "next/image"
// import urlFor from "../../lib/urlFor"

   const query = groq`
    *[_type=='page'][3]
    {
        ...,
        coverImage,
    }`


export default async function Page(){

 

const page: Page = await client.fetch(query)

   return (

   <article className="w3-hide-small w3-center">
    <section>
        <div className="w3-amber w3-container w3-center">{page.title}</div>
    </section>
    <section className="w3-margin w3-center">
    {/* <Image className="w3-hide-small" width={700} height={350} src={urlFor(page.coverImage).url()} alt={post.author.name} /> */}
    {page.excerpt}
        <div className="w3-padding w3-margin"><PortableText value={page.content}></PortableText></div></section>    
</article> 
)
}

