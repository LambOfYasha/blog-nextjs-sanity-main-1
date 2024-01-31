import { groq } from "next-sanity"
import {client} from '../../lib/sanity.client'
import { HeaderTitleBar } from "../../styles/styles"
import PortablePost from "../../components/Modal"


export const query = groq`
  *[_type=='post']{
    ...,
    coverImage,
    author->,
    categories[]->
  } | order(_createdAt desc)
`


    
export default async function Page(){

    const posts = await client.fetch(query)


   return (

<article className=" w3-center">
    <h4 className={HeaderTitleBar}>Home</h4>
    <PortablePost posts={posts} ></PortablePost>
</article> 
)
}

