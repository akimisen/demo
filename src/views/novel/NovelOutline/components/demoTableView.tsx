import React, { useEffect } from 'react'
import { useDemoTableStore } from './demoTableStore'

const DemoTableView: React.FC = () => {
  // 从 store 中获取状态和方法
  const {
    chapters,
    editingId,
    editingData,
    setChapters,
    setEditingId,
    setEditingData,
    updateChapter,
    deleteChapter
  } = useDemoTableStore()

  // 模拟加载初始数据
  useEffect(() => {
    const mockData = [
      { id: '1', title: '第一章', summary: '故事开始', status: 'draft' as const },
      { id: '2', title: '第二章', summary: '情节展开', status: 'completed' as const }
    ]
    setChapters(mockData)
  }, [])

  // 处理编辑
  const handleEdit = (chapter: any) => {
    setEditingId(chapter.id)
    setEditingData(chapter)
  }

  // 处理保存
  const handleSave = (id: string) => {
    updateChapter(id, editingData)
    setEditingId(null)
    setEditingData({})
  }

  // 处理删除
  const handleDelete = (id: string) => {
    if (window.confirm('确定要删除吗？')) {
      deleteChapter(id)
    }
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">章节列表 Demo</h2>
      <table className="min-w-full border">
        <thead>
          <tr className="bg-gray-50">
            <th className="p-2">标题</th>
            <th className="p-2">摘要</th>
            <th className="p-2">状态</th>
            <th className="p-2">操作</th>
          </tr>
        </thead>
        <tbody>
          {chapters.map(chapter => (
            <tr key={chapter.id} className="border-t">
              <td className="p-2">
                {editingId === chapter.id ? (
                  <input
                    value={editingData.title || ''}
                    onChange={e => setEditingData({ ...editingData, title: e.target.value })}
                    className="border p-1"
                  />
                ) : (
                  chapter.title
                )}
              </td>
              <td className="p-2">
                {editingId === chapter.id ? (
                  <input
                    value={editingData.summary || ''}
                    onChange={e => setEditingData({ ...editingData, summary: e.target.value })}
                    className="border p-1"
                  />
                ) : (
                  chapter.summary
                )}
              </td>
              <td className="p-2">{chapter.status}</td>
              <td className="p-2">
                {editingId === chapter.id ? (
                  <div className="space-x-2">
                    <button 
                      onClick={() => handleSave(chapter.id)}
                      className="bg-green-500 text-white px-2 py-1 rounded"
                    >
                      保存
                    </button>
                    <button 
                      onClick={() => setEditingId(null)}
                      className="bg-gray-500 text-white px-2 py-1 rounded"
                    >
                      取消
                    </button>
                  </div>
                ) : (
                  <div className="space-x-2">
                    <button 
                      onClick={() => handleEdit(chapter)}
                      className="bg-blue-500 text-white px-2 py-1 rounded"
                    >
                      编辑
                    </button>
                    <button 
                      onClick={() => handleDelete(chapter.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      删除
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DemoTableView