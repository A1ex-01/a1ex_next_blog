import { useGetData } from "@/app/home/[page]/page"
import PostRectCard from "@/components/PostRectCard"
export default async function CategoryDetail({ params }: { params: { id: string } }) {
    const { posts } = await useGetData(1)
    return posts.map(item => <PostRectCard post={item} />)
}