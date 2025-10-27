import Link from "next/link"

export default async function Home() {
  const res = await fetch('http://localhost:3000/api/data')
  const posts = await res.json()
  return (
    <div>
    <h1>ГЛАВНАЯ СТРАНИЦА</h1>
    {posts.map(el => (
      <div key={el.id} className="post">
        <h2>{el.title}</h2>
        <p>{el.body.slice(0,19) + "..."}</p>
        <Link href={`/post/` + el.id}>ДЕТАЛЬНЕЕ</Link>
      </div>
    ))}
    </div>
  )
}
