import AxFetch from "./index"
import { IRow, ITag, IUserStatus } from "./types"
export const login = async (data): Promise<IUserStatus> => {
    return fetch("https://a1ex.vip/waline/token?lang=zh-CN", {method: "POST",body:JSON.stringify(data), headers: {'Content-Type': 'application/json'}}).then(res => res.json()).then(res => res)
}