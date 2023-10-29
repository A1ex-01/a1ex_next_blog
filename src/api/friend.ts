import AxFetch from './index'
import { IFriend, IFriendType, IRow } from './types'
export const getFriendType = async (): Promise<IRow<IFriendType[]>> => {
	return AxFetch.get('/friend_type', {})
}
export const getFriendList = async (): Promise<IRow<IFriend[]>> => {
	return AxFetch.get('/friend?params=%7B%22limit%22:20%7D', {})
}
