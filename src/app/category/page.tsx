import { ICategory } from '@/api/types'
import MiniLink from '@/components/MiniLink'
import { getCategoryList } from '../../api/category'
import { getPostList } from '../../api/post'
import { Metadata } from 'next'
interface IData {
  categoryList: (ICategory & {
    count: number
  })[]
}
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `分类 - a1ex\`s blog`
  }
}
async function useGetData(): Promise<IData> {
  const { rows: categoryRows } = await getCategoryList()
  const data = await getPostList({
    offset: 0,
    limit: 100
  })
  return {
    categoryList: categoryRows.map((category) => {
      return {
        ...category,
        count: data.rows.filter((post) => post.category.id === category.id).length
      }
    })
  }
}
export default async function Category() {
  const { categoryList } = await useGetData()
  return categoryList.map((item) => (
    <MiniLink
      key={item.id}
      name={item.name}
      href={`/category/${item.id}`}
      icon="#"
      count={item.count}
    />
  ))
}
