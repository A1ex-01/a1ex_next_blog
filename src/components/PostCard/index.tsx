import Image from 'next/image'
import axios from 'axios'
import dayjs from 'dayjs'
import '@/app/globals.css'
import { IPost } from '../../app/api/types'
export default function PostCard({ post, index }: { post: IPost, index: number }) {
  return (
    <div key={post.id} className={'h-[475px] flex items-center' + (index % 2 === 0 ? ' flex-row' : ' flex-row-reverse')}>
      <div className='w-[696px] h-[435px] bg-white border border-soli'><img className='w-full h-full bg-cover' src={`https://a1ex.vip/api/article/cover/${post.id}`} alt="" /></div>
      <div className='w-[464px] h-[382px] flex px-8 justify-center gap-1 flex-col bg-white border border-solid border-gray-200'>
        <div className='flex gap-1 items-center'>
          <img className='w-5 h-5' src="https://a1ex.vip/_nuxt/category.52adaaf7.svg" alt="" />
          <div>{post.category.name}</div>
          {post.tags.map(tag => <>
            <img className='w-5 h-5 bg-cover' src="https://a1ex.vip/_nuxt/tag.9943047c.svg" alt="" />
            <div>{tag.name}</div>
          </>)}
        </div>
        <div className="text-[22px] text-main-color">{post.title}</div>
        <div className='flex'>
          <div>{post.read_count}</div>
          <div>{post.like_count}</div>
          <div>{post.comment_count}</div>
        </div>
        <div className='h-24 overflow-hidden text-[#666] my-2'>{post.desc}</div>
        <div className='flex items-center gap-2'>
          <img className='w-8 h-8 rounded-[50%] bg-cover' src={`https://a1ex.vip/api/user/avatar/${post.user.id}`} alt="" />
          <div className='text-main-color mx-1'>{post.user.nickname}</div>
          <div className='text-sm text-[#999]'>发布于 {dayjs(post.createdAt).format("YYYY-DD-MM HH:mm")}</div>
        </div>
      </div>
    </div>
  )
}

