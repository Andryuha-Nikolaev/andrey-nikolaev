import { Metadata } from "next"
import { getPostById } from "@/services/getPosts"
import metaConstants from "@/constants/meta/meta"

type Props = {
  params: {
    id: string
  }
}

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const post = await getPostById(id)
  return {
    title: `Blog | ${post.title} | ${metaConstants.title}`,
  }
}

export default async function Post({ params: { id } }: Props) {
  const post = await getPostById(id)

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  )
}
