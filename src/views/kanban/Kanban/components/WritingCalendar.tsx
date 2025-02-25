import { useState } from 'react'
import Card from '@/components/ui/Card'
import dayjs from 'dayjs'
import { 
    TbBook, 
    TbPencil, 
    TbTarget, 
    TbCalendarTime 
} from 'react-icons/tb'

type WritingSchedule = {
    id: string
    title: string
    type: 'writing' | 'planning' | 'review' | 'goal'
    time?: string
    description?: string
}

type WritingCalendarProps = {
    schedules?: WritingSchedule[]
}

const WritingCalendar = ({ schedules = [] }: WritingCalendarProps) => {
    const [selectedDate, setSelectedDate] = useState<Date>(new Date())

    // 渲染月历
    const renderCalendar = () => {
        const currentMonth = dayjs(selectedDate)
        const daysInMonth = currentMonth.daysInMonth()
        const firstDayOfMonth = currentMonth.startOf('month').day()
        
        const days = []
        const weekDays = ['一', '二', '三', '四', '五', '六', '日']

        // 渲染星期头部
        const weekHeader = weekDays.map(day => (
            <div key={day} className="text-sm text-gray-600 text-center py-2">
                {day}
            </div>
        ))

        // 填充日期
        for (let i = 0; i < firstDayOfMonth - 1; i++) {
            days.push(<div key={`empty-${i}`} className="p-2" />)
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const isToday = dayjs().date() === day && 
                           dayjs().month() === currentMonth.month()
            days.push(
                <div
                    key={day}
                    className={`p-2 text-center cursor-pointer hover:bg-gray-100 rounded
                        ${isToday ? 'bg-blue-500 text-white' : ''}`}
                    onClick={() => setSelectedDate(currentMonth.date(day).toDate())}
                >
                    {day}
                </div>
            )
        }

        return (
            <div>
                <div className="flex justify-between items-center mb-4">
                    <button onClick={() => setSelectedDate(dayjs(selectedDate).subtract(1, 'month').toDate())}>
                        &lt;
                    </button>
                    <span>{currentMonth.format('YYYY年 M月')}</span>
                    <button onClick={() => setSelectedDate(dayjs(selectedDate).add(1, 'month').toDate())}>
                        &gt;
                    </button>
                </div>
                <div className="grid grid-cols-7 gap-1">
                    {weekHeader}
                    {days}
                </div>
            </div>
        )
    }

    // 渲染日程
    const renderSchedules = () => {
        const scheduleIcons = {
            writing: <TbPencil className="text-blue-500" />,
            planning: <TbCalendarTime className="text-purple-500" />,
            review: <TbBook className="text-green-500" />,
            goal: <TbTarget className="text-orange-500" />
        }

        return (
            <div className="mt-6">
                <h5 className="mb-4">今日计划</h5>
                <div className="space-y-4">
                    {schedules.map(schedule => (
                        <div 
                            key={schedule.id}
                            className="flex items-center p-3 bg-gray-50 rounded-lg"
                        >
                            <span className="text-xl mr-3">
                                {scheduleIcons[schedule.type]}
                            </span>
                            <div className="flex-1">
                                <div className="font-medium">{schedule.title}</div>
                                {schedule.description && (
                                    <div className="text-sm text-gray-500">
                                        {schedule.description}
                                    </div>
                                )}
                            </div>
                            {schedule.time && (
                                <div className="text-sm text-gray-500">
                                    {schedule.time}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    return (
        <Card>
            {renderCalendar()}
            {renderSchedules()}
        </Card>
    )
}

export default WritingCalendar 