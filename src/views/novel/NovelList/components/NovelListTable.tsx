import { useMemo } from 'react'
import Tag from '@/components/ui/Tag'
import Tooltip from '@/components/ui/Tooltip'
import DataTable from '@/components/shared/DataTable'
import useNovelList from '../hooks/useNovelList'
import cloneDeep from 'lodash/cloneDeep'
import { useNavigate } from 'react-router-dom'
import { TbTrash, TbEye, TbEdit } from 'react-icons/tb'
import dayjs from 'dayjs'
import type { OnSortParam, ColumnDef } from '@/components/shared/DataTable'
import type { Novel } from '../types'
import type { TableQueries } from '@/@types/common'

// 状态标签配置
const statusConfig = {
    'drafting': { label: '草稿中', bgClass: 'bg-gray-100', textClass: 'text-gray-500' },
    'ongoing': { label: '连载中', bgClass: 'bg-blue-100', textClass: 'text-blue-500' },
    'completed': { label: '已完结', bgClass: 'bg-green-100', textClass: 'text-green-500' },
    'published': { label: '已发布', bgClass: 'bg-purple-100', textClass: 'text-purple-500' },
    'planned': { label: '计划中', bgClass: 'bg-amber-100', textClass: 'text-amber-500' }
}

// 类型标签颜色配置
const genreColorSchemes = {
    '科幻': { bgClass: 'bg-indigo-100', textClass: 'text-indigo-600' },
    '奇幻': { bgClass: 'bg-purple-100', textClass: 'text-purple-600' },
    '武侠': { bgClass: 'bg-amber-100', textClass: 'text-amber-600' },
    '仙侠': { bgClass: 'bg-cyan-100', textClass: 'text-cyan-600' },
    '玄幻': { bgClass: 'bg-blue-100', textClass: 'text-blue-600' },
    '历史': { bgClass: 'bg-yellow-100', textClass: 'text-yellow-600' },
    '军事': { bgClass: 'bg-red-100', textClass: 'text-red-600' },
    '都市': { bgClass: 'bg-pink-100', textClass: 'text-pink-600' },
    '悬疑': { bgClass: 'bg-orange-100', textClass: 'text-orange-600' },
    '恐怖': { bgClass: 'bg-rose-100', textClass: 'text-rose-600' },
    '游戏': { bgClass: 'bg-green-100', textClass: 'text-green-600' },
    '体育': { bgClass: 'bg-teal-100', textClass: 'text-teal-600' },
    '轻小说': { bgClass: 'bg-violet-100', textClass: 'text-violet-600' },
    '西幻': { bgClass: 'bg-purple-100', textClass: 'text-purple-600' }
}

const NovelColumn = ({ row }: { row: Novel }) => {
    const navigate = useNavigate()

    const onView = () => {
        navigate(`/novel/outline/${row.id}`)
    }

    return (
        <span
            className="cursor-pointer font-bold heading-text hover:text-primary"
            onClick={onView}
        >
            #{row.id}
        </span>
    )
}

const ActionColumn = ({ row }: { row: Novel }) => {
    const navigate = useNavigate()

    const onDelete = () => {
    }

    const onView = () => {
        navigate(`/novel/outline/${row.id}`)
    }

    const onEdit = () => {
    }

    return (
        <div className="flex justify-end text-lg gap-1">
            <Tooltip wrapperClass="flex" title="查看">
                <span className={`cursor-pointer p-2`} onClick={onView}>
                    <TbEye />
                </span>
            </Tooltip>
            <Tooltip wrapperClass="flex" title="编辑">
                <span className={`cursor-pointer p-2`} onClick={onEdit}>
                    <TbEdit />
                </span>
            </Tooltip>
            <Tooltip wrapperClass="flex" title="删除">
                <span
                    className="cursor-pointer p-2 hover:text-red-500"
                    onClick={onDelete}
                >
                    <TbTrash />
                </span>
            </Tooltip>
        </div>
    )
}

