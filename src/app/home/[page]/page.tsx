import Image from "next/image";
import axios from "axios";
import { IPost, ITag } from "@/api/types";
import PostList from "../_components/PostList";
import { getTagList } from "@/api/tag";
import { getPostList } from "@/api/post";
interface IData {
  posts: IPost[];
  page: number;
  pageSize: number;
  count: number;
}
export async function useGetData(page: number): Promise<IData> {
  const pageSize = 5;
  const { rows, count } = await getPostList({
    offset: (page - 1) * pageSize,
    limit: pageSize,
  })
  const { rows: tagRows } = await getTagList()
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
