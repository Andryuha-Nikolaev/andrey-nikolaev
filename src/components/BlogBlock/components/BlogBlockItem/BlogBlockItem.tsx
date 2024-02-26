import React from "react"
import Link from "next/link"

const BlogBlockItem = ({ post }: { post: any }) => {
  return (
    <li>
      <Link href={`/blog/${post.id}`}>{post.title}</Link>
    </li>
  )
}

export default BlogBlockItem
