'use client'
import { login } from '../../api/user'
export default function Login() {
	const loginAction = async () => {
		// 判断是否是七天免登录
		const result = await login({
			email: '2311807091@qq.com',
			password: 'Vae20.30Peter',
			code: '',
		})
		console.log('🚀 a1ex~ result:', result)
		if (result.errno === 0) {
			// 成功!保存token
			// const cache = useCaChe("WALINE_USER");
			// const cache2 = useCaChe("WALINE_USER", "ssy");
			// const { setCache } = useCaChe("token");
			// cache.setCache(result.data);
			localStorage.setItem('WALINE_USER', JSON.stringify(result.data))
			// cache2.setCache(result.data);
			sessionStorage.setItem('WALINE_USER', JSON.stringify(result.data))

			// setCache(result.data.token);
			sessionStorage.setItem('token', result.data.token)
			// message(EMessageType.SUCCESS, "登录成功~");
			// 保存到store
			// userStore.setUserInfo(result.data);
			// await userStore.getUserInfoByIdAction();
			// 转到redirect位置
			// router.replace((route.query.redirect as string) || "/home");
		} else {
			// message(EMessageType.DANGER, "登录失败~");
		}
	}
	return (
		<div>
			账号：
			<input type="text" />
			密码：
			<input type="password" />
			<button onClick={loginAction}>提交</button>
		</div>
	)
}
