// 章节状态类型
export type ChapterStatus = 'draft' | 'completed' | 'published';

// 章节基础类型
export interface Chapter {
  id: string;
  novel_id: string;
  title: string;
  order: number;
  content?: string;
  summary?: string;
  word_count: number;
  
  // 关联数据
  characters: string[];  // 角色ID列表
  locations: string[];   // 场景ID列表
  plotline?: string;     // 情节线ID
  
  // 写作辅助数据
  hook?: string;         // 章节钩子/看点
  value?: number;        // 情感价值变化 (-10到10)
  tags?: string[];      // 标签列表
  notes?: string;        // 作者笔记
  
  // 状态
  status: ChapterStatus;
  is_published: boolean;
  
}

// 章节更新数据类型
export type ChapterUpdateData = Partial<Omit<Chapter, 'id' | 'novel_id'>>;

// TableView 组件 Props 类型
export interface TableViewProps {
  chapters: Chapter[];
  onUpdateChapter: (id: string, data: ChapterUpdateData) => void;
  onDeleteChapter: (id: string) => void;
}
export type Filter={
  status: string
  tags: string[]
}

export type GetChapterListResponse = {
  list: Chapter[]
  total: number
}