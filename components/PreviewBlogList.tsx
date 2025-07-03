'use client'

import { usePreview } from "../lib/sanity.preview"
import BlogList from "./BlogList"

type Props = {
    query: string
    token?: string | null
}

export default function PreviewBlogList({query, token = null}: Props){
    const posts = usePreview(token, query)
    return <BlogList posts={posts} />
}