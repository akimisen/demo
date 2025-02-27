## SpecStory

## Novel Writing Assistant - Feature Implementation (2/26/2025, 9:05:28 PM)

_**User**_

完成memo中描述的任务。我的整个项目代码更新了，重新阅读整个代码。

---

_**Assistant**_

# 写作助手应用 - 路由优化与功能实现方案

根据您的需求，我将提供小说写作功能的路由优化方案、API设计以及大纲页面的实现框架。

## 1. 写作相关路由优化与API设计

### 1.1 数据结构设计

首先，让我们定义小说和章节的数据结构：

```typescript
// src/views/novels/types.ts
export interface Novel {
  id: string;
  title: string;
  desc: string;
  genre: string;
  wordCount: number;
  coverImage?: string;
  status: 'ongoing' | 'completed' | 'planned';
  lastUpdated: string;
  progress: number;
  createdAt: string;
  updatedAt: string;
}

export interface Chapter {
  id: string;
  bid: string;  // 所属小说ID
  cid: string;  // 章节ID
  ctitle: string;
  summary: string;
  characters: string[];
  tags: string[];
  storyLine: string;
  content: string;  // 正文内容
  notes: string;
  order: number;
  wordCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface Character {
  id: string;
  name: string;
  type: 'protagonist' | 'supporting' | 'npc' | 'antagonist' | 'extra';
  appearance: string;
  traits: string[];
  faction: string;
  skills: string[];
  bio: string;
}

export interface Scene {
  id: string;
  name: string;
  description: string;
  location: string;
}

export interface WorldSetting {
  id: string;
  title: string;
  content: string;
  category: 'world' | 'background' | 'rule' | 'other';
}
```

### 1.2 API 服务设计

```typescript
// src/services/NovelService.ts
import ApiService from './ApiService';
import { Novel, Chapter, Character, Scene, WorldSetting } from '../views/novels/types';

// 小说相关API
export const apiGetNovels = () => {
  return ApiService.fetchDataWithAxios({
    url: '/api/novels',
    method: 'get'
  });
};

export const apiGetNovel = (id: string) => {
  return ApiService.fetchDataWithAxios({
    url: `/api/novels/${id}`,
    method: 'get'
  });
};

export const apiCreateNovel = (data: Partial<Novel>) => {
  return ApiService.fetchDataWithAxios({
    url: '/api/novels',
    method: 'post',
    data
  });
};

export const apiUpdateNovel = (id: string, data: Partial<Novel>) => {
  return ApiService.fetchDataWithAxios({
    url: `/api/novels/${id}`,
    method: 'put',
    data
  });
};

export const apiDeleteNovel = (id: string) => {
  return ApiService.fetchDataWithAxios({
    url: `/api/novels/${id}`,
    method: 'delete'
  });
};

// 章节相关API
export const apiGetChapters = (novelId: string) => {
  return ApiService.fetchDataWithAxios({
    url: `/api/novels/${novelId}/chapters`,
    method: 'get'
  });
};

export const apiGetChapter = (novelId: string, chapterId: string) => {
  return ApiService.fetchDataWithAxios({
    url: `/api/novels/${novelId}/chapters/${chapterId}`,
    method: 'get'
  });
};

export const apiCreateChapter = (novelId: string, data: Partial<Chapter>) => {
  return ApiService.fetchDataWithAxios({
    url: `/api/novels/${novelId}/chapters`,
    method: 'post',
    data
  });
};

export const apiUpdateChapter = (novelId: string, chapterId: string, data: Partial<Chapter>) => {
  return ApiService.fetchDataWithAxios({
    url: `/api/novels/${novelId}/chapters/${chapterId}`,
    method: 'put',
    data
  });
};

export const apiDeleteChapter = (novelId: string, chapterId: string) => {
  return ApiService.fetchDataWithAxios({
    url: `/api/novels/${novelId}/chapters/${chapterId}`,
    method: 'delete'
  });
};

// 角色相关API
export const apiGetCharacters = (novelId: string) => {
  return ApiService.fetchDataWithAxios({
    url: `/api/novels/${novelId}/characters`,
    method: 'get'
  });
};

// 场景相关API
export const apiGetScenes = (novelId: string) => {
  return ApiService.fetchDataWithAxios({
    url: `/api/novels/${novelId}/scenes`,
    method: 'get'
  });
};

// 世界设定相关API
export const apiGetWorldSettings = (novelId: string) => {
  return ApiService.fetchDataWithAxios({
    url: `/api/novels/${novelId}/settings`,
    method: 'get'
  });
};
```

