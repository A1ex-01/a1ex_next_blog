import { useRef } from 'react'
import FormStore from './formStore'

const useForm = (form) => {
  // 使用 ref 防止重复创建
  const formRef = useRef()

  if (!formRef.current) {
    if (form) {
      // 传入初始值的时候直接使用这个创建好的示例
      formRef.current = form
    } else {
      // 否则新建一个示例并挂到 formRef 下
      const formStore = new FormStore()
      formRef.current = formStore.getForm()
    }
  }
  return [formRef.current]
}
export default useForm
