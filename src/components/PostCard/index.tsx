import Image from 'next/image'
import axios from 'axios'
import dayjs from 'dayjs'
import '@/app/globals.css'
import { IPost } from '../../api/types'
import CategoryIcon from '@/assets/icon/category.svg'
import TagIcon from '@/assets/icon/tag.svg'
import Link from 'next/link'
export default function PostCard({ post, index }: { post: IPost; index: number }) {
	return (
		<div key={post.id} className={'h-[475px] flex items-center' + (index % 2 === 0 ? ' flex-row' : ' flex-row-reverse')}>
			<div className="w-[696px] h-[435px] bg-white border border-soli">
				<img className="w-full h-full object-cover" src={`https://a1ex.vip/api/article/cover/${post.id}`} alt="" />
			</div>
			<div className="w-[464px] h-[382px] flex px-8 justify-center gap-1 flex-col bg-white border border-solid border-gray-200">
				<div className="flex gap-1 items-center flex-wrap">
					<Image width={20} height={20} src={CategoryIcon} className="w-5 h-5" alt="categoryIcon" />
					<Link href={`/category/${post.category.id}`} className="text-main-color">
						{post.category.name}
					</Link>
					{post.tags.map(tag => (
						<div key={tag.id} className="flex mr-3 items-center">
							<Image width={20} height={20} src={TagIcon} className="w-5 h-5" alt="tagIcon" />
							<Link href={`/tag/${tag.id}`} className="italic text-[#ccc]">
								{tag.name}
							</Link>
						</div>
					))}
				</div>
				<Link href={`/post/${post.id}`} className="text-[22px] text-main-color truncate">
					{post.title}
				</Link>
				<div className="flex gap-2 text-lg">
					<div>
						<i className="mr-1 text-main-color iconfont !text-xl icon-redu"></i>
						{post.read_count}
					</div>
					<div>
						<i className="mr-1 text-main-color iconfont !text-xl icon-xihuan"></i>
						{post.like_count}
					</div>
					<div>
						<i className="mr-1 text-main-color iconfont !text-xl icon-pingluncishu"></i>
						{post.comment_count}
					</div>
				</div>
				<div className="h-24 text-[#666] my-2 line-clamp-4 overflow-hidden text-ellipsis">{post.desc}</div>
				<div className="flex items-center gap-2">
					<img className="w-8 h-8 rounded-[50%] object-cover" src={`https://a1ex.vip/api/user/avatar/${post.user.id}`} alt="" />
					<div className="text-main-color mx-1">{post.user.nickname}</div>
					<div className="text-sm text-[#999]">发布于 {dayjs(post.createdAt).format('YYYY-DD-MM HH:mm')}</div>
				</div>
			</div>
		</div>
	)
}
