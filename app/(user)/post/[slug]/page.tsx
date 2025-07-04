'use client'
// import { groq } from "next-sanity"
// import { client } from '../../../../lib/sanity.client'
// // import { PortableText } from "@portabletext/react"
// import Image from "next/image"
// import { useState, useEffect } from "react"
// // import { urlForImage } from "@sanity/image-url/lib/types/builder"
// // import { createImageUrlBuilder } from "@sanity/image-url"
// import YouTubeEmbed from "../../../../components/YouTubeEmbed"
// // import { useForm, SubmitHandler } from "react-hook-form"

// export const revalidate = 30

// type Props = {
//     params: {
//         slug: string
//     }
// }

// type Comment = {
//     _id: string;
//     name: string;
//     email: string;
//     commentPost: string;
// }

// type Category = {
//     _id: string;
//     title: string;
// }

// type Post = {
//     _updatedAt: string | number | Date
//     _id: string;
//     title: string;
//     author: {
//         name: string;
//         picture: string;
//     };
//     _createdAt: string;
//     categories: Category[];
//     coverImage: string;
//     content: any;
// }

// type FormInputs = {
//     name: string;
//     email: string;
//     commentPost: string;
// }

// // const builder = imageUrlBuilder(client)

// // function urlFor(source: any) {
// //     return builder.image(source)
// // }

export default function Post({ params: { slug } }: { params: { slug: string } }) {
    return <div>Post {slug}</div>
}

//     const [post, setPost] = useState<Post | null>(null);
//     const [comments, setComments] = useState<Comment[]>([]);
//     const [isSubmitting, setIsSubmitting] = useState(false);

//     // const { register, handleSubmit, reset, formState: { errors } } = useForm<FormInputs>();
    
//     const components = {
//       types: {
//         video: YouTubeEmbed,
//       },
//     };
    
//     const MyPortableTextComponent = ({ value }: { value: any }) => {
//         // return <PortableText value={value} components={components} />;
//     };
    
//     useEffect(() => {
//         const fetchPostAndComments = async () => { 
//             const postQuery = groq`
//             *[_type=='post' && slug.current == $slug][0]
//             {
//                 ...,
//                 author->,
//                 picture,
//                 mainImage,
//                 categories[]->,
//                 "content": content[]{
//                     ...,
//                     _type == 'image' => {
//                     "url": asset->url,
//                     "alt": alt
//                     },
//                     _type == 'video' => {
//                     "url": url,
//                     "caption": caption
//                     }
//                 }
//             }`

//             const fetchedPost: Post = await client.fetch(postQuery, { slug })
//             setPost(fetchedPost)

//             if (fetchedPost) {
//                 const commentsQuery = groq`
//                 *[_type == 'comment' && post._ref == $postId && approved == true] | order(_createdAt desc)
//                 {
//                     ...,
//                     _id,
//                     _updatedAt,
//                     name,
//                     commentPost
//                 }`
//                 const fetchedComments: Comment[] = await client.fetch(commentsQuery, { postId: fetchedPost._id })
//                 setComments(fetchedComments)
//             }
//         }
//         fetchPostAndComments()
//     }, [slug])

//     // const onSubmit: SubmitHandler<FormInputs> = async (data: FormInputs) => {
//     //     if (!post) return;
        
//     //     setIsSubmitting(true);
//     //     try {
//     //         const res = await fetch('/api/createComment', {
//     //             method: 'POST',
//     //             headers: {
//     //                 'Content-Type': 'application/json',
//     //             },
//     //             body: JSON.stringify({
//     //                 _id: post._id,
//     //                 name: data.name,
//     //                 email: data.email,
//     //                 commentPost: data.commentPost, // Fixed: Changed from comment to commentPost to match API expectations
//     //             }),
//     //         });

//     //         if (res.ok) {
//     //             reset(); // Clear form
//     //             alert('Your comment has been submitted for approval.');
//     //         } else {
//     //             const errorData = await res.json();
//     //             console.error('Server response:', errorData);
//     //             throw new Error(`Failed to submit comment: ${res.status} ${res.statusText}`);
//     //         }
//     //     } catch (error) {
//     //         console.error('Error submitting comment:', error);
//     //         if (error instanceof Error) {
//     //             console.error('Error message:', error.message);
//     //             console.error('Error stack:', error.stack);
//     //         }
//     //         alert(`There was an error submitting your comment: ${error instanceof Error ? error.message : 'Unknown error'}. Please try again.`);
//     //     } finally {
//     //         setIsSubmitting(false);
//     //     }
//     // };