### 1.3 路由配置更新

```typescript
// src/configs/routes.config/novelsRoute.ts
import { lazy } from 'react'
import { NOVELS_PREFIX_PATH } from '@/constants/route.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { Routes } from '@/@types/routes'

const novelsRoute: Routes = [
    {
        key: 'novels.list',
        path: `${NOVELS_PREFIX_PATH}/list`,
        component: lazy(() => import('@/views/novels/NovelList')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'novels.outline',
        path: `${NOVELS_PREFIX_PATH}/:novelId/outline`,
        component: lazy(() => import('@/views/novels/NovelOutline')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'novels.content.editor',
        path: `${NOVELS_PREFIX_PATH}/:novelId/content/:chapterId?`,
        component: lazy(() => import('@/views/novels/NovelContent')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'novels.content.ai',
        path: `${NOVELS_PREFIX_PATH}/:novelId/content/:chapterId/ai`,
        component: lazy(() => import('@/views/novels/NovelContentAI')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
            pageBackgroundType: 'plain',
        },
    },
]

export default novelsRoute
```

### 1.4 REST API 设计最佳实践

关于是否需要为 novel 和 novels 使用不同的 endpoint，我建议采用以下 RESTful API 设计最佳实践：

1. 使用复数名词作为资源集合的 endpoint（如 `/api/novels`）
2. 使用 ID 标识特定资源（如 `/api/novels/{id}`）
3. 使用嵌套路由表示资源之间的关系（如 `/api/novels/{id}/chapters`）
4. 使用 HTTP 方法表示操作（GET、POST、PUT、DELETE）

这种设计清晰地表达了资源之间的层次关系，并遵循了 REST 架构风格的原则。

### 1.5 GraphQL 与 RESTful API 结合

GraphQL 是一种用于 API 的查询语言和运行时，它允许客户端精确地指定所需的数据，避免了过度获取和数据不足的问题。

#### GraphQL 基本概念：

1. **Schema**：定义可用的查询、变更和订阅，以及数据类型
2. **Resolver**：处理查询和变更的函数
3. **Query**：获取数据的操作
4. **Mutation**：修改数据的操作

#### 与 RESTful API 结合的方案：

1. **混合模式**：对于简单的 CRUD 操作使用 REST，对于复杂的数据获取使用 GraphQL
2. **GraphQL 作为 REST API 的网关**：在前端和 REST API 之间添加 GraphQL 层

#### 后端实现示例：

```typescript
// src/graphql/schema.ts
import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Novel {
    id: ID!
    title: String!
    desc: String
    genre: String
    wordCount: Int
    chapters: [Chapter]
    characters: [Character]
    scenes: [Scene]
    worldSettings: [WorldSetting]
  }

  type Chapter {
    id: ID!
    bid: ID!
    cid: String!
    ctitle: String!
    summary: String
    characters: [String]
    tags: [String]
    storyLine: String
    content: String
    notes: String
    order: Int
    wordCount: Int
    createdAt: String
    updatedAt: String
  }

  type Character {
    id: ID!
    name: String!
    type: String!
    appearance: String
    traits: [String]
    faction: String
    skills: [String]
    bio: String
  }

  type Query {
    novels: [Novel]
    novel(id: ID!): Novel
    chapters(novelId: ID!): [Chapter]
    chapter(novelId: ID!, chapterId: ID!): Chapter
    characters(novelId: ID!): [Character]
  }

  type Mutation {
    createNovel(input: NovelInput!): Novel
    updateNovel(id: ID!, input: NovelInput!): Novel
    deleteNovel(id: ID!): Boolean
    createChapter(novelId: ID!, input: ChapterInput!): Chapter
    updateChapter(novelId: ID!, chapterId: ID!, input: ChapterInput!): Chapter
    deleteChapter(novelId: ID!, chapterId: ID!): Boolean
  }

  input NovelInput {
    title: String!
    desc: String
    genre: String
  }

  input ChapterInput {
    ctitle: String!
    summary: String
    characters: [String]
    tags: [String]
    storyLine: String
    content: String
    notes: String
    order: Int
  }
`;

