import AxFetch from "./index"
export interface ICategory {
    name: string
    id: string
    createdAt: string
}
export const getCategoryList = async () => {
    return AxFetch.get('/category', {})
}