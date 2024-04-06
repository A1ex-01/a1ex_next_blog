'use client'
import LinkIcon from '@/assets/icon/Link.svg'
import AboutIcon from '@/assets/icon/about.svg'
import ArchiveIcon from '@/assets/icon/archive.svg'
import CategoryIcon from '@/assets/icon/category.svg'
import HomeIcon from '@/assets/icon/home.svg'
import TagIcon from '@/assets/icon/tag.svg'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'
// import HomeJson from '@/assets/lottie/home.json'
import favicon from '@/app/favicon.ico'
const config = [
  {
    name: '首页',
    icon: HomeIcon,
    path: '/home/1',
    keyword: 'home'
  },
  {
    name: '归档',
    icon: ArchiveIcon,
    path: '/archive/1',
    keyword: 'archive'
  },
  {
    name: '关于',
    icon: AboutIcon,
    path: '/about',
    keyword: 'about'
  },
  {
    name: '分类',
    icon: CategoryIcon,
    path: '/category',
    keyword: 'category'
  },
  {
    name: '标签',
    icon: TagIcon,
    path: '/tag',
    keyword: 'tag'
  },
  {
    name: '友链',
    icon: LinkIcon,
    path: '/friend',
    keyword: 'friend'
  }
  // {
  // 	name: '',
  // 	icon: LoginIcon,
  // 	path: '/login',
  // 	keyword: 'login',
  // },
]
const headerHeight = 64
export default function Nav() {
  const path = usePathname()
  // 固定头部
  const [scroll, setScroll] = useState(0)
  const handleScroll = () => setScroll(document.documentElement.scrollTop)
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  const isFix = useMemo(() => {
    return scroll > headerHeight
  }, [scroll])
  // useEffect(() => {
  // 	Lottie.loadAnimation({
  // 		container: ref.current!, // the dom element that will contain the animation
  // 		renderer: 'svg',
  // 		loop: true,
  // 		autoplay: true,
  // 		path: '../../assets/lottie/home.json', // the path to the animation json
  // 	})
  // }, [ref])
  return (
    <div
      className="w-full z-10 relative h-20"
      style={{
        position: isFix ? 'fixed' : 'static',
        top: 0,
        left: 0,
        zIndex: 999
      }}
    >
      <div className="w-[1240px] flex justify-between h-full mx-auto rounded-b-lg bg-white filter-box shadow-md shadow-main-color p-4">
        <Link href={'/'} className="flex gap-2">
          <Image src={favicon} width={38} height={38} className="object-contain" alt="logo" />
          <h1 className="flex justify-center items-center font-[500] text-lg h-full font-bold">
            a1ex`s blog
          </h1>
        </Link>
        <div className="flex h-full">
          {config.map((item) => (
            <Link
              href={item.path}
              key={item.name}
              className="px-4 hover:text-main-color h-full flex justify-center items-center gap-2"
              style={{
                color: path.includes(item.keyword) ? 'var(--main-color)' : 'inherit'
              }}
            >
              <Image
                width={24}
                height={24}
                src={item.icon}
                style={{
                  opacity: path.includes(item.keyword) ? '1' : '0.5'
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
