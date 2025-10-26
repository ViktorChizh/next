import fetchData from "../../tools/fetchData"

export default async function PostPage({params}) {

  const posts = await fetchData()
  const { postId } = await params
  const post = posts[postId]

  return (
    <div className="post">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  )
}
