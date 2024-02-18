import { groq } from "next-sanity"
import {client} from '../../../../lib/sanity.client'
import { PortableText } from "@portabletext/react"
import Image from "next/image"
import urlFor from "../../../../lib/urlFor"
import { HeaderTitleBar } from "../../../../styles/styles"

type Props = {
    params: {
        slug: string
    }
}

export const revalidate = 30

export async function generateStaticParams() {
 
    const query = groq`*[_type=='post']
    {
        slug
    }`
    
    const slugs: Post[] = await client.fetch(query)
    const slugRoutes = slugs.map((slug) => slug.slug.current)
    
    return slugRoutes.map(slug => ({
        slug,
    }))
}

async function Post({params: {slug}}: Props){

    const query = groq`
    *[_type=='post' && slug.current == $slug][0]
    {
        ...,
        author->,
        picture,
        mainImage,
        categories[]->
    }`

const post: Post = await client.fetch(query, {slug})

   return <article>
    <section>
        <div className={HeaderTitleBar}>{post.title}</div>
        <div className="w3-card-4 w3-cell w3-border w3-border-black w3-amber">
        <div className="w3-white"><Image className="w3-circle w3-border w3-border-black" width={90} height={80} src={urlFor(post.author.picture).url()} alt={post.author.name} /></div>
        <div className="w3-black">By: {post.author.name}</div>
        <div className="w3-grey">{new Date(post._createdAt).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
     })}</div>
        </div>
    </section>
    <section className="w3-margin w3-center">
    <Image className="w3-image" width={700} height={350} src={urlFor(post.coverImage).url()} alt={post.author.name} />
        <PortableText value={post.content}></PortableText></section>

    </article> 
}

export default Post