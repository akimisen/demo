import { useState, useEffect, useRef } from 'react'
import Card from '@/components/ui/Card'
import Select from '@/components/ui/Select'
import Chart from '@/components/shared/Chart'
import { useThemeStore } from '@/store/themeStore'
import classNames from '@/utils/classNames'
import { COLORS } from '@/constants/chart.constant'
import { NumericFormat } from 'react-number-format'
import { TbPencil, TbRocket, TbBrain } from 'react-icons/tb'
import type { ReactNode } from 'react'
import type { WritingStats, Period } from '../types'

type StatisticCardProps = {
    title: string
    icon: ReactNode
    className: string
    value: ReactNode
    growShrink: number
    compareFrom: string
}

type WritingStatsProps = {
    data: WritingStats
}

const StatisticCard = ({
    title,
    className,
    icon,
    value,
    growShrink,
    compareFrom,
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
                    <div className="mb-4 text-gray-900 dark:text-gray-100 font-bold">{title}</div>
                    <h1 className="mb-1 text-gray-900 dark:text-gray-100">{value}</h1>
                    <div className={`text-sm ${growShrink >= 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
                        {growShrink >= 0 ? '+' : ''}{growShrink}% {compareFrom}
                    </div>
                </div>
                <div
                    className={
                        'flex items-center justify-center min-h-12 min-w-12 max-h-12 max-w-12 bg-gray-900 dark:bg-gray-700 text-white rounded-full text-2xl'
                    }
                >
                    {icon}
                </div>
            </div>
        </div>
    )
}

const WritingStats = ({ data }: WritingStatsProps) => {
    const [selectedPeriod, setSelectedPeriod] = useState<Period>('daily')

    const sideNavCollapse = useThemeStore(
        (state) => state.layout.sideNavCollapse,
    )

    const isFirstRender = useRef(true)

    useEffect(() => {
        if (!sideNavCollapse && isFirstRender.current) {
            isFirstRender.current = false
            return
        }

        if (!isFirstRender.current) {
            window.dispatchEvent(new Event('resize'))
        }
    }, [sideNavCollapse])

    const periodOptions = [
        { value: 'daily', label: '日视图' },
        { value: 'weekly', label: '周视图' },
        // { value: 'monthly', label: '月视图' }, // 暂时注释掉月度数据
    ]

    // 根据选择的类别和时间段获取混合图表系列数据
    const getMixedSeries = () => {
        const currentData = data[selectedPeriod]
        
        // 柱状图数据
        const columnSeries = {
            name: '字数',
            type: 'column',
            data: currentData.wordCount.data,
            color: COLORS[9],
        }
        
        // 折线图数据
        const lineSeries = {
            name: '速度',
            type: 'line',
            data: currentData.writingSpeed.data,
            color: COLORS[0],
        }
        
        return [columnSeries, lineSeries]
    }

    return (
        <Card>
            <div className="flex items-center justify-between">
                <h4>写作成就</h4>
                <Select
                    className="w-[120px]"
                    size="sm"
                    placeholder="选择时间段"
                    value={periodOptions.filter(
                        (option) => option.value === selectedPeriod,
                    )}
                    options={periodOptions}
                    isSearchable={false}
                    onChange={(option) => {
                        if (option?.value) {
                            setSelectedPeriod(option?.value as Period)
                        }
                    }}
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 rounded-2xl mt-4">
                <StatisticCard
                    title="字数"
                    className="bg-sky-100 dark:bg-sky-900/30"
                    value={
                        <NumericFormat
                            displayType="text"
                            value={data[selectedPeriod].wordCount.total}
                            thousandSeparator={true}
                            suffix="字"
                        />
                    }
                    growShrink={data[selectedPeriod].wordCountGrowth}
                    compareFrom={data[selectedPeriod].compareFrom}
                    icon={<TbPencil />}
                />
                <StatisticCard
                    title="速度"
                    className="bg-emerald-100 dark:bg-emerald-900/30"
                    value={
                        <NumericFormat
                            displayType="text"
                            value={data[selectedPeriod].writingSpeed.total}
                            thousandSeparator={true}
                            suffix="字/小时"
                        />
                    }
                    growShrink={data[selectedPeriod].speedGrowth}
                    compareFrom={data[selectedPeriod].compareFrom}
                    icon={<TbRocket />}
                />
                <StatisticCard
                    title="待定"
                    className="bg-purple-100 dark:bg-purple-900/30"
                    value={data[selectedPeriod].toBeDecided}
                    growShrink={data[selectedPeriod].toBeDecidedGrowth}
                    compareFrom={data[selectedPeriod].compareFrom}
                    icon={<TbBrain />}
                />
            </div>
            <div className="mt-6">
                <Chart
                    options={{
                        chart: {
                            type: 'line',
                            zoom: {
                                enabled: false,
                            },
                            toolbar: {
                                show: false,
                            },
                        },
                        legend: {
                            show: true,
                            position: 'top',
                            horizontalAlign: 'right',
                        },
                        stroke: {
                            width: [0, 2.5],
                            curve: 'smooth',
                            lineCap: 'round',
                        },
                        states: {
                            hover: {
                                filter: {
                                    type: 'none',
                                },
                            },
                        },
                        tooltip: {
                            custom: function ({ series, dataPointIndex }) {
                                const renderWordCountData = () => `
                                    <div class="flex items-center gap-2">
                                        <div class="h-[10px] w-[10px] rounded-full" style="background-color: ${COLORS[9]}"></div>
                                        <div class="flex gap-2">字数: <span class="font-bold">${series[0][dataPointIndex]}</span></div>
                                    </div>
                                `
                                const renderSpeedData = () => `
                                    <div class="flex items-center gap-2">
                                        <div class="h-[10px] w-[10px] rounded-full" style="background-color: ${COLORS[0]}"></div>
                                        <div class="flex gap-2">速度: <span class="font-bold">${series[1][dataPointIndex]}</span></div>
                                    </div>
                                `
                                
                                return `
                                    <div class="py-2 px-4 rounded-xl">
                                        <div class="flex flex-col gap-2">
                                            <div>${data[selectedPeriod].labels[dataPointIndex]}</div>
                                            ${renderWordCountData()}
                                            ${renderSpeedData()}
                                        </div>
                                    </div>
                                `
                            },
                        },
                        labels: data[selectedPeriod].labels,
                        yaxis: [
                            {
                                title: {
                                    text: '',
                                },
                            },
                            {
                                opposite: true,
                                title: {
                                    text: '',
                                },
                            },
                        ],
                        plotOptions: {
                            bar: {
                                horizontal: false,
                                columnWidth: '35px',
                                borderRadius: 4,
                                borderRadiusApplication: 'end',
                            },
                        },
                    }}
                    series={getMixedSeries()}
                    height={400}
                    type="line"
                />
            </div>
        </Card>
    )
}

export default WritingStats