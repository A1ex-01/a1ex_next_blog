import AxFetch from './index'
import { IRow, ITag } from './types'
export const getTagList = async (): Promise<IRow<ITag[]>> => {
  return AxFetch.get('/tag', {})
}
export const getTagById = async (id: string): Promise<ITag> => {
  return AxFetch.get(`/tag/${id}`, {})
}
