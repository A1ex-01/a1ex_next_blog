export interface IPost {
id: string
title: string
desc: string
tag_id: TagId[]
read_count: number
like_count: number
comment_count: number
updatedAt: string
createdAt: string
deletedAt: any
user: User
category: Category
}
  
export interface TagId {
id: string
name: string
createdAt: string
}

export interface User {
id: string
nickname: string
}

export interface Category {
id: string
name: string
}
  