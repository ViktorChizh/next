import Link from "next/link"

export default function Show() {
  return (
    <div>
      <h1>СТРАНИЦА ПОКАЗА</h1>
      <Link href='/'>ГЛАВНАЯ</Link>
      <br />
      <Link href='/client/122334'> КЛИЕНТ 122334</Link>
    </div>
  )
}
