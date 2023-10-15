export interface IPost {
id: string
title: string
desc: string
tag_id: string
tags: ITag[]
read_count: number
like_count: number
comment_count: number
updatedAt: string
createdAt: string
deletedAt: any
user: IUser
category: ICategory
}
  
export interface ITag {
id: string
name: string
createdAt: string
}

export interface IUser {
id: string
nickname: string
}

export interface ICategory {
id: string
name: string
createdAt: string
}

export interface IPagination {
    page: number
    count: number
    pageSize: number
}