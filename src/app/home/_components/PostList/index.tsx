'use client'
import { IPost } from '@/api/types'
import Pagination from '@/components/Pagination'
import PostCard from '@/components/PostCard'
interface IData {
  posts: IPost[]
  page: number
  pageSize: number
  count: number
}

export default function PostList({ posts, page, pageSize, count }: IData) {
  return (
    <div className=" w-full flex flex-col items-start py-5 gap-5">
      <h2 className="text-3xl font-bold w-[1240px] mx-auto">Latest Blog</h2>
      <div className="list m-auto w-[1240px] gap-x-5 gap-y-10 flex flex-wrap justify-start">
        {posts.map((post, index) => (
          <PostCard key={post.id} post={post} index={index} />
        ))}
      </div>
      <Pagination style={{ marginTop: 20 }} page={page} count={count} pageSize={pageSize} />
    </div>
  )
}
