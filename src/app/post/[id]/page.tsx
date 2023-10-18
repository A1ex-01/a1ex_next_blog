import { getPostDetail } from "@/app/api/post";
import Link from "next/link";
import Markdown from "react-markdown";
async function getData(id) {
    return getPostDetail(id)
}
export default async function Post({ params }: {
    params: { id: string }
}) {
    const { data } = await getData(params.id)
    return (
        <div className="bg-white ">
            <div className="max-w-[1240px] mx-auto">
                <Markdown>{data.content_md}</Markdown>
                <Markdown>*React-Markdown* is **Awesome**</Markdown>
            </div>
        </div>
    )
}