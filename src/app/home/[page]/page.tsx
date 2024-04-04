import { getPostList } from '@/api/post'
import { getTagList } from '@/api/tag'
import { IPost, ITag } from '@/api/types'
import PostList from '../_components/PostList'
import { redirect } from 'next/navigation'
import { Metadata } from 'next'
import { cache } from 'react'
interface IData {
  posts: IPost[]
  page: number
  pageSize: number
  count: number
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const res = await useGetData(+params?.page)
  return {
    title: `首页 ${res.page} / ${Math.ceil(res.count / res.pageSize)}页 - a1ex\`s blog`
  }
}
const useGetData = cache(async function (page: number): Promise<IData> {
  const pageSize = 5
  const { rows, count } = await getPostList({
    offset: (page - 1) * pageSize,
    limit: pageSize
  })
  const { rows: tagRows } = await getTagList()
  rows.map((item: IPost) => {
    item.tags = JSON.parse(item.tag_id).map((id: string) =>
      tagRows.find((item: ITag) => item.id === id)
    )
  })
  return {
    posts: rows,
    count: count,
    page,
    pageSize
  }
})
export default async function Home({
  params: { page }
}: {
  params: {
    page: string
  }
}) {
  if (+page === 1) return redirect('/home')
  const res = await useGetData(+page)
  return (
    <div className="bg-[url('https://a1ex.vip/api/default-cover')] bg-fixed bg-cover">
      <PostList {...res} />
    </div>
  )
}
