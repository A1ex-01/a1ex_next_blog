class AxFetch {
    constructor(private baseURL: string) {
    }
    get(url: string, params: any) {
        const paramsData = new URLSearchParams()
        Object.keys(params).map(item => {
            paramsData.append(item, params[item])
        })
        console.log(`${this.baseURL}${url}?${paramsData.toString()}`)
        return fetch(`${this.baseURL}${url}?${paramsData.toString()}`, {
            method: 'GET',
        }).then(res => res.json())
    }
}
export default new AxFetch('https://a1ex.vip/api')