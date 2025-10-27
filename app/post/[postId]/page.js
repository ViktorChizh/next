import Link from "next/link"
import Post from "@/app/components/Post"

export async function generateMetadata({params, searchParams}) {
    const { postId } = await params
    const res = await fetch(`http://localhost:3000/api/data/${postId}`)
    const post = await res.json()
    return {
      title: post.title.slice(0,10) + "... - Статья на сайте",
      description: post.body
    }
  
}

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
