'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import HomeIcon from '@/assets/icon/home.svg'
import ArchiveIcon from '@/assets/icon/archive.svg'
import AboutIcon from '@/assets/icon/about.svg'
import CategoryIcon from '@/assets/icon/category.svg'
import TagIcon from '@/assets/icon/tag.svg'
import LinkIcon from '@/assets/icon/Link.svg'
import LoginIcon from '@/assets/icon/login.svg'
const config = [
	{
		name: '首页',
		icon: HomeIcon,
		path: '/home/1',
		keyword: 'home',
	},
	{
		name: '归档',
		icon: ArchiveIcon,
		path: '/archive/1',
		keyword: 'archive',
	},
	{
		name: '关于',
		icon: AboutIcon,
		path: '/about',
		keyword: 'about',
	},
	{
		name: '分类',
		icon: CategoryIcon,
		path: '/category',
		keyword: 'category',
	},
	{
		name: '标签',
		icon: TagIcon,
		path: '/tag',
		keyword: 'tag',
	},
	{
		name: '友链',
		icon: LinkIcon,
		path: '/friend',
		keyword: 'friend',
	},
	{
		name: '登录',
		icon: LoginIcon,
		path: '/login',
		keyword: 'login',
	},
]
export default function Nav() {
	const path = usePathname()

	return (
		<div className="w-full z-10 relative h-16 filter-box shadow-md shadow-main-color">
			<div className="w-[1240px] flex justify-between h-full mx-auto">
				<div className=" flex justify-center items-center">a1ex`s blog</div>
				<div className="flex h-full">
					{config.map(item => (
						<Link
							href={item.path}
							key={item.name}
							className="px-4 hover:text-main-color h-full flex justify-center items-center gap-2"
							style={{
								color: path.includes(item.keyword) ? 'var(--main-color)' : 'inherit',
							}}
						>
							<Image
								width={24}
								height={24}
								src={item.icon}
								style={{
									opacity: path.includes(item.keyword) ? '1' : '0.5',
								}}
								alt={item.name}
							/>
							{item.name}
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}
