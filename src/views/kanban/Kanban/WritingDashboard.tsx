import Loading from '@/components/shared/Loading'
import { mock } from '@/mock/MockAdapter'
import useSWR from 'swr'
import { apiGetWritingDashboard } from '@/services/WritingService'

// 从components中导入这些组件
import WritingStats from './components/WritingStats'
import WritingCalendar from './components/WritingCalendar'
import NovelsList from './components/NovelsList'
import WritingRadar from './components/WritingRadar'

// 临时使用这个类型,后续可以根据实际需求修改
type WritingDashboardResponse = {
    stats: {
        todayWordCount: number
        writingSpeed: number
        toBeDecided: number
    }
    radarData: {
        categories: string[]
        series: number[]
    }
    schedules: Array<{
        id: string
        title: string
        type: 'writing' | 'planning' | 'review' | 'goal'
        time?: string
        description?: string
    }>
    novels: Array<{
        id: string
        title: string
        wordCount: number
        status: 'ongoing' | 'completed' | 'planned'
        lastUpdated: string
        progress: number
        cover?: string
    }>
}

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

    if (isLoading) {
        return <Loading loading={true} />
    }

    return (
        <Loading loading={isLoading}>
            {data && (
                <div className="flex flex-col gap-4">
                {/* 第一行: WritingStats(3) + WritingRadar(1) */}
                    <div className="grid grid-cols-1 xl:grid-cols-4 gap-4">
                        <div className="xl:col-span-3">
                            <WritingStats data={data?.stats} />
                        </div>
                        <div className="xl:col-span-1">
                            <WritingRadar 
                                data={{
                                    categories: ['情节', '人物', '文笔', '设定', '节奏'],
                                    series: data?.radarData?.series || [85, 70, 90, 80, 75]
                                }}
                            />
                        </div>
                    </div>
        
                    {/* 第二行: WritingCalendar(2) + NovelsList(2) */}
                    <div className="grid grid-cols-1 xl:grid-cols-4 gap-4">
                        <div className="xl:col-span-2">
                            <WritingCalendar schedules={data?.schedules} />
                        </div>
                        <div className="xl:col-span-2">
                            <NovelsList data={data?.novels} />
                        </div>
                    </div>
                </div>
            )}
        </Loading>
    )
}

export default Kanban