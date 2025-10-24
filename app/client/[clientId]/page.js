import { use } from 'react'

export default function ClientId({ params }) {
  const resolvedParams = use(params)
  return (
    <h1>СТРАНИЦА КЛИЕНТА {resolvedParams.clientId}</h1>
  )
}
