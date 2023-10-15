import Image from "next/image";
import axios from "axios";
import { IPost, ITag } from "@/app/api/types";
import PostList from "../_components/PostList";
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
    <div className="flex min-h-screen flex-col items-center justify-between  bg-[url('https://a1ex.vip/api/default-cover')] bg-fixed bg-cover">
      <div className="h-screen">
        <div className="w-[1240px] flex justify-between h-16">
          <div className=" flex justify-center items-center">a1ex`s blog</div>
          <div className="flex h-full">
            {config.map((item) => (
              <div key={item.name} className="px-4 hover:bg-slate-500 h-full flex justify-center items-center hover:text-cyan-400">
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </div>
      <PostList {...res} />
    </div>
  );
}
