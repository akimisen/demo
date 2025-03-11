import { create } from 'zustand'
import type { Chapter, Filter } from '../types'
import type { TableQueries } from '@/@types/common'

// 表格基础查询参数
export const initialTableData: TableQueries = {
    pageIndex: 1,
    pageSize: 10,
    query: '',
    sort: {
        order: '',
        key: '',
    },
}

// 初始筛选条件
export const initialFilterData: Filter = {
    status: 'draft',
    tags: []
}

// 状态类型定义
export type ChapterListState = {
    tableData: TableQueries
    filterData: Filter
    chapters: Chapter[]
    editingId: string | null        // 当前正在编辑的行ID
    editingData: Partial<Chapter>   // 编辑中的数据
    rowSelection: Record<string, boolean>  // 选中的行
}

// 操作类型定义
type ChapterListAction = {
    setTableData: (payload: TableQueries) => void
    setFilterData: (payload: Filter) => void
    setChapters: (payload: Chapter[]) => void
    setEditingId: (id: string | null) => void
    setEditingData: (data: Partial<Chapter>) => void
    setRowSelection: (selection: Record<string, boolean>) => void
    reorderChapters: (chapters: Chapter[]) => void
}

// 初始状态
const initialState: ChapterListState = {
    tableData: initialTableData,
    filterData: initialFilterData,
    chapters: [],
    editingId: null,
    editingData: {},
    rowSelection: {}
}

// 创建 store
export const useChapterListStore = create<ChapterListState & ChapterListAction>(
    (set) => ({
        ...initialState,
        setTableData: (payload) => set(() => ({ tableData: payload })),
        setFilterData: (payload) => set(() => ({ filterData: payload })),
        setChapters: (payload) => set(() => ({ chapters: payload })),
        setEditingId: (id) => set(() => ({ editingId: id })),
        setEditingData: (data) => set(() => ({ editingData: data })),
        setRowSelection: (selection) => set(() => ({ rowSelection: selection })),
        reorderChapters: (chapters) => set(() => ({ chapters }))
    }),
)