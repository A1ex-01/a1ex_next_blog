import { IPost } from '@/api/types'
import { ISortByMonth } from '@/utils/refixByMouth'
import Link from 'next/link'
import { CSSProperties } from 'styled-components'

export default function TimeLineCard({ post, index }: { post: IPost; index: number }) {
	const transformStyle: CSSProperties[] = [
		{
			transform: 'translate(-6px, -12px) rotate(45deg)',
			top: '50%',
			right: '0%',
			boxShadow: '2px -2px 0px rgba(0, 0, 0, 0.2)',
		},
		{
			transform: 'translate(6px, -12px) rotate(-45deg)',
			top: '50%',
			left: '0%',
			boxShadow: '-2px -2px 0px rgba(0, 0, 0, 0.2)',
		},
	]
	return (
		<>
			<div className={`time-line w-[80%] ${index % 2 === 0 ? 'ml-auto mr-4' : 'mr-auto ml-4'} shadow-xl border border-gray-300 border-solid px-6 py-4 relative z-1`}>
				<Link href={`/post/${post.id}`} className="title text-xl text-main-color font-bold hover:opacity-50">
					{post.title}
				</Link>
				<p className="line-clamp-2 overflow-hidden text-ellipsis text-[#ccc] mt-3">{post.desc}</p>
			</div>
			<div className={`arrow w-6 h-6 bg-white absolute -z-1`} style={transformStyle[index % 2 === 0 ? 0 : 1]}></div>
		</>
	)
}
