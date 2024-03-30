import { getArchiveList } from '@/api/archive'
import TimeLine from '@/components/TimeLine'
import { refixByMonth } from '@/utils/refixByMouth'
import Pagination from '@/components/Pagination'

async function getData(id: string) {
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
}
export default async function Archive({
  params
}: {
  params: {
    id: string
  }
}) {
  const { id } = params
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
