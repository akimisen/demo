import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import classNames from '@/utils/classNames'
import { Link } from 'react-router-dom'
import { TbPencil, TbRocket, TbBrain } from 'react-icons/tb'
import type { ReactNode } from 'react'
import type { WritingStats } from '../types'

type StatisticCardProps = {
    title: string
    icon: ReactNode
    className: string
    value: number | string
    unit?: string
}

type WritingStatsProps = {
    data: WritingStats
}

const StatisticCard = ({
    title,
    className,
    icon,
    value,
    unit,
}: StatisticCardProps) => {
    return (
        <div
            className={classNames(
                'rounded-2xl p-4 flex flex-col justify-center',
                className,
            )}
        >
            <div className="flex justify-between items-center relative">
                <div>
                    <div className="mb-4 text-gray-900 font-bold">{title}</div>
                    <h1 className="mb-1 text-gray-900">
                        {value}
                        {unit && <span className="text-sm ml-1">{unit}</span>}
                    </h1>
                </div>
                <div
                    className={
                        'flex items-center justify-center min-h-12 min-w-12 max-h-12 max-w-12 bg-gray-900 text-white rounded-full text-2xl'
                    }
                >
                    {icon}
                </div>
            </div>
        </div>
    )
}

const WritingStats = ({ data }: WritingStatsProps) => {
    return (
        <Card>
            <div className="flex items-center justify-between">
                <h4>今日成就</h4>
                <Link to="/novels/list">
                    <Button asElement="div" size="sm">
                        开始码字
                    </Button>
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 rounded-2xl mt-4">
                <StatisticCard
                    title="字数"
                    className="bg-sky-100 dark:bg-opacity-75"
                    value={data.todayWordCount}
                    unit="字"
                    icon={<TbPencil />}
                />
                <StatisticCard
                    title="速度"
                    className="bg-emerald-100 dark:bg-opacity-75"
                    value={data.writingSpeed}
                    unit="字/小时"
                    icon={<TbRocket />}
                />
                <StatisticCard
                    title="待定"
                    className="bg-purple-100 dark:bg-opacity-75"
                    value={data.toBeDecided}
                    icon={<TbBrain />}
                />
            </div>
        </Card>
    )
}

export default WritingStats