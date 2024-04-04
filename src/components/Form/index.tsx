import { useMemo, useRef } from 'react'
import Item from './Item'
import FieldContext from './formContext'
import useForm from './useForm'

const Form = (props: {
  initialValues?: any
  onValueChange?: any
  onFinish?: any
  onReset?: any
  form?: any
  children: any
}) => {
  const {
    form, // 在外部使用 `useForm` 创建的实例
    initialValues, // 表单初始值
    onFinish,
    onReset,
    onValueChange,
    children
  } = props
  const [formInstance] = useForm(form)

  // 将回调函数注册到 `FormStore` 实例上
  const { setCallbacks, setInitialValues } = formInstance.getInternalHooks()
  setCallbacks({ onValueChange, onFinish })

  // 使用 ref 确保只执行一次
  const mounted = useRef(false)
  // 初次渲染时注册表单初始值
  if (!mounted.current) {
    initialValues && setInitialValues(initialValues)
    mounted.current = true
  }

  // 使用 useMemo 防止重复创建
  const fieldContextValue = useMemo(() => ({ ...formInstance }), [formInstance])

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()
        formInstance.submit()
        onFinish(form.getFieldsValue())
      }}
      onReset={(e) => {
        e.preventDefault()
        formInstance.resetFields()
        onReset && onReset(e)
      }}
    >
      <FieldContext.Provider value={fieldContextValue}>{children}</FieldContext.Provider>
    </form>
  )
}

// function FormItem({ label, placeHolder }: { label: string; placeHolder: string }) {
//   return (
//     <div className="flex flex-col h-[70px] bg-white rounded-xl py-2 px-3 w-full mb-3">
//       <div className="text-[#999] text-sm">{label}</div>
//       <input
//         type="text"
//         placeholder={placeHolder}
//         className="h-full text-[#595959] text-sm border-none border-b-main-color outline-none border-b-2"
//       />
//     </div>
//   )
// }
Form.Item = Item
export default Form
