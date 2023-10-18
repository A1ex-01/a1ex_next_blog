import AxFetch from "./index"
export const getPostDetail = async (id: string) => {
    return AxFetch.get(`/article_detail/${id}`, {})
}