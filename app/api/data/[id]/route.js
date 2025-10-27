import fetchPostsById from "@/app/tools/fetchPostById";

export async function GET(request, {params}) {
    const { id } = await params
    const data = await fetchPostsById(id)
    return new Response(JSON.stringify(data))
}