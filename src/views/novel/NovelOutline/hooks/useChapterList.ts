import { apiGetChapterList, apiUpdateChapter, apiDeleteChapter } from '@/services/NovelService'
import useSWR from 'swr'
import { useChapterListStore } from '../store/chapterListStore'
import type { GetChapterListResponse, Chapter } from '../types'
import type { TableQueries } from '@/@types/common'
import toast from '@/components/ui/toast'
import Notification  from '@/components/ui/Notification'
import { useParams } from 'react-router-dom'

export default function useChapterList() {
    const {
        tableData,
        filterData,
        chapters,
        editingId,
        editingData,
        rowSelection,
        setTableData,
        setFilterData,
        setChapters,
        setEditingId,
        setEditingData,
        setRowSelection,
        reorderChapters
    } = useChapterListStore()

    const { id } = useParams()

    // 修改 SWR 配置以适应真实 API
    const { data, error, isLoading, mutate } = useSWR(
        [`/api/novels/${id}/chapters`, tableData],
        ([url, params]) => apiGetChapterList({
            ...params,
            novelId: id,
            pageIndex: params.pageIndex || 1,
            pageSize: params.pageSize || 10,
            sort: params.sort || {},
            query: params.query || ''
        }),
        {
            onSuccess: (data) => {
                if (data?.list) {
                    setChapters(data.list)
                }
            },
            onError: (err) => {
                console.error('Failed to fetch chapters:', err)
            },
            // 可以根据需要调整以下配置
            revalidateOnFocus: false,
            revalidateIfStale: true,
            shouldRetryOnError: true
        }
    )

    const chaptersTotal = data?.total || 0

    // 更新章节
    const updateChapter = async (chapterId: string, chapterData: Partial<Chapter>) => {
        if (!id) return

        try {
            await apiUpdateChapter(id, chapterId, chapterData)
            await mutate() // 重新获取数据以更新列表
        } catch (error) {
            console.error('更新章节失败:', error)
            throw error // 让调用者处理错误
        }
    }

    // 删除章节
    const deleteChapter = async (chapterId: string) => {
        if (!id) return
        
        try {
            await apiDeleteChapter(id, chapterId)
            await mutate() // 重新获取数据以更新列表
        } catch (error) {
            console.error('删除章节失败:', error)
            throw error // 让调用者处理错误
        }
    }

    // 保存章节顺序
    const saveChaptersOrder = async (newChapters: Chapter[]) => {
        if (!id) return
        
        try {
            // 假设你的 API 有一个更新章节顺序的端点
            await apiUpdateChaptersOrder(id, newChapters)
            reorderChapters(newChapters)
            await mutate() // 重新获取数据以确保顺序更新
        } catch (error) {
            console.error('更新章节顺序失败:', error)
            throw error
        }
    }

    return {
        chapters,
        chaptersTotal,
        tableData,
        filterData,
        editingId,
        editingData,
        rowSelection,
        error,
        isLoading,
        mutate,
        setTableData,
        setFilterData,
        setEditingId,
        setEditingData,
        setRowSelection,
        updateChapter,
        deleteChapter,
        saveChaptersOrder
    }
}