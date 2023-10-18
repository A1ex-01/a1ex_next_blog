import Image from "next/image";
import axios from "axios";
import { ICategory, IPost, ITag } from "@/app/api/types";
import Breadcrumb from "@/components/Breadcrumb";
import { getCategoryList } from "../api/category";
import MiniLink from "@/components/MiniLink";
interface IData {
    categoryList: ICategory[];
}
export async function useGetData(): Promise<IData> {

    const { data: { rows: categoryRows } } = await getCategoryList();
    console.log("🚀 a1ex~ categoryRows:", categoryRows)
    return {
        categoryList: categoryRows
    };
}
export default async function Catrgory() {
    const { categoryList } = await useGetData();
    return categoryList.map(item => <MiniLink name={item.name} href={`/category/${item.id}`} icon="#" count={1} />)
}
