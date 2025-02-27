import { useState } from 'react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import dayjs from 'dayjs'
import { 
    TbBook, 
    TbPencil, 
    TbTarget, 
    TbCalendarTime,
    TbPlus
} from 'react-icons/tb'
import type { WritingSchedule } from '../types'

type WritingCalendarProps = {
    schedules?: WritingSchedule[]
}

const WritingCalendar = ({ schedules = [] }: WritingCalendarProps) => {
    const [selectedDate, setSelectedDate] = useState<Date>(new Date())

    // 渲染月历
    const renderCalendar = () => {
        const currentMonth = dayjs(selectedDate)
        const daysInMonth = currentMonth.daysInMonth()
        const firstDayOfMonth = currentMonth.startOf('month').day() || 7 // 调整周日为7
        
        const days = []
        const weekDays = ['一', '二', '三', '四', '五', '六', '日']

        // 渲染星期头部
        const weekHeader = weekDays.map(day => (
            <div key={day} className="text-xs text-gray-500 text-center py-2">
                {day}
            </div>
        ))

        // 填充日期前的空白
        for (let i = 1; i < firstDayOfMonth; i++) {
            days.push(<div key={`empty-${i}`} className="p-2" />)
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const date = currentMonth.date(day)
            const isToday = dayjs().format('YYYY-MM-DD') === date.format('YYYY-MM-DD')
            const isSelected = date.format('YYYY-MM-DD') === dayjs(selectedDate).format('YYYY-MM-DD')
            
            // 检查该日期是否有日程
            const hasSchedule = schedules.some(schedule => {
                const scheduleDate = schedule.date ? dayjs(schedule.date).format('YYYY-MM-DD') : null
                return scheduleDate === date.format('YYYY-MM-DD')
            })
            
            days.push(
                <div
                    key={day}
                    className={`p-2 text-center cursor-pointer rounded-full w-8 h-8 mx-auto flex items-center justify-center text-xs
                        ${isToday ? 'bg-blue-500 text-white' : ''}
                        ${isSelected && !isToday ? 'bg-gray-200 dark:bg-gray-600' : ''}
                        ${hasSchedule && !isToday && !isSelected ? 'border-2 border-blue-400' : ''}
                        hover:bg-gray-100 dark:hover:bg-gray-700`}
                    onClick={() => setSelectedDate(date.toDate())}
                >
                    {day}
                </div>
            )
        }

        return (
            <div>
                <div className="flex justify-between items-center mb-4">
                    <button 
                        className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                        onClick={() => setSelectedDate(dayjs(selectedDate).subtract(1, 'month').toDate())}
                    >
                        &lt;
                    </button>
                    <span className="text-sm font-medium">{currentMonth.format('YYYY年 M月')}</span>
                    <button 
                        className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                        onClick={() => setSelectedDate(dayjs(selectedDate).add(1, 'month').toDate())}
                    >
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
        const selectedDateStr = dayjs(selectedDate).format('YYYY-MM-DD')
        const todaySchedules = schedules.filter(schedule => {
            const scheduleDate = schedule.date ? dayjs(schedule.date).format('YYYY-MM-DD') : null
            return scheduleDate === selectedDateStr
        })
        
        const scheduleIcons = {
            writing: <TbPencil className="text-blue-500" />,
            planning: <TbCalendarTime className="text-purple-500" />,
            review: <TbBook className="text-green-500" />,
            goal: <TbTarget className="text-orange-500" />
        }

        return (
            <div className="mt-4">
                <div className="flex items-center justify-between mb-2">
                    <h5 className="text-sm font-medium">今日计划</h5>
                    <Button size="xs" icon={<TbPlus />}>
                        新增
                    </Button>
                </div>
                <div className="space-y-2">
                    {todaySchedules.length > 0 ? (
                        todaySchedules.map(schedule => (
                            <div 
                                key={schedule.id}
                                className="flex items-center p-2 bg-gray-50 dark:bg-gray-700/30 rounded-lg"
                            >
                                <span className="text-lg mr-2">
                                    {scheduleIcons[schedule.type]}
                                </span>
                                <div className="flex-1 min-w-0">
                                    <div className="font-medium text-sm truncate">{schedule.title}</div>
                                    {schedule.description && (
                                        <div className="text-xs text-gray-500 truncate">
                                            {schedule.description}
                                        </div>
                                    )}
                                </div>
                                {schedule.time && (
                                    <div className="text-xs text-gray-500 ml-2">
                                        {schedule.time}
                                    </div>
                                )}
                            </div>
                        ))
                    ) : (
                        <div className="text-center text-gray-500 text-sm py-2">
                            暂无计划
                        </div>
                    )}
                </div>
                <div className="mt-2 text-right">
                    <Button size="xs" variant="plain">
                        查看全部
                    </Button>
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