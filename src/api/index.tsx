class AxFetch {
    constructor(private baseURL: string) {
    }
    get(url: string, params: any) {
        const paramsData = new URLSearchParams()
        Object.keys(params).map(item => {
            paramsData.append(item, params[item])
        })
        return fetch(`${this.baseURL}${url}?${paramsData.toString()}`, {
            method: 'GET',
        }).then(res => res.json()).then(res => res.data)
    }
    post(url: string, data: any) {
        return fetch(`${this.baseURL}${url}`, {
            method: 'POST',
            body: JSON.stringify(data)
        }).then(res => res.json()).then(res => res.data)
    }
}
export default new AxFetch('https://a1ex.vip/api')