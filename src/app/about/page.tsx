import 'github-markdown-css'
import MarkdownIt from 'markdown-it'
import { getMeInfo } from '../../api/about'
async function useGetData(): Promise<{
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
