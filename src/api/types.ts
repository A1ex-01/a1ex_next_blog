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

export interface IRow<T> {
	rows: T
	count: number
}
export interface IParams {
	offset: number
	limit: number
}
export interface IFriendType {
	id: string
	name: string
	createdAt: string
}
export interface IFriend {
	id: string
	name: string
	link: string
	desc: string
	type: string
	createdAt: string
}
export interface IUser {
	display_name: string
	email: string
	password: any
	type: string
	label: string
	url: string
	avatar: string
	github: any
	twitter: any
	facebook: any
	google: any
	weibo: any
	qq: any
	'2fa': any
	createdAt: string
	updatedAt: string
	objectId: number
	mailMd5: string
	token: string
}
export interface IUserStatus {
	errno: number
	errmsg: string
	data: IUser
}
