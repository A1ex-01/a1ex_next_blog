import { IPost } from '@/api/types'
import { ISortByMonth } from '@/utils/refixByMouth'
import Link from 'next/link'

export default function TimeLineCard({ post, index }: { post: IPost; index: number }) {
	return (
		<div className={`time-line w-[80%] ${index % 2 === 0 ? 'ml-auto mr-4' : 'mr-auto ml-4'} relative shadow-xl border border-gray-300 border-solid px-6 py-4`}>
			<Link href={`/post/${post.id}`} className="title text-xl text-main-color font-bold hover:opacity-50">
				{post.title}
			</Link>
			<p className="line-clamp-2 overflow-hidden text-ellipsis text-[#ccc] mt-3">{post.desc}</p>
			<div
				className={`arrow w-6 h-6 bg-white rotate-[${index % 2 === 0 ? '-45deg' : '-225deg'}] absolute ${
					index % 2 === 0 ? 'right-0 translate-x-[50%]' : 'left-0 -translate-x-[50%]'
				} top-1/2  -translate-y-1/2`}
				style={{ boxShadow: '3px 3px 2px #ccc' }}
			></div>
		</div>
	)
}
