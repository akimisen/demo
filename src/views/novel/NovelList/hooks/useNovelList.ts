import { apiGetNovelList } from '@/services/NovelService'
import useSWR from 'swr'
import { useNovelListStore } from '../store/novelListStore'
import type { GetNovelsResponse } from '../types'
import type { TableQueries } from '@/@types/common'

export default function useNovelList() {
    const { tableData, filterData, setTableData, setFilterData } =
        useNovelListStore((state) => state)

    const { data, error, isLoading, mutate } = useSWR(
        ['/api/novels', { ...tableData, ...filterData }],
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ([_, params]) =>
            apiGetNovelList<GetNovelsResponse, TableQueries>(params),
        {
            revalidateOnFocus: false,
        },
    )

    const novelList = data?.list || []
    const novelListTotal = data?.total || 0

    return {
        novelList,
        novelListTotal,
        error,
        isLoading,
        tableData,
        filterData,
        mutate,
        setTableData,
        setFilterData,
    }
} 