// src/graphql/resolvers.ts
import { apiGetNovels, apiGetNovel, apiGetChapters, apiGetChapter } from '../services/NovelService';

export const resolvers = {
  Query: {
    novels: async () => {
      const response = await apiGetNovels();
      return response.data;
    },
    novel: async (_, { id }) => {
      const response = await apiGetNovel(id);
      return response.data;
    },
    chapters: async (_, { novelId }) => {
      const response = await apiGetChapters(novelId);
      return response.data;
    },
    chapter: async (_, { novelId, chapterId }) => {
      const response = await apiGetChapter(novelId, chapterId);
      return response.data;
    },
  },
  Novel: {
    chapters: async (parent) => {
      const response = await apiGetChapters(parent.id);
      return response.data;
    },
  }
};
```

## 2. 大纲页面实现

下面是大纲页面的基本框架实现，包含多视图切换功能：

```typescript
// src/views/novels/NovelOutline/index.tsx
import { useState } from 'react';
import { Tabs } from '@/components/ui/Tabs';
import { Card } from '@/components/ui/Card';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { apiGetNovel, apiGetChapters, apiGetCharacters, apiGetScenes, apiGetWorldSettings } from '@/services/NovelService';
import Loading from '@/components/shared/Loading';
import TableView from './components/TableView';
import ListView from './components/ListView';
import StoryboardView from './components/StoryboardView';
import CharactersView from './components/CharactersView';
import ScenesView from './components/ScenesView';
import SettingsView from './components/SettingsView';

const { TabNav, TabList, TabContent } = Tabs;

const NovelOutline = () => {
    const { novelId } = useParams();
    const [activeTab, setActiveTab] = useState('table');

    // 获取小说基本信息
    const { data: novel, isLoading: isNovelLoading } = useSWR(
        novelId ? `/api/novels/${novelId}` : null,
        () => apiGetNovel(novelId as string),
        {
            revalidateOnFocus: false,
        }
    );

    // 获取章节列表
    const { data: chapters, isLoading: isChaptersLoading } = useSWR(
        novelId ? `/api/novels/${novelId}/chapters` : null,
        () => apiGetChapters(novelId as string),
        {
            revalidateOnFocus: false,
        }
    );

    // 获取角色列表
    const { data: characters, isLoading: isCharactersLoading } = useSWR(
        novelId ? `/api/novels/${novelId}/characters` : null,
        () => apiGetCharacters(novelId as string),
        {
            revalidateOnFocus: false,
        }
    );

    // 获取场景列表
    const { data: scenes, isLoading: isScenesLoading } = useSWR(
        novelId ? `/api/novels/${novelId}/scenes` : null,
        () => apiGetScenes(novelId as string),
        {
            revalidateOnFocus: false,
        }
    );

    // 获取世界设定
    const { data: settings, isLoading: isSettingsLoading } = useSWR(
        novelId ? `/api/novels/${novelId}/settings` : null,
        () => apiGetWorldSettings(novelId as string),
        {
            revalidateOnFocus: false,
        }
    );

    const isLoading = isNovelLoading || isChaptersLoading || isCharactersLoading || isScenesLoading || isSettingsLoading;

    return (
        <Loading loading={isLoading}>
            {novel && (
                <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                        <h3>{novel.data.title} - 大纲</h3>
                    </div>
                    <Card>
                        <Tabs value={activeTab} onChange={(val) => setActiveTab(val)}>
                            <TabList>
                                <TabNav value="table">表格视图</TabNav>
                                <TabNav value="list">列表视图</TabNav>
                                <TabNav value="storyboard">故事板</TabNav>
                                <TabNav value="characters">人物</TabNav>
                                <TabNav value="scenes">场景</TabNav>
                                <TabNav value="settings">设定</TabNav>
                            </TabList>
                            <div className="mt-4">
                                <TabContent value="table">
                                    <TableView chapters={chapters?.data || []} />
                                </TabContent>
                                <TabContent value="list">
                                    <ListView chapters={chapters?.data || []} />
                                </TabContent>
                                <TabContent value="storyboard">
                                    <StoryboardView chapters={chapters?.data || []} />
                                </TabContent>
                                <TabContent value="characters">
                                    <CharactersView characters={characters?.data || []} />
                                </TabContent>
                                <TabContent value="scenes">
                                    <ScenesView scenes={scenes?.data || []} />
                                </TabContent>
                                <TabContent value="settings">
                                    <SettingsView settings={settings?.data || []} />
                                </TabContent>
                            </div>
                        </Tabs>
                    </Card>
                </div>
            )}
        </Loading>
    );
};

