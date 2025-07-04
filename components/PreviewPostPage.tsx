// import PostPage, { PostPageProps } from './PostPage'
// import { usePreview } from '../lib/sanity.preview'
// import { type Post, postAndMoreStoriesQuery } from '../lib/sanity.queries'

// export default function PreviewPostPage({
//   token,
//   post,
//   settings,
// }: {
//   token: null | string
// } & PostPageProps) {
//     const { post: postPreview, morePosts } = usePreview(token, postAndMoreStoriesQuery, {
//       slug: post.slug,
//     }) || { post: null, morePosts: [] }
//     usePreview(token, postAndMoreStoriesQuery, {
//       slug: post.slug,
//     }) || { post: null, morePosts: [] }

//   return (
//     <PostPage
//       preview
//       post={postPreview as Post}
//       morePosts={morePosts}
//       settings={settings}
//     />
//   )
// }
