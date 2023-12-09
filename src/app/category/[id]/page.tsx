import { getPostListByCategory } from '@/api/post'
import PostRectCard from '@/components/PostRectCard'
import Breadcrumb from '@/components/Breadcrumb'
import { getCategoryById } from '@/api/category'
import EmptyStatus from '@/components/EmptyStatus'

async function getServerData(id: string) {
	// 获取分类名
	const category = await getCategoryById(id)
	console.log('🚀 a1ex~ category:', category)
	const data = await getPostListByCategory(id)
	return {
		postList: data,
		category,
	}
}
export default async function CategoryDetail({
	params,
}: {
	params: {
		id: string
	}
}) {
	const { postList, category } = await getServerData(params.id)
	if (!postList.length) return <EmptyStatus />
	return postList.map(item => <PostRectCard post={item} key={item.id} />)
}
