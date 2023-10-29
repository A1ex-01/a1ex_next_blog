import Image from 'next/image'
import { getMeInfo } from '../../api/about'
import MarkdownIt from 'markdown-it'
import 'github-markdown-css'
export async function useGetData(): Promise<{
	desc: string
}> {
	const res = await getMeInfo()
	return res
}
export default async function Catrgory() {
	const meInfo = await useGetData()
	const md = new MarkdownIt({})
	return (
		<div
			className="markdown-body"
			dangerouslySetInnerHTML={{
				__html: md.render(meInfo.desc),
			}}
		></div>
	)
}
