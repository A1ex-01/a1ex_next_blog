import Image from 'next/image'
import axios from 'axios'
import '@/app/globals.css'
import { IPost } from './types'
export default function PostCard({ post }: { post: IPost }) {
  return (
    <div className='h-[475px]'>
      <p>{post.category.name}</p>
      <p>{post.tag_id.map(item => item.name)}</p>
      <p>{post.user.nickname}</p>
      <p>{post.title}</p>
      <p>{post.desc}</p>
    </div>
  )
}

