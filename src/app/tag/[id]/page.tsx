import { getPostListByTag } from '@/api/post'
import { getTagById } from '@/api/tag'
import PostRectCard from '@/components/PostRectCard'
import { Metadata } from 'next'
import { cache } from 'react'
const getServerData = cache(async function getServerData(id: string) {
  const data = await getPostListByTag(id)
  // 获取tag名
  const tag = await getTagById(id)
  return {
    postList: data,
    tag
  }
})
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const { tag } = await getServerData(params.id)

  return {
    title: `标签/${tag.name} - a1ex\`s blog`
  }
}
export default async function TagDetail({
  params
}: {
  params: {
    id: string
  }
}) {
  const { postList } = await getServerData(params.id)
  return postList.map((item) => <PostRectCard post={item} key={item.id} />)
}
