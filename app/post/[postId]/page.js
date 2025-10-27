import Link from "next/link"
import Post from "@/app/components/Post"

export default async function PostPage({params}) {

  const { postId } = await params
  const res = await fetch(`http://localhost:3000/api/data/${postId}`)
  const post = await res.json()
  return (
    <>
      <Link href="/">На главную</Link>
      <Post post={post}/>
    </>

  )
}
