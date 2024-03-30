import dayjs from 'dayjs'
export interface ISortByMonth<
  T extends {
    createdAt: string
  }
> {
  title: string
  list: T[]
}
export const refixByMonth = <
  T extends {
    createdAt: string
  }
>(
  data: T[]
) => {
  // 因为时push操作，所以每次翻页都重置该数组
  const result: ISortByMonth<T>[] = []
  // 按月分类
  data?.forEach((item) => {
    const title = dayjs(item.createdAt).format('MMM YYYY')
    const status = result.filter((item) => item.title === title)
    if (!status.length) {
      result.push({
        title,
        list: [item]
      })
    } else {
      const res = result.find((item) => item.title === title)!
      res?.list.push(item)
    }
  })
  return result
}
