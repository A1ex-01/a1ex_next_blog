import { getArchiveList } from '@/api/archive'
import Pagination from '@/components/Pagination'
import TimeLine from '@/components/TimeLine'
import { refixByMonth } from '@/utils/refixByMouth'
import { Metadata } from 'next'
import { cache } from 'react'

const getData = cache(async function getData(id: string) {
  const limit = 8
  const offset = (+id - 1) * limit
  const { rows, count } = await getArchiveList({
    offset,
    limit
  })
  return {
    archiveList: refixByMonth(rows),
    offset,
    limit,
    count
  }
})
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `归档 - a1ex\`s blog`
  }
}
// async function sleep(duration: number) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(1)
//     }, duration)
//   })
// }
export default async function Archive() {
  const { archiveList, count, limit } = await getData('1')
  return (
    <>
      <article>
        {archiveList.map((archive) => (
          <TimeLine archive={archive} key={archive.title} />
        ))}
      </article>
      <div className="flex justify-center w-full my-2">
        <Pagination pathRoot={'archive'} page={1} count={count} pageSize={limit} />
      </div>
    </>
  )
}
