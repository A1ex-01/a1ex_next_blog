import AxFetch from "./index"
export const getMeInfo = async () => {
    return AxFetch.get('/user/HmCTRHVXbJC7nlbB5oIPQ', {})
}