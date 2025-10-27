import fetchPosts from "@/app/tools/fetchPosts";

export async function GET(request) {
    const data = await fetchPosts()
    return new Response(JSON.stringify(data))
}