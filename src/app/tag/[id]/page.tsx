import { getPostListByTag } from '@/api/post'
import PostRectCard from '@/components/PostRectCard'
async function getServerData(id: string) {
	const data = await getPostListByTag(id)
	console.log('🚀 a1ex~ data:', data)
	return {
		postList: data,
	}
}
export default async function TagDetail({
	params,
}: {
	params: {
		id: string
	}
}) {
	const { postList } = await getServerData(params.id)
	return postList.map(item => <PostRectCard post={item} key={item.id} />)
}
