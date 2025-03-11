import { create } from 'zustand'

// 定义章节类型
interface Chapter {
  id: string
  title: string
  summary: string
  status: 'draft' | 'completed' | 'published'
}

// 定义状态类型
interface TableState {
  chapters: Chapter[]
  editingId: string | null
  editingData: Partial<Chapter>
}

// 定义操作类型
interface TableActions {
  setChapters: (chapters: Chapter[]) => void
  setEditingId: (id: string | null) => void
  setEditingData: (data: Partial<Chapter>) => void
  updateChapter: (id: string, data: Partial<Chapter>) => void
  deleteChapter: (id: string) => void
}

// 创建 store
export const useDemoTableStore = create<TableState & TableActions>((set) => ({
  // 初始状态
  chapters: [],
  editingId: null,
  editingData: {},

  // 操作方法
  setChapters: (chapters) => set({ chapters }),
  setEditingId: (id) => set({ editingId: id }),
  setEditingData: (data) => set({ editingData: data }),
  
  updateChapter: (id, data) => 
    set((state) => ({
      chapters: state.chapters.map(chapter => 
        chapter.id === id ? { ...chapter, ...data } : chapter
      )
    })),

  deleteChapter: (id) =>
    set((state) => ({
      chapters: state.chapters.filter(chapter => chapter.id !== id)
    })),
}))