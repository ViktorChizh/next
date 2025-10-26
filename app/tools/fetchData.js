export default async function fetchData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return await res.json()
 }