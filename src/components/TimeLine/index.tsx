import { IPost } from '@/api/types'
import { ISortByMonth } from '@/utils/refixByMouth'
import TimeLineCard from './components/Card'
import dayjs from 'dayjs'

export default function TimeLine({ archive }: { archive: ISortByMonth<IPost> }) {
	return (
		<div className="w-full relative border-box">
			<div className="title relative w-full h-20 flex justify-center items-center text-2xl text-main-color">
				{archive.title}
				<div className="tick absolute top-0 left-[50%] -translate-x-1/2 border-main-color w-3 h-full border-y-4 border-solid"></div>
			</div>
			{archive.list.map(post => (
				<div key={post.id} className="content h-[250px] flex relative items-center">
					<div className="tick absolute bg-main-color left-1/2 top-0 h-full -translate-x-1/2 w-[6px]"></div>
					<article className="flex-1">
						<TimeLineCard post={post} />
					</article>
					<div className="flex-1 text-main-color text-lg pl-10">{dayjs(post.createdAt).format('Do, MMM YYYY')}</div>
					<div className="circle w-4 h-4 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-solid border-[#f00] rounded-full z-50 bg-white"></div>
				</div>
			))}
		</div>
	)
}
