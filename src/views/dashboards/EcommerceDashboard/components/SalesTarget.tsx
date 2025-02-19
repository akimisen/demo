import { useState } from 'react'
import Card from '@/components/ui/Card'
import Progress from '@/components/ui/Progress'
import Select from '@/components/ui/Select'
import AbbreviateNumber from '@/components/shared/AbbreviateNumber'
import { options } from '../constants'
import type { SalesTargetData, Period } from '../types'

type SalesTargetProps = {
    data: SalesTargetData
}

const periodLabel: Record<Period, string> = {
    thisMonth: 'month',
    thisWeek: 'week',
    thisYear: 'year',
}

const SalesTarget = ({ data }: SalesTargetProps) => {
    const [selectedPeriod, setSelectedPeriod] = useState<Period>('thisMonth')

    return (
        <Card>
            <div className="flex items-center justify-between mb-4">
                <h4>Sales target</h4>
                <Select
                    className="w-[120px]"
                    size="sm"
                    placeholder="Select period"
                    value={options.filter(
                        (option) => option.value === selectedPeriod,
                    )}
                    options={options}
                    isSearchable={false}
                    onChange={(option) => {
                        if (option?.value) {
                            setSelectedPeriod(option?.value)
                        }
                    }}
                />
            </div>
            <div className="flex items-center justify-between mt-8">
                <div className="flex flex-col">
                    <h2>
                        <AbbreviateNumber
                            value={data[selectedPeriod].achieved}
                        />
                        <span className="opacity-60 text-base font-bold">
                            {' / '}
                            <AbbreviateNumber
                                value={data[selectedPeriod].target}
                            />{' '}
                            Units
                        </span>
                    </h2>
                    <div className="mt-1">
                        Made this {periodLabel[selectedPeriod]} year
                    </div>
                </div>
                <div>
                    <Progress
                        percent={data[selectedPeriod].percentage}
                        width={80}
                        variant="circle"
                        strokeWidth={8}
                    />
                </div>
            </div>
        </Card>
    )
}

export default SalesTarget
