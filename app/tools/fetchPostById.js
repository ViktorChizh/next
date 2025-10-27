export default async function fetchPostById(id) {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
  return await res.json()
 }