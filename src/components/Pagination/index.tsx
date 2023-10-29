import Image from 'next/image'
import axios from 'axios'
import '@/app/globals.css'
import { IPagination } from '@/api/types'
import Link from 'next/link'
export default function Pagination({
	page,
	count,
	pageSize,
	pathRoot = 'home',
}: IPagination & {
	pathRoot: string
}) {
	const size = Math.ceil(count / pageSize)
	return (
		<div className="text-main-color flex gap-1 font-bold">
			<Link
				href={`/${pathRoot}/${page - 1}`}
				className=""
				style={{
					pointerEvents: page === 1 ? 'none' : 'inherit',
					opacity: page === 1 ? '0.5' : '1',
					cursor: page === 1 ? 'not-allowed' : 'pointer',
				}}
			>
				BACK
			</Link>
			{Array.from(
				{
					length: size,
				},
				(_, i) => i + 1,
			).map(i => (
				<Link
					href={`/${pathRoot}/${i}`}
					key={i}
					className="w-8 h-8 text-center"
					style={{
						opacity: page === i ? '0.5' : '1',
					}}
				>
					{i}
				</Link>
			))}
			<Link
				href={`/${pathRoot}/${page + 1}`}
				className=""
				style={{
					pointerEvents: page === size ? 'none' : 'inherit',
					opacity: page === size ? '0.5' : '1',
					cursor: page === size ? 'not-allowed' : 'pointer',
				}}
			>
				NEXT
			</Link>
		</div>
	)
}
