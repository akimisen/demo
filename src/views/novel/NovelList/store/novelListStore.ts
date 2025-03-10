import { create } from 'zustand'
import type { TableQueries } from '@/@types/common'
import type { Novels, NovelFilter } from '../types'
// import dayjs from 'dayjs'

export const initialTableData: TableQueries = {
    pageIndex: 1,
    pageSize: 10,
    query: '',
    sort: {
        order: '',
        key: '',
    },
}

export const initialFilterData = {
    // status: 'all',
}

export type NovelListState = {
    tableData: TableQueries
    filterData: NovelFilter
    novelList: Novels
}

type NovelListAction = {
    setFilterData: (payload: NovelFilter) => void
    setTableData: (payload: TableQueries) => void
}

const initialState: NovelListState = {
    tableData: initialTableData,
    filterData: initialFilterData,
    novelList: [],
}

export const useNovelListStore = create<NovelListState & NovelListAction>(
    (set) => ({
        ...initialState,
        setFilterData: (payload) => set(() => ({ filterData: payload })),
        setTableData: (payload) => set(() => ({ tableData: payload })),
    }),
)
