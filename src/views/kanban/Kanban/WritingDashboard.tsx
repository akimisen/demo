import Loading from '@/components/shared/Loading'
import useSWR from 'swr'
import { apiGetWritingDashboard } from '@/services/WritingService'
import { WritingDashboardResponse } from './types'

// 从components中导入这些组件
import WritingStats from './components/WritingStats'
import WritingCalendar from './components/WritingCalendar'
// import NovelsList from './components/NovelsList'
import NovelBoard from './components/NovelBoard'
import WritingRadar from './components/WritingRadar'

const WritingDashboard = () => {
    const { data, isLoading } = useSWR(
        ['/api/kanban'],
        () => apiGetWritingDashboard<WritingDashboardResponse>(),
        {
            revalidateOnFocus: false,
            revalidateIfStale: false,
            revalidateOnReconnect: false,
        },
    )

    return (
        <Loading loading={isLoading}>
            {data && (
                <div>
                    <div className="flex flex-col gap-4 max-w-full overflow-x-hidden">
                        <div className="flex flex-col xl:flex-row gap-4">
                            <div className="flex flex-col gap-4 flex-1 xl:col-span-3">
                                <WritingStats data={data.stats} />
                                <NovelBoard data={data.novels} />
                            </div>
                            <div className="flex flex-col gap-4 2xl:min-w-[360px]">
                                <WritingCalendar schedules={data.schedules} />
                                <WritingRadar data={data.radarData} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Loading>
    )
}

export default WritingDashboard