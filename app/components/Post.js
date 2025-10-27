export default function Post({post}) {
  return (
    <div className="post">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <strong>Author ID: {post.userId}</strong>
    </div>
  )
}