import Card from '@/components/ui/Card'
import Chart from '@/components/shared/Chart'
import { COLORS } from '@/constants/chart.constant'

type WritingRadarData = {
    categories: string[]
    series: number[]
}

type WritingRadarProps = {
    data: WritingRadarData
}

const WritingRadar = ({ data }: WritingRadarProps) => {
    return (
        <Card>
            <div className="flex items-center justify-between">
                <h4>写作能力分析</h4>
            </div>
            <div className="mt-6">
                <Chart
                    type="radar"
                    customOptions={{
                        xaxis: {
                            categories: data.categories,
                        },
                        yaxis: {
                            show: false,
                        },
                        tooltip: {
                            custom: function ({ dataPointIndex }) {
                                return `
                                    <div class="py-2 px-4 rounded-xl">
                                        <div class="flex items-center gap-2">
                                            <div className="h-[10px] w-[10px] rounded-full" style="background-color: ${COLORS[0]}"></div>
                                            <div className="flex gap-2">${data.categories[dataPointIndex]}: <span class="font-bold">${data.series[dataPointIndex]}</span></div>
                                        </div>
                                    </div>
                                `
                            },
                        },
                    }}
                    series={[
                        {
                            name: '写作能力评分',
                            data: data.series,
                        },
                    ]}
                    height={250}
                />
                <div className="flex flex-col gap-4 mt-4">
                    {data.categories.map((category, index) => (
                        <div
                            key={category}
                            className="flex items-center gap-4"
                        >
                            <div className="flex items-center gap-2">
                                <div className="rounded-full h-8 w-8 border-2 border-gray-200 dark:border-gray-600 font-bold heading-text flex items-center justify-center">
                                    {index + 1}
                                </div>
                                <div className="heading-text">{category}</div>
                            </div>
                            <div className="border-dashed border-[1.5px] border-gray-300 dark:border-gray-500 flex-1" />
                            <div>
                                <span className={`rounded-full px-2 py-1 text-white ${
                                    data.series[index] > 75 ? 'bg-success' :
                                    data.series[index] <= 30 ? 'bg-error' :
                                    'bg-warning'
                                }`}>
                                    {data.series[index]}%
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Card>
    )
}

export default WritingRadar 