export default NovelOutline;
```

### 2.1 表格视图组件

```typescript
// src/views/novels/NovelOutline/components/TableView.tsx
import { useState } from 'react';
import { Table } from '@/components/ui/Table';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Chapter } from '../../types';
import { useNavigate, useParams } from 'react-router-dom';
import { apiCreateChapter, apiUpdateChapter, apiDeleteChapter } from '@/services/NovelService';
import { useSWRConfig } from 'swr';

interface TableViewProps {
    chapters: Chapter[];
}

const { Tr, Th, Td, THead, TBody } = Table;

const TableView = ({ chapters }: TableViewProps) => {
    const { novelId } = useParams();
    const navigate = useNavigate();
    const { mutate } = useSWRConfig();
    const [editingId, setEditingId] = useState<string | null>(null);
    const [editForm, setEditForm] = useState<Partial<Chapter>>({});

    const handleEdit = (chapter: Chapter) => {
        setEditingId(chapter.id);
        setEditForm(chapter);
    };

    const handleSave = async () => {
        if (editingId) {
            await apiUpdateChapter(novelId as string, editingId, editForm);
            mutate(`/api/novels/${novelId}/chapters`);
            setEditingId(null);
        }
    };

    const handleCancel = () => {
        setEditingId(null);
    };

    const handleDelete = async (chapterId: string) => {
        if (confirm('确定要删除这个章节吗？')) {
            await apiDeleteChapter(novelId as string, chapterId);
            mutate(`/api/novels/${novelId}/chapters`);
        }
    };

    const handleCreate = async () => {
        const newChapter = {
            ctitle: '新章节',
            summary: '',
            order: chapters.length + 1
        };
        await apiCreateChapter(novelId as string, newChapter);
        mutate(`/api/novels/${novelId}/chapters`);
    };

    const handleContentEdit = (chapterId: string) => {
        navigate(`/novels/${novelId}/content/${chapterId}`);
    };

    const handleChange = (field: keyof Chapter, value: any) => {
        setEditForm(prev => ({ ...prev, [field]: value }));
    };

    return (
        <div>
            <div className="flex justify-end mb-4">
                <Button onClick={handleCreate}>新增章节</Button>
            </div>
            <Table>
                <THead>
                    <Tr>
                        <Th>序号</Th>
                        <Th>标题</Th>
                        <Th>摘要</Th>
                        <Th>人物</Th>
                        <Th>标签</Th>
                        <Th>故事线</Th>
                        <Th>字数</Th>
                        <Th>操作</Th>
                    </Tr>
                </THead>
                <TBody>
                    {chapters.map((chapter) => (
                        <Tr key={chapter.id}>
                            <Td>{chapter.order}</Td>
                            <Td>
                                {editingId === chapter.id ? (
                                    <Input 
                                        value={editForm.ctitle || ''} 
                                        onChange={e => handleChange('ctitle', e.target.value)} 
                                    />
                                ) : (
                                    chapter.ctitle
                                )}
                            </Td>
                            <Td>
                                {editingId === chapter.id ? (
                                    <Input 
                                        value={editForm.summary || ''} 
                                        onChange={e => handleChange('summary', e.target.value)} 
                                    />
                                ) : (
                                    chapter.summary
                                )}
                            </Td>
                            <Td>{chapter.characters?.join(', ')}</Td>
                            <Td>{chapter.tags?.join(', ')}</Td>
                            <Td>{chapter.storyLine}</Td>
                            <Td>{chapter.wordCount}</Td>
                            <Td>
                                {editingId === chapter.id ? (
                                    <div className="flex gap-2">
                                        <Button size="sm" onClick={handleSave}>保存</Button>
                                        <Button size="sm" variant="plain" onClick={handleCancel}>取消</Button>
                                    </div>
                                ) : (
                                    <div className="flex gap-2">
                                        <Button size="sm" onClick={() => handleEdit(chapter)}>编辑</Button>
                                        <Button size="sm" onClick={() => handleContentEdit(chapter.id)}>内容</Button>
                                        <Button size="sm" variant="twoTone" color="red" onClick={() => handleDelete(chapter.id)}>删除</Button>
                                    </div>
                                )}
                            </Td>
                        </Tr>
                    ))}
                </TBody>
            </Table>
        </div>
    );
};

