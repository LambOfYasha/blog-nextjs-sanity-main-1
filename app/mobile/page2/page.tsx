import React from "react"
import { groq } from "next-sanity"
import { client } from "../../../lib/sanity.client"
import BlogBox from "../../../components/BlogBox"
import Link from "next/link"
import { HeaderTitleBarMobile } from "../../../styles/styles"

 const query = groq`
  *[_type=='post'][21...30]{
    ...,
    coverImage,
    author->,
    categories[]->
  } | order(_createdAt desc)
`



export default async function Page() {



const posts = await client.fetch(query)
return<section className="w3-mobile w3-container w3-center">
    <h4 className={HeaderTitleBarMobile}>Home</h4>
  <BlogBox posts={posts}  />
  <Link className="w3-center w3-button w3-amber" href={'/mobile'} ><p>Prev Page</p></Link>
</section>}


