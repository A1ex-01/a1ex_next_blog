export default class FormStore {
  constructor() {
    this.store = {}
    this.callbacks = Object.create(null)
    this.initialValues = {}
    this.fieldEntities = []
  }
  // 通过 `useForm` 方法暴露出去的字段
  getForm = () => ({
    getFieldValue: this.getFieldValue,
    setFieldValue: this.setFieldValue,
    getFieldsValue: this.getFieldsValue,
    setFieldsValue: this.setFieldsValue,
    submit: this.submit,
    resetFields: this.resetFields,
    getInternalHooks: this.getInternalHooks
  })
  getFieldValue = (name) => {
    return this.store[name]
  }
  setFieldValue = (name, value) => {
    this.store = {
      ...this.store,
      [name]: value
    }
  }
  getFieldsValue = () => {
    return this.store
  }
  setFieldsValue = (values) => {
    this.store = {
      ...this.store,
      ...values
    }
  }
  // 封装一些内部 Hooks，挂到 `getForm` 下
  getInternalHooks = () => ({
    updateValue: this.updateValue,
    setInitialValues: this.setInitialValues,
    setCallbacks: this.setCallbacks,
    initEntityValue: this.initEntityValue,
    registerField: this.registerField
  })

  // 注册回调
  setCallbacks = (callbacks) => {
    this.callbacks = callbacks
  }
  // 注册表单初始值
  setInitialValues = (initialValues) => {
    this.store = initialValues
  }
  // 注册实例后，设置表单初始值
  initEntityValue = (entity) => {
    console.log('🚀 a1ex~ entity:', entity)
  }
  // 注册实例
  // registerField = (entity) => {}
  // getFieldEntities = () => {}
  // 通知更新
  // notifyObservers = (prevStore, nameList, info) => {}

  updateValue = (name, newValue) => {
    this.store[name] = newValue
  }
  // form actions，提交、校验、重置等方法
  submit = () => {
    console.log('🚀 ~ FormStore ~ submit:')
  }

  // 重置所有字段
  resetFields = (nameList) => {
    console.log('🚀 ~ FormStore ~ nameList:', nameList)
  }
}
