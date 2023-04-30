import { groq } from "next-sanity"
import {client} from '../lib/sanity.client'
import { PortableText } from "@portabletext/react"
import ModalFunctionality from "../styles/modalfunctionality"
import Image from "next/image"
import urlFor from "../lib/urlFor"

type Props = {
    posts: Post[]
  }

  function PortablePost({posts}: Props){
    
  return (
    <div className="w3-container w3-hide-large">
   {posts.map((post) => {
    return (
  <div id={`${post._id}`} className="w3-modal">
    <div className="w3-modal-content">
      <div className="w3-container">
        <span onClick={ModalFunctionality} className="w3-button w3-display-topright">&times;</span>
        <article>
    <section>
        <div className="w3-amber w3-container w3-center">{post.title}</div>
        <div className="w3-card-4 w3-cell w3-border w3-border-black w3-amber">
        <div className="w3-white"><Image className="w3-circle w3-border w3-border-black" width={90} height={80} src={urlFor(post.author.picture).url()} alt={post.author.name} /></div>
        <div className="w3-black">By: {post.author.name}</div>
        <div className="w3-grey">{new Date(post._createdAt).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })} 
     </div>
        </div>
    </section>
    <section className="w3-margin w3-center">
    <Image className="w3-hide-small" width={700} height={350} src={urlFor(post.coverImage).url()} alt={post.author.name} />
        <PortableText value={post.content}></PortableText></section>
    </article> 
      </div>
    </div>
  </div>
  )
})}
  </div>
 )
}


export default PortablePost