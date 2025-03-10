import { ReactNode } from 'react';

// 小说基本类型
export type Novel = {
    id: string;
    title: string;
    user_id?: string;  // 创建者ID
    author?: string;   // 作者名称（前端展示用）
    abstract?: string; // 小说摘要
    summary?: string;  // 与abstract同义
    genre?: string;    // 小说类型/流派
    status: 'drafting' | 'completed' | 'published' | 'ongoing' | 'planned';
    word_count: number;
    wordCount?: number; // 兼容fakeApi中的字段名
    
    // 引用关系
    characters?: string[];
    locations?: string[];
    plotlines?: string[];
    
    // 元数据
    references?: string;
    tags?: string[];
    cover_image?: string;
    cover?: string;    // 兼容fakeApi中的字段名
    
    // 统计数据
    chapter_count: number;
    chapterCount?: number; // 兼容fakeApi中的字段名
    last_edited_at?: string;
    lastUpdated?: string;  // 兼容fakeApi中的字段名
    progress?: number;     // 完成进度百分比
    
    // 额外字段（来自fakeApi）
    protagonist?: string;
    setting?: string;
    targetAudience?: string;
    customFields?: Record<string, any>;
}

export type Novels = Novel[];

export type NovelFilter = {
    search?: string;
    status?: string;
    genre?: string;
    dateRange?: [Date, Date];
    tags?: string[];
}

export type GetNovelsResponse = {
    list: Novels;
    total: number;
}

// 章节类型
export type Chapter = {
    id: string;
    novelId: string;
    title: string;
    order: number;
    wordCount: number;
    status: 'draft' | 'completed' | 'reviewing';
    contentPath?: string;
    lastUpdated: string;
    customFields?: Record<string, any>;
}

// 大纲类型
export type Outline = {
    id: string;
    novelId: string;
    title: string;
    lastUpdated: string;
    structure: {
        premise: string;
        setting: string;
        mainCharacters: Array<{
            name: string;
            role: string;
            description: string;
        }>;
        plotPoints: Array<{
            title: string;
            description: string;
        }>;
    };
    customSections: Array<{
        title: string;
        content: string | any[];
        type: 'text' | 'image' | 'list' | 'timeline';
    }>;
}

// 状态标签配置类型
export type StatusConfig = {
    [key: string]: {
        label: string;
        color: string;
        textColor: string;
    }
}

// 表格列配置
export interface TableColumn {
    Header: string;
    accessor: string;
    Cell?: (props: any) => ReactNode;
    sortable?: boolean;
    width?: number | string;
}