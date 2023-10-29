import AxFetch from './index'
import { IParams, IPost, IRow } from './types'
export const getArchiveList = async ({
	offset,
	limit,
	sort_type = 'createdAt',
}: IParams & {
	sort_type?: string
}): Promise<IRow<IPost[]>> => {
	return AxFetch.get(`/article/all`, {
		offset,
		limit,
		sort_type,
	})
}
