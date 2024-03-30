'use client'

import { init } from '@waline/client'
import { useEffect } from 'react'
import '@waline/client/dist/waline.css'
export default function WalineWrapper() {
  useEffect(() => {
    init({
      el: '#waline',
      serverURL: 'https://a1ex.vip/waline'
    })
  }, [])
  return <div id="waline" className="w-[1240px]"></div>
}
