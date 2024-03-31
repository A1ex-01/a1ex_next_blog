import { getPostListByCategory } from '@/api/post'
import PostRectCard from '@/components/PostRectCard'
import { getCategoryById } from '@/api/category'
import EmptyStatus from '@/components/EmptyStatus'

async function getServerData(id: string) {
  // 获取分类名
  const category = await getCategoryById(id)
  const data = await getPostListByCategory(id)
  return {
    postList: data,
    category
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
