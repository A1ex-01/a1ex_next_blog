import { getPostListByCategory } from '@/api/post'
import PostRectCard from '@/components/PostRectCard'
import { getCategoryById } from '@/api/category'
import EmptyStatus from '@/components/EmptyStatus'
import { cache } from 'react'
import { Metadata } from 'next'

export const getServerData = cache(async function getServerData(id: string) {
  // 获取分类名
  const category = await getCategoryById(id)
  const data = await getPostListByCategory(id)
  return {
    postList: data,
    category
  }
})
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const { category } = await getServerData(params.id)
  return {
    title: `分类/${category.name} - a1ex\`s blog`
  }
}
export default async function CategoryDetail({
  params
}: {
  params: {
    id: string
  }
}) {
  const { postList } = await getServerData(params.id)
  if (!postList.length) return <EmptyStatus />
  return postList.map((item) => <PostRectCard post={item} key={item.id} />)
}
