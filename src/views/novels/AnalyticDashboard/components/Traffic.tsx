import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Table from '@/components/ui/Table'
import Progress from '@/components/ui/Progress'
import classNames from '@/utils/classNames'
import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    createColumnHelper,
} from '@tanstack/react-table'
import { CSVLink } from 'react-csv'
import type { TrafficData } from '../types'

type TrafficTableProps = {
    data: TrafficData[]
}

const { Tr, Td, TBody, THead, Th } = Table

const columnHelper = createColumnHelper<TrafficData>()

const columns = [
    columnHelper.accessor('source', {
        header: 'Source',
        cell: (props) => {
            const { source } = props.row.original
            return <div className="heading-text font-semibold">{source}</div>
        },
    }),
    columnHelper.accessor('visits', {
        header: 'Visits',
    }),
    columnHelper.accessor('uniqueVisitors', {
        header: 'Unique Visitors',
    }),
    columnHelper.accessor('bounceRate', {
        header: 'Bounce Rate',
    }),
    columnHelper.accessor('avgSessionDuration', {
        header: 'Avg. Session Duration',
    }),
    columnHelper.accessor('progress', {
        header: 'Progress to Goal (%)',
        size: 150,
        cell: (props) => {
            const { progress } = props.row.original
            return (
                <Progress
                    percent={progress}
                    size="sm"
                    customColorClass={classNames(
                        'bg-error',
                        progress > 40 && 'bg-warning',
                        progress > 70 && 'bg-success',
                    )}
                />
            )
        },
    }),
]

const Traffic = ({ data = [] }: TrafficTableProps) => {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <Card>
            <div className="flex items-center justify-between mb-6">
                <h4>Traffic data</h4>
                <CSVLink
                    filename="traffic-data.csv"
                    data={data.map((traffic) => {
                        return {
                            Source: traffic.source,
                            Visits: traffic.visits,
                            'Unique visitors': traffic.uniqueVisitors,
                            'Bounce rate': traffic.bounceRate,
                            'Avg. session duration': traffic.avgSessionDuration,
                            'Progress to goal': `${traffic.progress}%`,
                        }
                    })}
                >
                    <Button size="sm">Export data</Button>
                </CSVLink>
            </div>
            <Table>
                <THead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <Tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <Th
                                        key={header.id}
                                        colSpan={header.colSpan}
                                        style={{
                                            width: `${header.getSize()}px`,
                                        }}
                                    >
                                        {flexRender(
                                            header.column.columnDef.header,
                                            header.getContext(),
                                        )}
                                    </Th>
                                )
                            })}
                        </Tr>
                    ))}
                </THead>
                <TBody>
                    {table.getRowModel().rows.map((row) => {
                        return (
                            <Tr key={row.id}>
                                {row.getVisibleCells().map((cell) => {
                                    return (
                                        <Td key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext(),
                                            )}
                                        </Td>
                                    )
                                })}
                            </Tr>
                        )
                    })}
                </TBody>
            </Table>
        </Card>
    )
}

export default Traffic
