import { IFriend, IFriendType } from '@/api/types'
import Link from 'next/link'
import { getFriendList, getFriendType } from '../../api/friend'
import { Metadata } from 'next'
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `友链 - a1ex\`s blog`
  }
}
async function useGetData(): Promise<
  (IFriendType & {
    children: IFriend[]
  })[]
> {
  const typeList = await getFriendType()
  const friendList = await getFriendList()
  return typeList.rows.map((item) => {
    const children = friendList.rows.filter((i) => i.type === item.id)
    return {
      ...item,
      children
    }
  })
}
export default async function Friend() {
  const list = await useGetData()
  return list.map((item) => (
    <div className="w-full" key={item.id}>
      <div className="w-full tips text-2xl pl-3 border-l-2 border-main-color border-solid bg-main-color opacity-50 py-2 text-white">
        {item.name}
      </div>
      <div className="w-full flex flex-wrap">
        {item.children.map((i) => (
          <Link
            key={i.id}
            href={i.link}
            className="w-[30vh] flex flex-col justify-between rounded-lg border-[#ccc] border-[1px] border-l-3 border-l-main-color border-solid p-3 mt-4 mr-[3vw] hover:translate-y-[-8px] transition-all hover:shadow-[#999] hover:shadow-sm"
          >
            <span>{i.name}</span>
            <hr className="my-1" />
            <span className="text-sm text-[#ccc]">{i.desc || '这货什么都没留下'}</span>
          </Link>
        ))}
      </div>
    </div>
  ))
}
