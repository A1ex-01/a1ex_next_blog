class AxFetch {
	constructor(private baseURL: string) {}
	get(url: string, params: any) {
		const paramsData = new URLSearchParams()
		Object.keys(params).map(item => {
			paramsData.append(item, params[item])
		})
		return fetch(`${this.baseURL}${url}?${paramsData.toString()}`, {
			method: 'GET',
			next: {
				revalidate: false,
			},
		})
			.then(res => res.json())
			.then(res => res.data)
	}
	post(url: string, data: any) {
		return fetch(`${this.baseURL}${url}`, {
			method: 'POST',
			body: JSON.stringify(data),
			next: {
				revalidate: false,
			},
		})
			.then(res => res.json())
			.then(res => res.data)
	}
}
const axFetch = new AxFetch('https://a1ex.vip/api')
export default axFetch
