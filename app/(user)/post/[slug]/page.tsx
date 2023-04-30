import { groq } from "next-sanity"
import {client} from '../../../../lib/sanity.client'

type Props = {
    params: {
        slug: string
    }
}

async function Post({params: {slug}}: Props){

    const query = groq`
    *[_type=='post' && slug.current == $slug][0]
    {
        ...,
        author->,
        categories[]->
    }`

const post: Post = await client.fetch(query, {slug})

   return <article>
    <section>
        <div>{post.title}</div>
        <div><div>{post._createdAt}</div>
        <div>{post.author.image}</div>
        <div>{post.author.name}</div>
        </div>
    </section>
    <section></section>
    </article> 
}

export default Post