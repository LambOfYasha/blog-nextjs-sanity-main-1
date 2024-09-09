import { groq } from "next-sanity"
import {client} from '../../lib/sanity.client'
import { HeaderTitleBar, HeaderTitleBarMobile } from "../../styles/styles"
import BlogBox from "../../components/BlogBox"
import Link from "next/link"

export const revalidate = 30

const query = groq`
*[_type=='post'][0...10]{
  ...,
  coverImage,
  author->,
  categories[]->
} | order(_createdAt desc)
`

const query2 = groq`
*[_type=='post'][10...20]{
  ...,
  coverImage,
  author->,
  categories[]->
} | order(_createdAt desc)
`
    
export default async function Page(){

    const posts = await client.fetch(query)
    const posts2 = await client.fetch(query2)


   return (
 
<article className="w3-mobile w3-container w3-center">
    <h4 className={HeaderTitleBarMobile}>Home</h4>
     <BlogBox posts={posts}  />
     <BlogBox posts={posts2}  />
     <Link className="w3-center w3-button w3-amber" href={'/mobile/page2'} ><p>Next Page</p></Link>

</article> 
)
}

