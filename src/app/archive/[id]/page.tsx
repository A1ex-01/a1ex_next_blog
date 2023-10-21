import { getArchiveList } from "@/app/api/archive"
import TimeLine from "@/components/TimeLine"

async function getData(id: string) {
    const limit = 8
    const offset = (+id - 1) * limit
    const res = await getArchiveList({ offset, limit })
    return {
        archiveList: res.data.rows,
        offset,
        limit
    }
}
export default async function Archive({ params }: { params: { id: string } }) {
    const { id } = params
    const { archiveList, offset, limit } = await getData(id)
    return <article>
        {archiveList.map(archive => <TimeLine archive={archive} />)}
    </article>
}