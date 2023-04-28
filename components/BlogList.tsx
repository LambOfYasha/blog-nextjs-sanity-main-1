import Image from "next/image"
import urlFor from "../lib/urlFor"

type Props = {
    posts: Post[]
}


function BlogList({posts}: Props){ 
        return (
        <div>
        {posts.map(post =>  (
           
            <div key={post._id}>
                <div>
               
                <Image className="w3-image" src={urlFor(post.coverImage).url()} alt={post.author.name} fill /> 
               {post.title}
               {post._createdAt}
                </div>
            </div>
    ))}
    </div>
    )
}

export default BlogList