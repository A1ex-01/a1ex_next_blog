import { IPost } from '@/api/types'
import { ISortByMonth } from '@/utils/refixByMouth'
import Link from 'next/link'

export default function TimeLineCard({ post }: { post: IPost }) {
	return (
		<div className="time-line w-[80%] ml-auto mr-7 relative shadow-xl border border-gray-300 border-solid px-6 py-4">
			<Link href={`/post/${post.id}`} className="title text-xl text-main-color font-bold">
				{post.title}
			</Link>
			{/* <div className="line-clamp-2">
            <p className="desc truncate shadow-lg">{post.desc}</p>
        </div> */}
			<p className="line-clamp-2 overflow-hidden text-ellipsis text-[#ccc] mt-3">{post.desc}</p>
			<div className="arrow w-6 h-6 bg-black rotate-45 absolute right-0 top-1/2 translate-x-[50%] -translate-y-1/2"></div>
		</div>
	)
}
