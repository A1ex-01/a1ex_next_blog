
import Image from "next/image";
import axios from "axios";
import { IPost, ITag } from "@/components/PostCard/types";
import PostCard from "@/components/PostCard";
import { useEffect } from "react";
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
async function getServerSideProps(): Promise<IData> {
  console.log("🚀 a1ex~ getStaticProps:")
  const pageSize = 6;
  const page = 1;
  const { data: { data: { rows, count } } } = await axios.get("https://a1ex.vip/api/article/all", {
    params: {
      offset: (page - 1) * pageSize,
      limit: pageSize,
    },
  });
  const { data: { data: { rows: tagRows } } } = await axios.get("https://a1ex.vip/api/tag", {
  });
  rows.map((item: IPost) => {
    console.log("🚀 a1ex~ item.tag_id:", typeof item.tag_id)
    item.tags = JSON.parse(item.tag_id).map(id => tagRows.find((item: ITag) => item.id === id))
  })
  return {
    posts: rows,
    count: count,
    page,
    pageSize,
  };
}
// Home.getInitialProps = async () => {
//   console.log("🚀 a1ex~ getStaticProps:")
//   const pageSize = 10;
//   const page = 1;
//   const res = await axios.get("https://a1ex.vip/api/article/all", {
//     params: {
//       offset: (page - 1) * pageSize,
//       limit: pageSize,
//     },
//   });
//   return {
//     props: {
//       posts: res.data.data.rows,
//       count: res.data.data.count,
//       page,
//       pageSize,
//     },
//   };
// }
export default async function Home() {
  const { posts } = await getServerSideProps();
  console.log("🚀 a1ex~ posts:", posts)
  // console.log("🚀 a1ex~ data:", data)
  // const res = await fetch("http://localhost:3000", { cache: "no-store" });
  // const result = await res.json();
  // console.log("🚀 a1ex~ result:", res)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  bg-[url('https://a1ex.vip/api/default-cover')] bg-fixed bg-cover">
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
      <div className="bg-white/90 w-full flex flex-col items-center py-5 gap-5">
        {posts.map((post, index) => (
          <PostCard post={post} index={index} />
        ))}
      </div>
    </main>
  );
}
