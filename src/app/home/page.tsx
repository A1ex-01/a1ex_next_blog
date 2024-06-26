import { getPostList } from '@/api/post'
import { getTagList } from '@/api/tag'
import { IPost, ITag } from '@/api/types'
import Link from 'next/link'
import PostList from './_components/PostList'
import { Metadata } from 'next'
interface IData {
  posts: IPost[]
  page: number
  pageSize: number
  count: number
}
export const metadata: Metadata = {
  title: 'a1ex`s blog',
  description: '前端学习分享，next.js + tailwindcss'
}
async function useGetData(page: number): Promise<IData> {
  const pageSize = 6
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
  console.log('🚀 ~ rows.map ~ rows:', rows.length)
  return {
    posts: rows,
    count: count,
    page,
    pageSize
  }
}
export default async function Home() {
  const res = await useGetData(1)
  return (
    <div className="bg-[url('https://a1ex.vip/api/default-cover')] bg-fixed bg-cover">
      <div className="w-full bg-white/90">
        <div className="w-[1240px] mx-auto">
          <div>
            <PostList {...res} />
          </div>
        </div>
      </div>
      <div>
        <div className="h-[145px] bg-white/90 w-full flex flex-col items-center justify-center box-border border-t-8 border-solid border-main-color">
          <p>[a1ex的博客]</p>
          <div>
            [主页由
            <Link
              href={'https://developer.hitokoto.cn/'}
              className="text-main-color"
              target="_blank"
            >
              一言
            </Link>
            提供]
          </div>
          <Link href={'https://beian.miit.gov.cn/'} className="text-main-color" target="_blank">
            [赣ICP备2022002397号]
          </Link>
        </div>
      </div>
    </div>
  )
}
