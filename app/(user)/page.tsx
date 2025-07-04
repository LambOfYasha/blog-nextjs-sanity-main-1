import { groq } from "next-sanity"
import { client } from "../../lib/sanity.client"
// import BlogBox from "../../components/BlogBox"
// import PortablePost from "../../components/Modal"
import Link from "next/link"
import CategoryMenu from "../../components/categoryMenu"
import Image from 'next/image'
import { ABSDesktopBanner} from '../../styles/images'
import ArticleBox from "../../components/WebElements/ArticleBox"


export const revalidate = 30

 const query = groq`
  *[_type=='post'][0...10]{
    ...,
    coverImage,
    author->,
    categories[]->
  } | order(_createdAt desc)
`

// const query2 = groq`
//   *[_type=='post'][11...21]{
//     ...,
//     coverImage,
//     author->,
//     categories[]->
//   } | order(_createdAt desc)
// `


export default async function Page() {



const posts = await client.fetch(query)
// const posts2 = await client.fetch(query2)

return<section >

  



<article>
  <div style={{ position: 'relative' }}>
    <iframe
      width="1920"
      height="1080"
      src="https://www.youtube.com/embed/zr6IpUM7p7M?autoplay=1&loop=1&playlist=zr6IpUM7p7M"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 10,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      padding: '20px',
      borderRadius: '10px'
    }}>
      <h1 className="w3-text-amber w3-center" style={{ margin: 0, fontSize: '3rem', fontWeight: 'bold' }}>
        Under Construction
      </h1>
    </div>
  </div>
</article>

{/* 
<article id="home" className="w3-mobile w3-hide w3-hide-small w3-container">   <ArticleBox posts={posts} /></article>

<article className="w3-mobile w3-hide w3-container w3-tiny">   <ArticleBox posts={posts} /></article> */}
  
  {/* <CategoryMenu />  */}

     {/* <BlogBox posts={posts}  />
  <BlogBox posts={posts2}  />  */}  
  {/* <PortablePost posts={posts} ></PortablePost>   */}
  {/* <Link className="w3-center w3-button w3-amber" href={'/page2'} ><p>Next Page</p></Link> */}

</section>}


