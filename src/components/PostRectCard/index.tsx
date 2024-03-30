import Image from 'next/image'
import axios from 'axios'
import dayjs from 'dayjs'
import '@/app/globals.css'
import { IPost } from '../../api/types'
export default function PostCard({ post }: { post: IPost }) {
  return (
    <article
      key={post.id}
      className={
        'h-[420px] w-full flex flex-col border solid border-[#ccc] rounded-2xl overflow-hidden hover:scale-105 transition-all'
      }
    >
      <div className="h-[210px]">
        <img
          src={`https://a1ex.vip/api/article/cover/${post.id}`}
          className="w-full h-[210px] bg-cover"
          alt={post.title}
        />
      </div>
      <div className="w-full h-full p-4 box-border">
        <p className="text-2xl">{post.title}</p>
        <p className="text-[#666] text-lg h-[81px] my-2">{post.desc}</p>
        <div className="flex gap-2 items-center">
          <img
            src={`https://a1ex.vip/api/user/avatar/${post.user.id}`}
            alt={post.user.nickname}
            className="rounded-[50%] w-7 h-7"
          />
          <span className="text-[#666] text-sm">发布于 {post.createdAt}</span>
        </div>
      </div>
    </article>
  )
}
