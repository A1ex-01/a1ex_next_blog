import AxFetch from './index'
import { IParams, IPost, IRow } from './types'
// 获取postlist

export const getPostList = async ({ offset, limit }: IParams): Promise<IRow<IPost[]>> => {
  return AxFetch.get(`/article/all`, {
    offset,
    limit
  })
}
export const getPostDetail = async (id: string) => {
  return AxFetch.get(`/article_detail/${id}`, {})
}

// 通过id获取文章
export const getPostById = async (id: string) => {
  return AxFetch.get(`/article/${id}`, {})
}

// 过滤分类
export const getPostListByCategory = async (id: string): Promise<IPost[]> => {
  const data = await getPostList({
    offset: 0,
    limit: 100
  })
  return data.rows.filter((item) => item.category.id === id)
}
// 过滤标签
export const getPostListByTag = async (id: string): Promise<IPost[]> => {
  const data = await getPostList({
    offset: 0,
    limit: 100
  })
  return data.rows.filter((item) => item.tag_id.indexOf(id) !== -1)
}
