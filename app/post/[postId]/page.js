import Link from "next/link"
import fetchPostById from "../../tools/fetchPostById"
import Post from "@/app/components/Post"

export default async function PostPage({params}) {

  const { postId } = await params
  const post = await fetchPostById(postId)

  return (
    <>
      <Link href="/">На главную</Link>
      <Post post={post}/>
    </>

  )
}
