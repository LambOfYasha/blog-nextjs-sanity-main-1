import { groq } from "next-sanity"
import {client} from '../../lib/sanity.client'
import { HeaderTitleBar, HeaderTitleBarMobile } from "../../styles/styles"
import PortablePost from "../../components/Modal"
import BlogBox from "../../components/BlogBox"


 const query = groq`
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
    <h4 className={HeaderTitleBarMobile}>Home</h4>
    <BlogBox posts={posts}  />
</article> 
)
}

