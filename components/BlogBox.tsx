import Image from "next/image"
import urlFor from "../lib/urlFor"

type Props = {
  posts: Post[]
}
function BlogBox({posts}: Props) {
  return (
    <div className="w3-container  w3-row-padding w3-section" style={{margin:"auto", width: '50%'}}>
 {posts.map((post) => {
  return (
  <article className='w3-card w3-margin w3-col m3 w3-border w3-border-black w3-amber w3-button w3-round-xlarge'>
     <div className="w3-border w3-hide-small w3-white w3-panel w3-border-black"><Image src={urlFor(post.mainImage).url()} alt={post.author.name} /></div>
     <div className='w3-black'>{post.title}</div>
     <div className='w3-grey'>{post._createdAt}</div>
 </article>
  )
 })}
 </div>
  )
}




export default BlogBox