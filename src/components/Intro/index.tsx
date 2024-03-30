'use client'
import Link from 'next/link.js'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import { WrapperBox } from './style.ts'
export default function Intro() {
  const titleRef = useRef(null)
  // const nameRef = useRef(null)
  const descRef = useRef(null)
  useEffect(() => {
    const typed = new Typed(descRef.current, {
      strings: ['Welcome to my blog!', 'I am a FE developer.', 'Powered by Next.js.'],
      typeSpeed: 50,
      backDelay: 1200,
      backSpeed: 20,
      loop: true,
      loopCount: Infinity
    })
    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy()
    }
  }, [])
  return (
    <WrapperBox>
      <h1 className="text-4xl" ref={titleRef}>
        Hello 👋🏻
      </h1>
      <p className="text-2xl my-2">I am A1ex</p>
      <span className="text-2xl" ref={descRef}></span>
      <div className="links mt-2">
        <Link href={'https://github.com/A1ex-01'} target="_blank">
          <i className="iconfont icon-github !text-[40px]"></i>
        </Link>
      </div>
    </WrapperBox>
  )
}
