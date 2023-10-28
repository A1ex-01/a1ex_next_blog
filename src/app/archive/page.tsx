import { getArchiveList } from "@/api/archive"
import TimeLine from "@/components/TimeLine"
import { refixByMonth } from "@/utils/refixByMouth"

async function getData(id: string) {
    const limit = 8
    const offset = (+id - 1) * limit
    const { rows } = await getArchiveList({ offset, limit })
    return {
        archiveList: refixByMonth(rows),
        offset,
        limit
    }
}
export default async function Archive() {
    const { archiveList } = await getData(1)
    return <article>
        {archiveList.map(archive => <TimeLine archive={archive} />)}
    </article>
}