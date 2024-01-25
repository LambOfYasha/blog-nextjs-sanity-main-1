import React from "react"
import { groq } from "next-sanity"
import { client } from "../../lib/sanity.client"
import BlogBox from "../../components/BlogBox"
import { Banner } from "../../components/Themes/Desktop"
import PortablePost from "../../components/Modal"
import PageModal from "../../components/PageModal"
import page from "../../schemas/page"
export const query = groq`
  *[_type=='post']{
    ...,
    coverImage,
    author->,
    categories[]->
  } | order(_createdAt desc)
`



export default async function Page() {



const posts = await client.fetch(query)
return<section>
  <Banner />
  <BlogBox posts={posts}  />
  <PortablePost posts={posts} />
</section>}


