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

    // 使用 SWR 获取数据
    const { data, error, isLoading, mutate } = useSWR(
        [`/api/novels/${id}/chapters`, { ...tableData, ...filterData, novelId:id}] ,
        ([_,params]) => {
            console.log('apiGetChapterList request details:', {
                novelId: id,
                fullUrl: `/api/novels/${id}/chapters`,
                params: { ...params},
                filterData,
                tableData
            });
            return apiGetChapterList<GetChapterListResponse, TableQueries & { novelId: string|undefined }>({
                ...params,
                novelId:id
            });
        },
        {
            onSuccess: (data) => {
                console.log('Received chapters data:', data);
                if (data?.list) {
                    setChapters(data.list)
                }
            },
            onError: (err) => {
                console.error('Failed to fetch chapters:', err);
            },
            revalidateOnFocus: false,
        }
    )

    const chaptersTotal = data?.total || 0

    // 更新章节
    const updateChapter = async (chapterId: string, chapterData: Partial<Chapter>) => {
        if (!id) return

        try {
            await apiUpdateChapter(id, chapterId, chapterData)
            await mutate() // 重新获取数据
            // toast.push(
            //     <Notification closable title="成功">
            //         章节更新成功
            //     </Notification>
            // )
        } catch (error) {
            console.error('更新章节失败:', error)
            // toast.push(
            //     <Notification closable title="错误">
            //         更新章节失败，请重试
            //     </Notification>
            // )
        }
    }

    // 删除章节
    const deleteChapter = async (chapterId: string) => {
        if (!id) return
        
        try {
            await apiDeleteChapter(id, chapterId)
            await mutate() // 重新获取数据
            // toast.push(
            //     <Notification closable title="成功">
            //         章节删除成功
            //     </Notification>
            // )
        } catch (error) {
            console.error('删除章节失败:', error)
            // toast.push(
            //     <Notification closable title="错误">
            //         删除章节失败，请重试
            //     </Notification>
            // )
        }
    }

    // 保存章节顺序
    const saveChaptersOrder = async (newChapters: Chapter[]) => {
        if (!id) return
        
        try {
            // 这里需要实现一个API来保存章节顺序
            // await apiUpdateChaptersOrder(novelId, newChapters)
            reorderChapters(newChapters)
            // toast.push(
            //     <Notification closable title="成功">
            //         章节顺序更新成功
            //     </Notification>
            // )
        } catch (error) {
            console.error('更新章节顺序失败:', error)
            // toast.push(
            //     <Notification closable title="错误">
            //         更新章节顺序失败，请重试
            //     </Notification>
            // )
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