const NovelListTable = () => {
    const { novelList, novelListTotal, tableData, isLoading, setTableData } =
        useNovelList()

    const columns: ColumnDef<Novel>[] = useMemo(
        () => [
            {
                header: 'ID',
                accessorKey: 'id',
                cell: (props) => <NovelColumn row={props.row.original} />,
            },
            {
                header: '标题',
                accessorKey: 'title',
                cell: (props) => {
                    const row = props.row.original
                    return <span className="font-semibold">{row.title}</span>
                },
            },
            {
                header: '作者',
                accessorKey: 'author',
                cell: (props) => {
                    const row = props.row.original
                    return <span>{row.author}</span>
                },
            },
            {
                header: '类型',
                accessorKey: 'genre',
                cell: (props) => {
                    const genre = props.row.original.genre
                    if (!genre) return <span>-</span>
                    const config = genreColorSchemes[genre] || { 
                        bgClass: 'bg-gray-100', 
                        textClass: 'text-gray-600' 
                    }
                    
                    return (
                        <Tag className={config.bgClass}>
                            <span className={`capitalize font-semibold ${config.textClass}`}>
                                {genre}
                            </span>
                        </Tag>
                    )
                },
            },
            {
                header: '状态',
                accessorKey: 'status',
                cell: (props) => {
                    const { status } = props.row.original
                    const config = statusConfig[status] || { label: '未知', bgClass: 'bg-gray-100', textClass: 'text-gray-500' }
                    return (
                        <Tag className={config.bgClass}>
                            <span className={`capitalize font-semibold ${config.textClass}`}>
                                {config.label}
                            </span>
                        </Tag>
                    )
                },
            },
            {
                header: '字数',
                accessorKey: 'wordCount',
                cell: (props) => {
                    const wordCount = props.row.original.wordCount || 0
                    return (
                        <span>{wordCount.toLocaleString()}</span>
                    )
                },
            },
            {
                header: '章节数',
                accessorKey: 'chapterCount',
                cell: (props) => {
                    const chapterCount = props.row.original.chapterCount || props.row.original.chapter_count || 0
                    return <span>{chapterCount}</span>
                },
            },
            {
                header: '最后更新',
                accessorKey: 'updatedAt',
                cell: (props) => {
                    const date = props.row.original.updatedAt
                    return date ? <span>{dayjs(date).format('YYYY-MM-DD')}</span> : <span>-</span>
                },
            },
            // {
            //     header: '进度',
            //     accessorKey: 'progress',
            //     cell: (props) => {
            //         const { progress } = props.row.original
            //         return progress ? <span>{progress}%</span> : <span>-</span>
            //     },
            // },
            {
                header: '',
                id: 'action',
                cell: (props) => <ActionColumn row={props.row.original} />,
            },
        ],
        [],
    )

    const handleSetTableData = (data: TableQueries) => {
        setTableData(data)
    }

    const handlePaginationChange = (page: number) => {
        const newTableData = cloneDeep(tableData)
        newTableData.pageIndex = page
        handleSetTableData(newTableData)
    }

    const handleSelectChange = (value: number) => {
        const newTableData = cloneDeep(tableData)
        newTableData.pageSize = Number(value)
        newTableData.pageIndex = 1
        handleSetTableData(newTableData)
    }

    const handleSort = (sort: OnSortParam) => {
        const newTableData = cloneDeep(tableData)
        newTableData.sort = sort
        handleSetTableData(newTableData)
    }

    // const onRowClick = (row: Novel) => {
    //     navigate(`/novel/outline/${row.id}`)
    // }

    return (
        <DataTable
            columns={columns}
            data={novelList}
            noData={!isLoading && novelList.length === 0}
            skeletonAvatarColumns={[0]}
            skeletonAvatarProps={{ width: 28, height: 28 }}
            loading={isLoading}
            pagingData={{
                total: novelListTotal,
                pageIndex: tableData.pageIndex as number,
                pageSize: tableData.pageSize as number,
            }}
            onPaginationChange={handlePaginationChange}
            onSelectChange={handleSelectChange}
            onSort={handleSort}
        />
    )
}

export default NovelListTable