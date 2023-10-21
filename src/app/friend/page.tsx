import Image from "next/image";
import axios from "axios";
import { ICategory, IPost, ITag } from "@/app/api/types";
import Breadcrumb from "@/components/Breadcrumb";
import { getCategoryList } from "../api/category";
import MiniLink from "@/components/MiniLink";
import { getFriendList, getFriendType } from "../api/friend";
import Link from "next/link";
interface IData {
    categoryList: ICategory[];
}
export async function useGetData(): Promise<IData> {
    const typeList = await getFriendType()
    console.log("🚀 a1ex~ typeList:", typeList.data)
    const friendList = await getFriendList()
    console.log("🚀 a1ex~ friendList:", friendList.data.rows)
    const renderList = typeList.data.rows.map(item => {
        const children = friendList.data.rows.filter(i => i.type === item.id)
        console.log("🚀 a1ex~ children:", children)
        return {
            ...item,
            children
        }
    })
    return renderList
}
export default async function Catrgory() {
    const list = await useGetData();
    return list.map(item => <div className="w-full">
        <div className="w-full tips text-2xl pl-3 border-l-2 border-main-color border-solid bg-main-color opacity-50 py-2 text-white">{item.name}</div>
        <div className="w-full flex flex-wrap">
            {item.children.map(i => (
                <Link href={i.link} className="w-[30vh] flex flex-col justify-between rounded-lg border-[#ccc] border-[1px] border-l-3 border-l-main-color border-solid p-3 mt-4 mr-[3vw] hover:translate-y-[-6px] transition-all hover:shadow-black hover:shadow-sm">
                    <span>{i.name}</span>
                    <hr className="my-1" />
                    <span className="text-sm text-[#ccc]">{i.desc || '这货神恶魔都没留下'}</span>
                </Link>
            ))
            }
        </div>
    </div>
    )
}
