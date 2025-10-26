import Link from "next/link"
import fetchData from "./tools/fetchData"

export default async function Home() {
  const posts = await fetchData()
  return (
    <div>
    <h1>ГЛАВНАЯ СТРАНИЦА</h1>
    {posts.map(el => (
      <div key={el.id} className="post">
        <h2>{el.title}</h2>

        <Link href={`/post/` + el.id}>ДЕТАЛЬНЕЕ</Link>
      </div>
    ))}
    </div>
  )
}
