import Nav from '@/components/Nav'
import './globals.css'
import '@/app/assets/var.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { getTagList } from '@/api/tag'
import React, { cloneElement } from 'react'
import Intro from '@/components/Intro'
import Head from 'next/head'
import Link from 'next/link'
const inter = Inter({
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'a1ex`s blog',
	description: '前端学习分享，next.js + tailwindcss',
	icons: {
		other: [{ rel: 'preload', url: 'https://a1ex.vip/api/default-cover' }],
	},
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body
				className={inter.className}
				style={{
					backgroundImage: "url('https://a1ex.vip/api/default-cover')",
					backgroundAttachment: 'fixed',
					backgroundSize: 'cover',
				}}
			>
				<div className="flex min-h-screen flex-col items-center justify-between  bg-[url('https://a1ex.vip/api/default-cover')] bg-fixed bg-cover">
					<div className="h-screen w-full relative">
						<Nav />
						<div className="absolute left-[15%] top-[50%] -translate-y-1/2">
							<Intro />
						</div>
					</div>
				</div>
				{children}
			</body>
		</html>
	)
}
