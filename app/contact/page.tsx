import { groq } from "next-sanity"
import {client} from '../../lib/sanity.client'
import { PortableText } from "@portabletext/react"

// import Image from "next/image"
// import urlFor from "../../lib/urlFor"

export const revalidate = 30


   const query = groq`
   *[_type=='page' && title == "Contact"][0]    {
        ...,
        coverImage,
    }`
    
export default async function Page(){

 

const page: Page = await client.fetch(query)

   return (

   <article className="w3-mobile">
    <section>
        <h1 className="w3-margin w3-center w3-text-amber w3-border-bottom w3-border-top w3-border-amber">{page.title}</h1>
    </section>
    <section className="w3-container w3-cell-row w3-center w3-margin w3-text-amber w3-large w3-card-4 w3-border w3-border-amber">
    {/* <Image className="w3-hide-small" width={700} height={350} src={urlFor(page.coverImage).url()} alt={post.author.name} /> */}
    {page.excerpt}
        <PortableText value={page.content}></PortableText></section>
</article> 
)
}

