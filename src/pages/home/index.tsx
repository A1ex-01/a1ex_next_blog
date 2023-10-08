import Image from "next/image";
import axios from "axios";
import "@/app/globals.css";
import { IPost } from "@/components/PostCard/types";
import PostCard from "@/components/PostCard";
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
export async function getStaticProps() {
  const pageSize = 10;
  const page = 1;
  const res = await axios.get("https://a1ex.vip/api/article/all", {
    params: {
      offset: (page - 1) * pageSize,
      limit: pageSize,
    },
  });
  console.log("🚀 a1ex~ res:", res.data.data);
  return {
    props: {
      posts: res.data.data.rows,
      count: res.data.data.count,
      page,
      pageSize,
    },
  };
}
export default function Home({
  posts,
  page,
  pageSize,
  count,
}: {
  posts: IPost[];
  page: number;
  pageSize: number;
  count: number;
}) {
  console.log("🚀 a1ex~ posts, page, pageSize:", posts, page, pageSize);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  bg-[url('https://a1ex.vip:8004/default-cover')] bg-fixed bg-cover">
      <div className="h-screen">
        <div className="w-[1240px] flex justify-between h-16">
          <div className=" flex justify-center items-center">a1ex`s blog</div>
          <div className="flex h-full">
            {config.map((item) => (
              <div className="px-4 hover:bg-slate-500 h-full flex justify-center items-center hover:text-cyan-400">
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        {posts.map((post) => (
          <PostCard post={post} />
        ))}
      </div>
    </main>
  );
}
