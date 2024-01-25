import { groq } from "next-sanity"
import {client} from '../../lib/sanity.client'
import { PortableText } from "@portabletext/react"
import { GreedySalvationBanner } from "../../styles/images"
import Image from "next/image"
import { HeaderTitleBar } from "../../styles/styles"
import Link from "next/link"
// import urlFor from "../../lib/urlFor"

   const query = groq`
    *[_type=='page'][2]
    {
        ...,
        coverImage,
    }`
    
export default async function Page(){

 

const page: Page = await client.fetch(query)

   return (

   <article className="w3-hide-small w3-center">
    <section>
        <div className={HeaderTitleBar}>{page.title}</div>
    </section>
    <section className="w3-margin w3-center">
    {page.excerpt}
        <PortableText value={page.content}></PortableText></section> 
    
    
    <Link href={"http://localhost:3000/projects/greedy-salvation"} ><Image src={GreedySalvationBanner} className='w3-image' alt="GreedySalvation" width="500" height="250" />
</Link>
</article> 
)
}

