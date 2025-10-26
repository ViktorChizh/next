export default async function fetchData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const result = await res.json()
  return result
 }