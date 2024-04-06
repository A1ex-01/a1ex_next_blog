import Nav from '@/components/Nav'
import './globals.css'
import '@/app/assets/var.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import Head from 'next/head'
const inter = Inter({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'a1ex`s blog',
  description: '前端学习分享，next.js + tailwindcss'
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preload" as="image" href="https://a1ex.vip/api/default-cover" />
      </Head>
      <body
        className={inter.className}
        style={{
          backgroundImage: "url('https://a1ex.vip/api/default-cover')",
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover'
        }}
      >
        <div className="flex min-h-[50vh] flex-col items-center justify-between  bg-[url('https://a1ex.vip/api/default-cover')] bg-fixed bg-cover">
          <div className="h-[50vh] w-full relative">
            <Nav />
            {/* <div className="absolute left-[15%] top-[50%] -translate-y-1/2">
              <Intro />
            </div> */}
          </div>
        </div>
        {children}
      </body>
    </html>
  )
}
