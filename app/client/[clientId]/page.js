import { use } from 'react'

export default function ClientId({ params }) {
  const client = use(params)
  return (
    <h1>СТРАНИЦА КЛИЕНТА {client.clientId}</h1>
  )
}
