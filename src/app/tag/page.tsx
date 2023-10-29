import Image from 'next/image'
import axios from 'axios'
import { ICategory, IPost, ITag } from '@/api/types'
import Breadcrumb from '@/components/Breadcrumb'
import MiniLink from '@/components/MiniLink'
import { getTagList } from '../../api/tag'
import { getPostList } from '../../api/post'
interface IData {
	tagList: (ITag & {
		count: number
	})[]
}
async function useGetData(): Promise<IData> {
	const { rows: tagRows } = await getTagList()
	const data = await getPostList({
		offset: 0,
		limit: 100,
	})
	return {
		tagList: tagRows.map(tag => {
			return {
				...tag,
				count: data.rows.filter(post => JSON.parse(post.tag_id).includes(tag.id)).length,
			}
		}),
	}
}
export default async function Tag() {
	const { tagList } = await useGetData()
	return tagList.map(item => <MiniLink key={item.id} name={item.name} href={`/tag/${item.id}`} icon="#" count={item.count} />)
}
