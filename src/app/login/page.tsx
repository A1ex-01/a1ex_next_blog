'use client'
import Form from '@/components/Form'
import { useAnimate } from 'framer-motion'
import { login } from '../../api/user'
import { useRef, useState } from 'react'
import Item from '@/components/Form/Item'
import useForm from '@/components/Form/useForm'
export default function Login() {
	const [scope, animation] = useAnimate()
	const isLogin = useRef(true)
	const checkout = () => {
		animation(scope.current, {
			left: isLogin.current ? '50%' : '10%',
			type: 'spring',
			duration: 1,
			stiffness: 200,
			damping: 2,
		})
		isLogin.current = !isLogin.current
	}
	const [account, setAccount] = useState({
		email: '2311807091@qq.com',
		password: 'Vae20.30Peter',
		code: '',
	})
	const loginAction = async () => {
		// 判断是否是七天免登录
		const result = await login(account)
		if (result.errno === 0) {
			alert('login success')
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
			alert('login fail')
			// message(EMessageType.DANGER, "登录失败~");
		}
	}
	const [form] = useForm()
	return (
		<div
			style={{
				boxShadow: '0 0 10px var(--main-color)',
			}}
			className="w-[40%] py-10 px-12 rounded-2xl min-h-[100px] absolute left-[10%] top-[15vh] after:content-[''] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:backdrop-blur-[16px] after:z-[-1] z-0 overflow-hidden flex flex-col items-start gap-3"
			ref={scope}
		>
			<p className="text-xl font-[500] my-3">start for you</p>
			<p className="text-4xl font-[500] my-3">Login For You Account</p>
			<p className="text-xl font-[500] my-3">
				No A Member?{' '}
				<a className="text-main-color cursor-pointer" onClick={checkout}>
					Register in
				</a>
			</p>
			<Form
				onFinish={e => {
					console.log(e)
				}}
				initialValues={{
					username: '12',
					password: '34',
				}}
				form={form}
			>
				<Item name="username">
					<input type="text" />
				</Item>
				<Item name="password">
					<input type="password" />
				</Item>
				<button htmlType="submit">提交</button>
			</Form>
			{/* <Form.Item label="用户名" placeHolder="请输入用户名" />
			<Form.Item label="密码" placeHolder="请输入密码" /> */}
			<button onClick={loginAction} className="px-3 py-1 bg-main-color text-sm text-white rounded-full">
				登录
			</button>
		</div>
	)
}
