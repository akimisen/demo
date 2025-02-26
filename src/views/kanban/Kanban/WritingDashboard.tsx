import Loading from '@/components/shared/Loading'
import useSWR from 'swr'
import { apiGetWritingDashboard } from '@/services/WritingService'
import { WritingDashboardResponse } from './types'

// 从components中导入这些组件
import WritingStats from './components/WritingStats'
import WritingCalendar from './components/WritingCalendar'
// import NovelsList from './components/NovelsList'
import NovelsBoard from './components/NovelsBoard'
import WritingRadar from './components/WritingRadar'

const Kanban = () => {
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
                <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 xl:grid-cols-4 gap-4">
                        <div className="xl:col-span-3">
                            <WritingStats data={data.stats} />
                            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="md:col-span-2">
                                <NovelsBoard data={data.novels} />
                            </div>
                            <div className="md:col-span-1">
                                <WritingRadar 
                                data={data.radarData}
                            />
                            </div>
                        </div>
                        </div>
                        <div className="xl:col-span-1">
                            <WritingCalendar schedules={data.schedules} />  
                        </div>
                    </div>
                </div>
            )}
        </Loading>
    )
}

export default Kanban