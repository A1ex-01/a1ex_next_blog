import { getPostDetail } from '@/api/post'
import MarkdownIt from 'markdown-it'
import 'github-markdown-css'
import markdownItAnchor from 'markdown-it-anchor'
import markdownItTocDoneRight from 'markdown-it-toc-done-right'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'
import './styles.scss'
import WalineWrapper from './_components/WalineWrapper'
import { cache } from 'react'
import { Metadata } from 'next'

const getData = cache(async function getData(id: string) {
  return getPostDetail(id)
})
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const res = await getData(params.id)
  return {
    title: `${res.title} - a1ex\`s blog`
  }
}
export default async function Post({
  params
}: {
  params: {
    id: string
  }
}) {
  const data = await getData(params.id)
  const md = new MarkdownIt({
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(str, {
            language: lang
          }).value
        } catch (__) {
          console.log('🚀 ~ __:', __)
        }
      }

      return '' // use external default escaping
    }
  })
  let navContent = ''
  md.use(markdownItAnchor, {
    permalinkSymbol: '#'
  }).use(markdownItTocDoneRight, {
    containerId: 'toc', //生成的容器的ID，这样最后返回来的字符串是 <nav id="toc"><nav/>
    listType: 'ol', //导航列表使用ul还是ol
    listClass: 'md-list', //li标签的样式名
    linkClass: 'md-link', //a标签的样式名
    callback: (html: any) => {
      navContent = html
      //   if (tocContent.value) return;
      //   tocContent.value = html;
    }
  })
  return (
    <>
      <div className="bg-white py-14 flex justify-center gap-4 items-start ">
        <div
          className="w-[60%] mx-auto markdown-body"
          dangerouslySetInnerHTML={{
            __html: md.render(data.content_md)
          }}
        ></div>
        <div className="right-c">
          <div className="right-title">目录</div>
          <div
            className="toc w-[20vw] right-content"
            dangerouslySetInnerHTML={{
              __html: navContent
            }}
          ></div>
        </div>
      </div>
      <div className="bg-white py-14 flex justify-center gap-4">
        <WalineWrapper />
      </div>
    </>
  )
}