//     if (!post) {
//         console.error('Post not loaded');
//         return <div>Loading...</div>;
//     }

//     return (
//         <article className="w3-mobile">

// {/* //Post Content Section */}
//             <section className="w3-mobile w3-margin w3-center w3-text-amber w3-large">
                
//                 {/* //Post Title Section */}
//             <section>
//                 <div className="w3-mobile w3-xxlarge w3-card-4 w3-text-amber w3-border-bottom w3-border-top w3-border-amber">{post.title}</div>
//                 {/* <Image className="w3-image" width={700} height={350} src={urlFor(post.coverImage).url()} alt={post.author.name} /> */}

//                 <div className="w3-mobile w3-card-4 w3-cell w3-border w3-border-amber w3-black">
//                     <div className="w3-amber w3-center">
//                         {/* <Image className="w3-circle w3-border w3-border-black" width={150} height={140} src={urlFor(post.author.picture).url()} alt={post.author.name} /> */}
//                     </div>
//                     <div className="w3-black w3-text-amber w3-large">By: {post.author.name}</div>
//                     <div className="w3-grey w3-large">{new Date(post._updatedAt).toLocaleDateString("en-US", {
//                         day: "numeric", 
//                         month: "long",
//                         year: "numeric",
//                     })}</div>
//                     {post.categories?.map((category: Category) => 
//                         <div className="w3-margin w3-circle w3-border w3-border-black w3-center w3-tiny w3-white" key={category._id}>{category.title}</div>
//                     )}
//                 </div>
//             </section>
//                 {/* <MyPortableTextComponent value={post.content} /> */}
//             </section>

// {/* //Comments Section */}
//             <section className="w3-mobile w3-margin w3-center w3-border w3-border-amber w3-card-4 w3-text-amber">
//                 <h3 className=" w3-margin-top w3-border-bottom w3-border-amber">Comment Section</h3>
//                 {/* <form className="w3-mobile w3-black w3-text-amber w3-cell w3-border w3-border-black" onSubmit={handleSubmit(onSubmit)}> */}
//                     <label htmlFor="name">Name:</label>
//                     <input 
//                         {...register("name", { required: true })}
//                         type="text" 
//                         id="name" 
//                         disabled={isSubmitting}
//                         className="w3-input w3-border w3-border-amber w3-light-grey"
//                     />
//                     {errors.name && <span className="w3-text-red">Name is required</span>}
                    
//                     <label htmlFor="email">Email:</label>
//                     <input 
//                         {...register("email", { 
//                             required: true,
//                             pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i 
//                         })}
//                         type="email" 
//                         id="email" 
//                         disabled={isSubmitting}
//                         className="w3-input w3-border w3-border-amber w3-light-grey"
//                     />
//                     {errors.email && <span className="w3-text-red">Valid email is required</span>}
                    
//                     <label htmlFor="commentPost">Comment:</label>
//                     <textarea 
//                         {...register("commentPost", { required: true })}
//                         id="commentPost" 
//                         disabled={isSubmitting}
//                         className="w3-input w3-border w3-border-amber w3-light-grey"
//                     ></textarea>
//                     {errors.commentPost && <span className="w3-text-red">Comment is required</span>}
                    
//                     <button className="w3-button w3-black w3-text-amber w3-hover-amber w3-border w3-border-amber" type="submit" disabled={isSubmitting}>
//                         {isSubmitting ? 'Submitting...' : 'Submit Comment'}
//                     </button>
//                 {/* </form> */}
//                 <div className="w3-mobile w3-text-amber w3-margin-top w3-border w3-border-amber w3-black">
//                     {comments.length > 0 ? (
//                         comments.map((comment: Comment) => (
//                             <div key={comment._id} className="w3-mobile w3-border w3-border-amber w3-margin w3-card w3-rest w3-black w3-round-xlarge">
//                                 <h4 className="w3-text-amber w3-border-bottom w3-border-amber">{comment.name}</h4>
//                                 <p className="w3-text-amber">{comment.commentPost}</p>
//                             </div>
//                         ))
//                     ) : (
//                         <p>No comments yet.</p>
//                     )}
//                 </div>
//             </section>
        
//         </article>
//     )
// }

// export default Post