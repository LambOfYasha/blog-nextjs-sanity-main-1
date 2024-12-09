import ClientSideRoute from "../ClientSideRoute"
import Image from "next/image"
import urlFor from "../../lib/urlFor"

type Props = {
    posts: Post[]
  }

export default function ArticleBox({posts}: Props){ return (
    <div id="articleBox" className="w3-mobile w3-container">
 {posts.map((post) => {
  return (<>
  <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
  <article  className=' w3-opacity-min w3-hover-opacity-off w3-hover-black w3-hover-text-amber w3-card w3-margin w3-col m3 w3-border w3-border-black w3-hover-border-amber w3-amber w3-button w3-round-xlarge'>
  <div className='w3-black w3-text-amber w3-border w3-border-amber w3-padding' style={{overflow: 'hidden'}}>{post.title} | {new Date(post._updatedAt).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
     })}
     </div>
     <div className="w3-border w3-hide-small w3-black w3-border-amber w3-padding"><Image className="w3-image" width={190} height={180} src={urlFor(post.coverImage).url()} alt={post.author.name} /></div>
   
     
 </article>
 </ClientSideRoute>
 </>
  )
 })}
   </div>
  )
   
 }
    