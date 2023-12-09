import React, { useContext } from 'react'
import FormContext from './formContext'
// export default class Item extends React.Component {
// 	// 这里就和函数组件的useContext一样，可以将contextType视为useContext(FormContext)的返回值
// 	static contextType = FormContext

// 	componentDidMount() {
// 		// 注册自己，其实就是将自己的方法都暴露给form实例，让他控制Item的更新
// 		this.context.registerField(this)
// 	}

// 	// 这就是第二步，更新视图，大家翻一下上面FormStore的setFieldValue就明白了
// 	onStoreChange = () => {
// 		this.forceUpdate()
// 	}
// 	// 将表单组件改为受控组件，劫持get和set

// 	render() {
// 		const { children } = this.props
// 		return React.cloneElement(children, this.getControlled(children.props))
// 	}
// }
export default function Item(props) {
	const { children, name } = props
	const context = useContext(FormContext)
	console.log('🚀 a1ex~ context:', context)
	function getControlled(childProps = {}) {
		console.log('🚀 a1ex~ context.getFieldValue(name):', context.getFieldValue(name))
		return {
			...childProps,
			value: context.getFieldValue(name),
			onChange: e => {
				console.log('🚀 a1ex~ e:', e)
				context.up(name, e.target.value)
			},
		}
	}
	// if (!children) return 111
	return React.cloneElement(children, getControlled(children.props))
}
