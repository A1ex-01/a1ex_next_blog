import AxFetch from './index'
import { ICategory, IRow } from './types'

export const getCategoryList = async (): Promise<IRow<ICategory[]>> => {
	return AxFetch.get('/category', {})
}

export const getCategoryById = async (id: string): Promise<ICategory> => {
	return AxFetch.get(`/category/${id}`, {})
}
