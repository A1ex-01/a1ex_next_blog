import { ITag } from '@/api/types'
import MiniLink from '@/components/MiniLink'
import { getTagList } from '../../api/tag'
import { getPostList } from '../../api/post'
import { Metadata } from 'next'
interface IData {
  tagList: (ITag & {
    count: number
  })[]
}
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `标签 - a1ex\`s blog`
  }
}
async function useGetData(): Promise<IData> {
  const { rows: tagRows } = await getTagList()
  const data = await getPostList({
    offset: 0,
    limit: 100
  })
  return {
    tagList: tagRows.map((tag) => {
      return {
        ...tag,
        count: data.rows.filter((post) => JSON.parse(post.tag_id).includes(tag.id)).length
      }
    })
  }
}
export default async function Tag() {
  const { tagList } = await useGetData()
  return tagList.map((item) => (
    <MiniLink key={item.id} name={item.name} href={`/tag/${item.id}`} icon="#" count={item.count} />
  ))
}
