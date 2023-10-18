import Image from "next/image";
import axios from "axios";
import { ICategory, IPost, ITag } from "@/app/api/types";
import Breadcrumb from "@/components/Breadcrumb";
import { getCategoryList } from "../api/category";
import MiniLink from "@/components/MiniLink";
import { getTagList } from "../api/tag";
interface IData {
    tagList: ITag[];
}
export async function useGetData(): Promise<IData> {

    const { data: { rows: tagRows } } = await getTagList();
    console.log("🚀 a1ex~ t:", tagRows)
    return {
        tagList: tagRows
    };
}
export default async function Tag() {
    const { tagList } = await useGetData();
    return (
        <div className="w-[70%] py-10 px-12 rounded-2xl min-h-[100px] mx-auto absolute left-[50%] top-[30vh] translate-x-[-50%] after:content-[''] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:backdrop-blur-[16px] after:z-[-1] z-0 overflow-hidden flex flex-col items-start gap-3" style={{ boxShadow: '0 0 10px var(--main-color)' }}>
            <Breadcrumb crumbs={[{ name: 'home', href: '/home/1', icon: '-' }, { name: 'tag', href: '/tag', icon: '-' }]} />
            <div className="text-5xl bg-main-color text-white px-5 py-2 rounded-xl">{'tag'}</div>
            <div className="content min-h-[100px] rounded-2xl bg-white flex flex-wrap gap-3 w-full p-5">
                {tagList.map(item => <MiniLink name={item.name} href={`/category/${item.id}`} icon="#" count={1} />)}
            </div>
        </div>
    );
}
