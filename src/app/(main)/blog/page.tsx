import { Metadata } from "next"
import BlogBlock from "@/components/BlogBlock/BlogBlock"
import { getAllPosts } from "@/services/getPosts"
import metaConstants from "@/constants/meta/meta"

export const metadata: Metadata = {
  title: `Blog | ${metaConstants.title}`,
}

export const revalidate = 600

export default async function Blog() {
  const posts = await getAllPosts()

  return (
    <>
      <h1>Blog page</h1>
      <BlogBlock posts={posts} />
    </>
  )
}
