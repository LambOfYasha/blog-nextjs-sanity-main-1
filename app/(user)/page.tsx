import React from "react"
import { groq } from "next-sanity"
import { client } from "../../lib/sanity.client"
import BlogBox from "../../components/BlogBox"
import { Banner } from "../../components/Themes/Desktop"
import PortablePost from "../../components/Modal"
import Link from "next/link"

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


export default async function Page() {



const posts = await client.fetch(query)
const posts2 = await client.fetch(query2)

return<section>
  <Banner />
  <BlogBox posts={posts}  />
  <BlogBox posts={posts2}  />
  <PortablePost posts={posts} ></PortablePost>
  {/* <Link className="w3-center" href={'https://www.antiblasphemy.studio/page2'} ><p>Next Page</p></Link> */}
</section>}


