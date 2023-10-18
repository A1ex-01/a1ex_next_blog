import AxFetch from "./index"
export const getTagList = async () => {
    return AxFetch.get('/tag', {})
}