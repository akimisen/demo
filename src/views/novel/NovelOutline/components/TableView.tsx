import React from 'react';
import { Table, Input, Tag, Button, Tooltip, Checkbox } from '@/components/ui';
import { TbEdit, TbTrash, TbCheck, TbX } from 'react-icons/tb';
import { MdDragIndicator } from 'react-icons/md';
import { DragDropContext, Draggable } from '@hello-pangea/dnd';
import { StrictModeDroppable } from '@/components/shared';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';
import useChapterList from '../hooks/useChapterList';
import type { ColumnDef } from '@tanstack/react-table';
import type { DropResult } from '@hello-pangea/dnd';
import type { Chapter } from '../types';
// import { useParams } from 'react-router-dom';

const labelColorSchemes: Record<string, string> = {
  'plot': 'bg-blue-100 text-blue-600',
  'character': 'bg-green-100 text-green-600',
  'world-building': 'bg-purple-100 text-purple-600',
  'action': 'bg-amber-100 text-amber-600',
  'dialogue': 'bg-rose-100 text-rose-600',
  'description': 'bg-cyan-100 text-cyan-600'
}

const statusColorSchemes: Record<string, { color: string, text: string }> = {
  draft: { color: 'bg-gray-100 text-gray-600', text: '草稿' },
  completed: { color: 'bg-green-100 text-green-600', text: '完成' },
  published: { color: 'bg-blue-100 text-blue-600', text: '已发布' }
}

const TableView: React.FC = () => {
  // const { novelId } = useParams<{ novelId: string }>();
  const {
    chapters,
    editingId,
    editingData,
    rowSelection,
    setEditingId,
    setEditingData,
    setRowSelection,
    updateChapter,
    deleteChapter,
    saveChaptersOrder
  } = useChapterList();

  const handleDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;
    
    const newData = [...chapters];
    const [movedRow] = newData.splice(source.index, 1);
    newData.splice(destination.index, 0, movedRow);
    
    saveChaptersOrder(newData);
  };

  const columns = React.useMemo<ColumnDef<Chapter>[]>(() => [
    {
      accessorKey: 'select',
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllRowsSelected()}
          onChange={table.getToggleAllRowsSelectedHandler()}
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          disabled={!row.getCanSelect()}
          onChange={row.getToggleSelectedHandler()}
        />
      ),
      size: 40,
    },
    {
      accessorKey: 'drag',
      header: '',
      cell: () => (
        <span className="cursor-move text-gray-400">
          <MdDragIndicator size={20} />
        </span>
      ),
      size: 40,
    },
    {
      accessorKey: 'order',
      header: '序号',
      size: 80,
    },
    {
      accessorKey: 'title',
      header: '标题',
      cell: ({ row }) => {
        const chapter = row.original;
        if (editingId === chapter.id) {
          return (
            <Input
              value={editingData.title}
              onChange={(e) => setEditingData({ ...editingData, title: e.target.value })}
            />
          );
        }
        return chapter.title;
      }
    },
    {
      accessorKey: 'summary',
      header: '摘要',
      cell: ({ row }) => {
        const chapter = row.original;
        if (editingId === chapter.id) {
          return (
            <Input
              value={editingData.summary}
              onChange={(e) => setEditingData({ ...editingData, summary: e.target.value })}
            />
          );
        }
        return chapter.summary || '-';
      }
    },
    {
      accessorKey: 'labels',
      header: '标签',
      cell: ({ getValue }) => {
        const labels = getValue<string[]>();
        return (
          <div className="flex flex-wrap gap-1">
            {labels?.map((label) => (
              <Tag key={label} className={labelColorSchemes[label] || 'bg-gray-100'}>
                {label}
              </Tag>
            ))}
          </div>
        );
      }
    },
    {
      accessorKey: 'status',
      header: '状态',
      cell: ({ getValue }) => {
        const status = getValue<string>();
        const config = statusColorSchemes[status] || statusColorSchemes.draft;
        return <Tag className={config.color}>{config.text}</Tag>;
      }
    },
    {
      accessorKey: 'word_count',
      header: '字数',
      cell: ({ getValue }) => {
        const count = getValue<number>();
        return count?.toLocaleString() || 0;
      }
    },
    {
      id: 'actions',
      header: '操作',
      cell: ({ row }) => {
        const chapter = row.original;
        if (editingId === chapter.id) {
          return (
            <div className="flex gap-2">
              <Tooltip title="保存">
                <Button icon={<TbCheck />} onClick={() => {
                  updateChapter(chapter.id, editingData);
                  setEditingId(null);
                }} />
              </Tooltip>
              <Tooltip title="取消">
                <Button icon={<TbX />} onClick={() => setEditingId(null)} />
              </Tooltip>
            </div>
          );
        }
        return (
          <div className="flex gap-2">
            <Tooltip title="编辑">
              <Button icon={<TbEdit />} onClick={() => {
                setEditingId(chapter.id);
                setEditingData(chapter);
              }} />
            </Tooltip>
            <Tooltip title="删除">
              <Button 
                icon={<TbTrash />} 
                onClick={() => deleteChapter(chapter.id)}
                className="text-red-500 hover:text-red-600" 
              />
            </Tooltip>
          </div>
        );
      }
    }
  ], [editingId, editingData, setEditingData, setEditingId, updateChapter, deleteChapter]);

  const table = useReactTable({
    data: chapters,
    columns,
    state: {
      rowSelection,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="novel-table-view">
      <DragDropContext onDragEnd={handleDragEnd}>
        <StrictModeDroppable droppableId="chapters">
          {(provided) => (
            <Table>
              <thead>
                {table.getHeaderGroups().map(headerGroup => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map(header => (
                      <th key={header.id}>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {table.getRowModel().rows.map((row, index) => (
                  <Draggable
                    key={row.original.id}
                    draggableId={row.original.id}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <tr
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        className={snapshot.isDragging ? 'bg-gray-50' : ''}
                      >
                        {row.getVisibleCells().map(cell => (
                          <td key={cell.id}>
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </td>
                        ))}
                      </tr>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </tbody>
            </Table>
          )}
        </StrictModeDroppable>
      </DragDropContext>
    </div>
  );
};

export default TableView; 