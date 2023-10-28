"use client"
import { IPost, ITag } from "@/api/types";
import Pagination from "@/components/Pagination";
import PostCard from "@/components/PostCard";
import axios from "axios";
import { use, useEffect, useState } from "react";
interface IData {
    posts: IPost[];
    page: number;
    pageSize: number;
    count: number;
}

export default ({ posts, page, pageSize, count }: IData) => {
    return (
        <div className="bg-white/90 w-full flex flex-col items-center py-5 gap-5">
            {posts.map((post, index) => (
                <PostCard key={post.id} post={post} index={index} />
            ))}
            <Pagination page={page} count={count} pageSize={pageSize} />
        </div>
    )
}