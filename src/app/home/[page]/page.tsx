import Image from "next/image";
import axios from "axios";
import { IPost, ITag } from "@/app/api/types";
import PostList from "../_components/PostList";
import Nav from "@/components/Nav";
interface IData {
  posts: IPost[];
  page: number;
  pageSize: number;
  count: number;
}
const config = [
  {
    name: "首页",
    icon: "",
  },
  {
    name: "归档",
    icon: "",
  },
  {
    name: "关于",
    icon: "",
  },
  {
    name: "分类",
    icon: "",
  },
  {
    name: "标签",
    icon: "",
  },
  {
    name: "友链",
    icon: "",
  },
  {
    name: "登录",
    icon: "",
  },
];
export async function useGetData(page: number): Promise<IData> {
  // const [page, setPage] =useState(1)
  // const [pageSize, setPageSize] =useState(6)
  const pageSize = 5;
  // const page = 1;
  const { data: { data: { rows, count } } } = await axios.get("https://a1ex.vip/api/article/all", {
    params: {
      offset: (page - 1) * pageSize,
      limit: pageSize,
    },
  });
  const { data: { data: { rows: tagRows } } } = await axios.get("https://a1ex.vip/api/tag", {
  });
  rows.map((item: IPost) => {
    item.tags = JSON.parse(item.tag_id).map((id: string) => tagRows.find((item: ITag) => item.id === id))
  })
  return {
    posts: rows,
    count: count,
    page,
    pageSize,
  };
}
export default async function Home({ params: { page } }: { params: { page: string } }) {
  const res = await useGetData(+page);
  return (
    <div className="bg-[url('https://a1ex.vip/api/default-cover')] bg-fixed bg-cover">
      <PostList {...res} />
    </div>
  );
}