export default TableView;
```

### 2.2 故事板视图组件

```typescript
// src/views/novels/NovelOutline/components/StoryboardView.tsx
import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Card } from '@/components/ui/Card';
import { Tag } from '@/components/ui/Tag';
import { Chapter } from '../../types';
import { useParams } from 'react-router-dom';
import { apiUpdateChapter } from '@/services/NovelService';
import { useSWRConfig } from 'swr';

interface StoryboardViewProps {
    chapters: Chapter[];
}

const StoryboardView = ({ chapters }: StoryboardViewProps) => {
    const { novelId } = useParams();
    const { mutate } = useSWRConfig();
    
    // 按故事线分组
    const groupedChapters = chapters.reduce((acc, chapter) => {
        const storyLine = chapter.storyLine || '未分类';
        if (!acc[storyLine]) {
            acc[storyLine] = [];
        }
        acc[storyLine].push(chapter);
        return acc;
    }, {} as Record<string, Chapter[]>);

    // 故事线颜色映射
    const storyLineColors: Record<string, string> = {
        '主线': 'bg-blue-100 border-blue-300',
        '支线A': 'bg-green-100 border-green-300',
        '支线B': 'bg-purple-100 border-purple-300',
        '支线C': 'bg-yellow-100 border-yellow-300',
        '未分类': 'bg-gray-100 border-gray-300'
    };

    const handleDragEnd = async (result: any) => {
        const { source, destination } = result;
        
        if (!destination) return;
        
        if (source.droppableId !== destination.droppableId) {
            // 移动到不同故事线
            const sourceChapters = [...groupedChapters[source.droppableId]];
            const destChapters = [...groupedChapters[destination.droppableId]];
            
            const [movedChapter] = sourceChapters.splice(source.index, 1);
            destChapters.splice(destination.index, 0, movedChapter);
            
            // 更新故事线
            await apiUpdateChapter(novelId as string, movedChapter.id, {
                storyLine: destination.droppableId
            });
            
            mutate(`/api/novels/${novelId}/chapters`);
        }
    };

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.entries(groupedChapters).map(([storyLine, storyChapters]) => (
                    <div key={storyLine} className="flex flex-col">
                        <h4 className="mb-2">{storyLine}</h4>
                        <Droppable droppableId={storyLine}>
                            {(provided) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    className="flex-1 min-h-[200px]"
                                >
                                    {storyChapters.map((chapter, index) => (
                                        <Draggable
                                            key={chapter.id}
                                            draggableId={chapter.id}
                                            index={index}
                                        >
                                            {(provided) => (
                                                <Card
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    className={`mb-3 ${storyLineColors[storyLine] || 'bg-gray-100 border-gray-300'}`}
                                                >
                                                    <div className="p-3">
                                                        <h5 className="font-bold">{chapter.ctitle}</h5>
                                                        <p className="text-sm mt-2">{chapter.summary}</p>
                                                        <div className="mt-3 flex flex-wrap gap-1">
                                                            {chapter.characters?.map((char, idx) => (
                                                                <Tag key={idx} className="bg-blue-50">{char}</Tag>
                                                            ))}
                                                        </div>
                                                        <div className="mt-2 flex flex-wrap gap-1">
                                                            {chapter.tags?.map((tag, idx) => (
                                                                <Tag key={idx}>{tag}</Tag>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </Card>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </div>
                ))}
            </div>
        </DragDropContext>
    );
};

export default StoryboardView;
```

### 2.3 人物视图组件

```typescript
// src/views/novels/NovelOutline/components/CharactersView.tsx
import { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Avatar } from '@/components/ui/Avatar';
import { Button } from '@/components/ui/Button';
import { Dialog } from '@/components/ui/Dialog';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Character } from '../../types';
import { useParams } from 'react-router-dom';
import { apiCreateCharacter, apiUpdateCharacter, apiDeleteCharacter } from '@/services/NovelService';
import { useSWRConfig } from 'swr';

interface CharactersViewProps {
    characters: Character[];
}

const CharactersView = ({ characters }: CharactersViewProps) => {
    const { novelId } = useParams();
    const { mutate } = useSWRConfig();
    const [dialogOpen, setDialogOpen] = useState(false);
    const [editingCharacter, setEditingCharacter] = useState<Partial<Character> | null>(null);

    // 按类型分组
    const groupedCharacters = characters.reduce((acc, character) => {
        if (!acc[character.type]) {
            acc[character.type] = [];
        }
        acc[character.type].push(character);
        return acc;
    }, {} as Record<string, Character[]>);

    const characterTypes = [
        { value: 'protagonist', label: '主角' },
        { value: 'supporting', label: '配角' },
        { value: 'npc', label: 'NPC' },
        { value: 'antagonist', label: '反派' },
        { value: 'extra', label: '路人' }
    ];

    const handleEdit = (character: Character) => {
        setEditingCharacter(character);
        setDialogOpen(true);
    };

    const handleCreate = () => {
        setEditingCharacter({
            name: '',
            type: 'protagonist',
            appearance: '',
            traits: [],
            faction: '',
            skills: [],
            bio: ''
        });
        setDialogOpen(true);
    };

    const handleSave = async () => {
        if (!editingCharacter) return;

        if (editingCharacter.id) {
            await apiUpdateCharacter(novelId as string, editingCharacter.id, editingCharacter);
        } else {
            await apiCreateCharacter(novelId as string, editingCharacter);
        }

        mutate(`/api/novels/${novelId}/characters`);
        setDialogOpen(false);
    };

    const handleDelete = async (characterId: string) => {
        if (confirm('确定要删除这个角色吗？')) {
            await apiDeleteCharacter(novelId as string, characterId);
            mutate(`/api/novels/${novelId}/characters`);
        }
    };

    const handleChange = (field: keyof Character, value: any) => {
        setEditingCharacter(prev => prev ? { ...prev, [field]: value } : null);
    };

    return (
        <div>
            <div className="flex justify-end mb-4">
                <Button onClick={handleCreate}>新增角色</Button>
            </div>

            <div className="grid grid-cols-

---



---

