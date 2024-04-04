import { getArchiveList } from '@/api/archive'
import TimeLine from '@/components/TimeLine'
import { refixByMonth } from '@/utils/refixByMouth'
import Pagination from '@/components/Pagination'
import { redirect } from 'next/navigation'
import { cache } from 'react'
import { Metadata } from 'next'

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
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const { id } = params
  const { count, limit } = await getData(id)
  return {
    title: `归档 ${id}/${Math.ceil(count / limit)}页 - a1ex\`s blog`
  }
}
export default async function Archive({
  params
}: {
  params: {
    id: string
  }
}) {
  const { id } = params
  if (+id === 1) return redirect('/archive')
  const { archiveList, count, limit } = await getData(id)
  return (
    <>
      <article>
        {archiveList.map((archive) => (
          <TimeLine archive={archive} key={archive.title} />
        ))}
      </article>
      <div className="flex justify-center w-full my-2">
        <Pagination pathRoot={'archive'} page={+id} count={count} pageSize={limit} />
      </div>
    </>
  )
}
