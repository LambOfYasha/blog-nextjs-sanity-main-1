import { groq } from "next-sanity"
import {client} from '../../lib/sanity.client'
import { HeaderTitleBar, HeaderTitleBarMobile } from "../../styles/styles"
import BlogBox from "../../components/BlogBox"
import Link from "next/link"


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
     <Link className="w3-center" href={'https://www.antiblasphemy.studio/page2'} ><p>Next Page</p></Link>

</article> 
)
}

