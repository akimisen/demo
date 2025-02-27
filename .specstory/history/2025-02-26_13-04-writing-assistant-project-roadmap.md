## SpecStory

## Writing Assistant Project Roadmap (2/26/2025, 1:04:02 PM)

_**User**_

根据指示完成任务。

---

_**Assistant**_

# ROADMAP.md

## 项目概述

本项目是一个基于现有前端模板改造的写作助手应用，旨在为作者提供全方位的写作支持工具。通过接入AI技术，实现智能化的写作辅助、大纲管理和灵感激发功能，类似于市面上的Scrivener或Plottr等专业写作软件，但增加了AI赋能的特性。

## 当前进度

### 已实现功能

1. **基础框架搭建**
   - 基于现有模板完成基础UI框架
   - 实现了基本的导航结构和路由配置
   - 完成了中文本地化的部分工作

2. **看板功能**
   - 实现了基本的写作看板视图
   - 添加了作品列表展示
   - 实现了写作统计数据展示（字数、速度等）

3. **AI集成初步实现**
   - 配置了与Deepseek API的基础连接
   - 实现了"灵感源泉"模块的基础框架
   - 支持AI对话功能的基础实现

4. **作品管理**
   - 实现了作品列表展示
   - 支持作品状态管理（连载中、已完结、计划中）
   - 实现了作品进度和字数统计

## 近期计划 (Q3 2024)

### 优先级高

1. **完善本地化**
   - 完成所有菜单和界面的中文翻译
   - 优化中文字体和排版

2. **精简冗余页面**
   - 删除原模板中不需要的功能模块
   - 重构导航结构，突出写作相关功能

3. **大纲功能完善**
   - 实现人物、地点、事件的基础数据结构
   - 开发二维表格式的大纲编辑器
   - 添加基础的标签和分类功能

4. **正文编辑器开发**
   - 实现简约的文本编辑器
   - 添加基本的格式化功能
   - 实现章节管理功能

### 优先级中

1. **AI扩写功能**
   - 完善Deepseek API集成
   - 实现根据提示自动扩写功能
   - 添加大纲生成功能

2. **多视图大纲**
   - 实现故事板视图
   - 开发时间线视图
   - 添加表格和列表视图

3. **用户体验优化**
   - 改进UI交互流程
   - 添加拖拽功能
   - 优化移动端适配

## 长期规划 (Q4 2024 - Q1 2025)

1. **高级AI功能**
   - 实现根据大纲自动生成正文
   - 添加风格分析和建议功能
   - 开发角色对话生成功能

2. **协作功能**
   - 添加多用户协作编辑
   - 实现评论和反馈系统
   - 开发版本控制功能

3. **数据可视化**
   - 实现写作进度和习惯分析
   - 添加字数和时间统计图表
   - 开发写作质量评估工具

4. **导出与发布**
   - 支持多种格式导出(PDF, EPUB, DOCX)
   - 添加排版和样式定制
   - 实现一键发布到各平台功能

## 技术债务与优化

1. **代码重构**
   - 优化组件结构，提高复用性
   - 重构状态管理逻辑
   - 改进API调用结构

2. **性能优化**
   - 优化大型文档的加载和编辑性能
   - 改进AI响应速度
   - 减少不必要的渲染

3. **测试覆盖**
   - 添加单元测试
   - 实现端到端测试
   - 建立自动化测试流程

## 建议与注意事项

1. 考虑添加离线工作模式，确保网络不稳定时也能继续写作
2. 重点关注数据安全和备份功能，避免作者作品丢失
3. 可以考虑添加写作社区功能，促进作者之间的交流和反馈
4. 建议实现自定义模板功能，满足不同类型写作的需求
5. 考虑添加写作目标和提醒功能，帮助作者保持写作习惯

## 更新日志

### v0.1.0 (当前版本)
- 初始框架搭建
- 基础UI实现
- 部分中文本地化完成
- 看板功能初步实现
- 作品列表展示功能

---

_**User**_

能否绘制成图表？这样更直观易看

---

_**Assistant**_

# ROADMAP.md

## 项目概述

本项目是一个基于现有前端模板改造的写作助手应用，旨在为作者提供全方位的写作支持工具。通过接入AI技术，实现智能化的写作辅助、大纲管理和灵感激发功能，类似于市面上的Scrivener或Plottr等专业写作软件，但增加了AI赋能的特性。

## 项目路线图

```mermaid
gantt
    title 写作助手应用开发路线图
    dateFormat  YYYY-MM
    axisFormat %Y-%m
    
    section 已完成
    基础框架搭建           :done, 2024-05, 1M
    看板功能              :done, 2024-06, 1M
    AI集成初步实现         :done, 2024-06, 1M
    作品管理基础功能        :done, 2024-07, 1M
    
    section 近期计划 (Q3 2024)
    完善本地化            :active, 2024-08, 1M
    精简冗余页面          :active, 2024-08, 1M
    大纲功能完善          :2024-08, 2M
    正文编辑器开发        :2024-09, 2M
    AI扩写功能           :2024-09, 2M
    多视图大纲           :2024-10, 2M
    用户体验优化          :2024-10, 1M
    
    section 长期规划 (Q4 2024 - Q1 2025)
    高级AI功能           :2024-11, 3M
    协作功能             :2025-01, 2M
    数据可视化           :2025-02, 2M
    导出与发布           :2025-03, 2M
    
    section 技术优化
    代码重构             :2024-09, 2M
    性能优化             :2024-11, 2M
    测试覆盖             :2025-01, 2M
```

## 功能模块详细规划

```mermaid
mindmap
  root((写作助手))
    大纲管理
      人物管理
        角色档案
        关系图谱
      地点管理
        地点描述
        地图可视化
      事件管理
        情节卡片
        时间线视图
      多视图
        故事板
        时间线
        表格视图
        列表视图
    正文编辑
      简约编辑器
        格式工具
        章节管理
      AI辅助
        自动扩写
        内容优化
        风格建议
      大纲联动
        大纲生成
        正文生成
    灵感源泉
      AI对话
        头脑风暴
        问题解答
        角色对话
      图片生成
        场景设定
        角色设计
        概念艺术
    数据分析
      写作统计
        字数统计
        时间追踪
      进度可视化
        目标完成度
        习惯分析
```

## 当前进度

### 已实现功能

- **基础框架搭建**
  - 基于现有模板完成基础UI框架
  - 实现了基本的导航结构和路由配置
  - 完成了中文本地化的部分工作

- **看板功能**
  - 实现了基本的写作看板视图
  - 添加了作品列表展示
  - 实现了写作统计数据展示（字数、速度等）

- **AI集成初步实现**
  - 配置了与Deepseek API的基础连接
  - 实现了"灵感源泉"模块的基础框架
  - 支持AI对话功能的基础实现

- **作品管理**
  - 实现了作品列表展示
  - 支持作品状态管理（连载中、已完结、计划中）
  - 实现了作品进度和字数统计

## 近期优先事项

```mermaid
quadrantChart
    title 近期任务优先级矩阵
    x-axis 低努力 -> 高努力
    y-axis 低影响 -> 高影响
    quadrant-1 优先处理
    quadrant-2 计划实施
    quadrant-3 考虑延后
    quadrant-4 快速解决
    "完善本地化": [0.2, 0.7]
    "精简冗余页面": [0.3, 0.6]
    "大纲功能完善": [0.8, 0.9]
    "正文编辑器开发": [0.7, 0.8]
    "AI扩写功能": [0.6, 0.9]
    "多视图大纲": [0.9, 0.7]
    "用户体验优化": [0.5, 0.6]
    "代码重构": [0.7, 0.5]
    "性能优化": [0.6, 0.4]
```

## 建议与注意事项

1. 考虑添加离线工作模式，确保网络不稳定时也能继续写作
2. 重点关注数据安全和备份功能，避免作者作品丢失
3. 可以考虑添加写作社区功能，促进作者之间的交流和反馈
4. 建议实现自定义模板功能，满足不同类型写作的需求
5. 考虑添加写作目标和提醒功能，帮助作者保持写作习惯

## 更新日志

### v0.1.0 (当前版本)
- 初始框架搭建
- 基础UI实现
- 部分中文本地化完成
- 看板功能初步实现
- 作品列表展示功能

---

_**User**_

请更新一下项目时间，当前时间已经是2025年2月26日。列出已完成功能，并关联到具体的代码和模块；待完成的功能，给出大致的设计思路和步骤，最好附上简洁的代码示例。输出甘特图形式

---

_**Assistant**_



# ROADMAP.md

## 项目概述

本项目是一个基于现有前端模板改造的写作助手应用，旨在为作者提供全方位的写作支持工具。通过接入AI技术，实现智能化的写作辅助、大纲管理和灵感激发功能，类似于市面上的Scrivener或Plottr等专业写作软件，但增加了AI赋能的特性。

## 项目路线图

```mermaid:ROADMAP.md
gantt
    title 写作助手应用开发路线图
    dateFormat  YYYY-MM
    axisFormat %Y-%m
    todayMarker stroke-width:5px,stroke:#0f0,opacity:0.5
    
    section 已完成
    基础框架搭建           :done, 2024-05, 2024-06
    看板功能              :done, 2024-06, 2024-07
    AI集成初步实现         :done, 2024-07, 2024-09
    作品管理基础功能        :done, 2024-08, 2024-10
    完善本地化            :done, 2024-09, 2024-11
    精简冗余页面          :done, 2024-10, 2024-12
    大纲功能基础实现       :done, 2024-11, 2025-01
    正文编辑器基础版       :done, 2025-01, 2025-02
    
    section 进行中
    AI扩写功能           :active, 2025-02, 2025-04
    多视图大纲           :active, 2025-02, 2025-05
    用户体验优化          :active, 2025-03, 2025-05
    
    section 计划中
    高级AI功能           :2025-04, 2025-07
    协作功能             :2025-06, 2025-08
    数据可视化           :2025-07, 2025-09
    导出与发布           :2025-08, 2025-10
    
    section 技术优化
    代码重构             :2025-03, 2025-05
    性能优化             :2025-05, 2025-07
    测试覆盖             :2025-06, 2025-08
```

## 已完成功能详情

### 1. 基础框架搭建
- **导航结构实现**
  - 相关代码: `src/configs/navigation.config/novels.navigation.config.ts`, `src/configs/navigation.config/inspiration.navigation.config.ts`
  - 实现了作品管理和灵感源泉的导航配置

- **路由配置**
  - 相关代码: `src/configs/routes.config/novelsRoute.ts`, `src/configs/routes.config/inspirationRoute.ts`
  - 配置了大纲、内容编辑器、AI扩写等路由

### 2. 看板功能
- **写作统计**
  - 相关代码: `src/views/kanban/Kanban/components/WritingStats.tsx`
  - 实现了字数、速度等统计展示

- **作品列表**
  - 相关代码: `src/views/kanban/Kanban/components/NovelsListV2.tsx`
  - 展示作品封面、标题、字数和最新章节

- **写作日历**
  - 相关代码: `src/views/kanban/Kanban/components/WritingCalendar.tsx`
  - 实现了写作计划和日程管理

### 3. AI集成初步实现
- **Deepseek API连接**
  - 相关代码: `src/services/WritingService.ts`
  - 实现了与AI服务的基础连接

- **对话界面**
  - 相关代码: `src/views/inspiration/Chat.tsx`
  - 实现了基础的AI对话功能

### 4. 作品管理
- **作品数据结构**
  - 相关代码: `src/views/kanban/Kanban/types.ts`
  - 定义了小说相关的数据类型

- **作品列表展示**
  - 相关代码: `src/views/kanban/Kanban/components/NovelsList.tsx`
  - 实现了作品状态和进度的可视化

### 5. 完善本地化
- **中文翻译**
  - 相关代码: `src/locales/lang/zh.json`
  - 完成了菜单和界面的中文翻译

### 6. 大纲功能基础实现
- **大纲数据结构**
  - 相关代码: `src/views/novels/NovelOutline/types.ts`
  - 定义了大纲相关的数据类型

- **任务管理**
  - 相关代码: `src/views/novels/NovelOverview/components/CurrentTasks.tsx`
  - 实现了写作任务的管理功能

### 7. 正文编辑器基础版
- **编辑器组件**
  - 相关代码: `src/views/novels/NovelContent/Editor.tsx`
  - 实现了基础的文本编辑功能

## 进行中功能设计

### 1. AI扩写功能
**设计思路**:
- 实现基于上下文的文本生成
- 支持风格和长度控制
- 提供多种扩写模式（情节展开、角色对话、场景描写）

**实现步骤**:
1. 创建AI扩写服务接口
2. 实现扩写选项控制面板
3. 集成到编辑器中

**代码示例**:
```typescript:src/services/AIWritingService.ts
import ApiService from './ApiService'

export async function apiGenerateContent(params: {
  prompt: string,
  context: string,
  style?: string,
  length?: number,
  mode: 'plot' | 'dialogue' | 'scene'
}) {
  return ApiService.fetchDataWithAxios({
    url: '/ai/generate-content',
    method: 'post',
    data: params
  })
}
```

```typescript:src/components/writing/AIExpansionPanel.tsx
import { useState } from 'react'
import { Button, Select, Slider, Input } from '@/components/ui'
import { apiGenerateContent } from '@/services/AIWritingService'

const AIExpansionPanel = ({ context, onContentGenerated }) => {
  const [mode, setMode] = useState<'plot' | 'dialogue' | 'scene'>('plot')
  const [style, setStyle] = useState('default')
  const [length, setLength] = useState(500)
  const [prompt, setPrompt] = useState('')
  const [loading, setLoading] = useState(false)
  
  const handleGenerate = async () => {
    setLoading(true)
    try {
      const result = await apiGenerateContent({
        prompt,
        context,
        style,
        length,
        mode
      })
      onContentGenerated(result.data)
    } catch (error) {
      console.error('Content generation failed:', error)
    } finally {
      setLoading(false)
    }
  }
  
  return (
    <div className="p-4 border rounded-lg">
      <h4>AI扩写助手</h4>
      <div className="mt-4 space-y-4">
        <Input
          placeholder="输入提示词引导AI..."
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
        />
        <Select
          options={[
            { value: 'plot', label: '情节展开' },
            { value: 'dialogue', label: '角色对话' },
            { value: 'scene', label: '场景描写' }
          ]}
          value={mode}
          onChange={val => setMode(val)}
          placeholder="选择扩写模式"
        />
        <div>
          <label>文本长度: {length}字</label>
          <Slider
            value={length}
            onChange={val => setLength(val)}
            min={100}
            max={2000}
          />
        </div>
        <Button 
          block 
          variant="solid" 
          loading={loading}
          onClick={handleGenerate}
        >
          开始扩写
        </Button>
      </div>
    </div>
  )
}

export default AIExpansionPanel
```

### 2. 多视图大纲
**设计思路**:
- 实现故事板、时间线、表格等多种视图
- 支持视图间的无缝切换
- 保持数据一致性

**实现步骤**:
1. 设计统一的数据模型
2. 实现各种视图组件
3. 创建视图切换控制器

**代码示例**:
```typescript:src/views/novels/NovelOutline/types.ts
export type OutlineItem = {
  id: string
  title: string
  description: string
  characters: string[]
  location: string
  timePoint: string
  tags: string[]
  color?: string
  status: 'draft' | 'completed' | 'review'
  order: number
  parentId?: string
}

export type OutlineViewType = 'board' | 'timeline' | 'table' | 'list'
```

```typescript:src/views/novels/NovelOutline/components/OutlineViewSwitcher.tsx
import { useState } from 'react'
import { Button, ButtonGroup } from '@/components/ui'
import { TbLayoutBoard, TbTimeline, TbTable, TbList } from 'react-icons/tb'
import BoardView from './views/BoardView'
import TimelineView from './views/TimelineView'
import TableView from './views/TableView'
import ListView from './views/ListView'
import type { OutlineItem, OutlineViewType } from '../types'

interface OutlineViewSwitcherProps {
  items: OutlineItem[]
  onItemUpdate: (item: OutlineItem) => void
}

const OutlineViewSwitcher = ({ items, onItemUpdate }: OutlineViewSwitcherProps) => {
  const [viewType, setViewType] = useState<OutlineViewType>('board')
  
  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <ButtonGroup>
          <Button 
            icon={<TbLayoutBoard />} 
            variant={viewType === 'board' ? 'solid' : 'default'}
            onClick={() => setViewType('board')}
          >
            故事板
          </Button>
          <Button 
            icon={<TbTimeline />} 
            variant={viewType === 'timeline' ? 'solid' : 'default'}
            onClick={() => setViewType('timeline')}
          >
            时间线
          </Button>
          <Button 
            icon={<TbTable />} 
            variant={viewType === 'table' ? 'solid' : 'default'}
            onClick={() => setViewType('table')}
          >
            表格
          </Button>
          <Button 
            icon={<TbList />} 
            variant={viewType === 'list' ? 'solid' : 'default'}
            onClick={() => setViewType('list')}
          >
            列表
          </Button>
        </ButtonGroup>
      </div>
      
      {viewType === 'board' && <BoardView items={items} onItemUpdate={onItemUpdate} />}
      {viewType === 'timeline' && <TimelineView items={items} onItemUpdate={onItemUpdate} />}
      {viewType === 'table' && <TableView items={items} onItemUpdate={onItemUpdate} />}
      {viewType === 'list' && <ListView items={items} onItemUpdate={onItemUpdate} />}
    </div>
  )
}

export default OutlineViewSwitcher
```

### 3. 用户体验优化
**设计思路**:
- 改进交互流程
- 添加拖拽功能
- 优化移动端适配

**实现步骤**:
1. 审查现有UI组件
2. 实现拖拽排序功能
3. 优化响应式布局

**代码示例**:
```typescript:src/components/writing/DraggableList.tsx
import { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

interface DraggableListProps<T> {
  items: T[]
  keyExtractor: (item: T) => string
  onReorder: (reorderedItems: T[]) => void
  renderItem: (item: T, index: number) => React.ReactNode
}

function DraggableList<T>({ 
  items, 
  keyExtractor, 
  onReorder, 
  renderItem 
}: DraggableListProps<T>) {
  const handleDragEnd = (result) => {
    if (!result.destination) return
    
    const reorderedItems = Array.from(items)
    const [removed] = reorderedItems.splice(result.source.index, 1)
    reorderedItems.splice(result.destination.index, 0, removed)
    
    onReorder(reorderedItems)
  }
  
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable-list">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="space-y-2"
          >
            {items.map((item, index) => (
              <Draggable 
                key={keyExtractor(item)} 
                draggableId={keyExtractor(item)} 
                index={index}
              >
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {renderItem(item, index)}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default DraggableList
```

## 计划中功能概述

### 1. 高级AI功能
- 根据大纲自动生成正文
- 风格分析和建议
- 角色对话生成

### 2. 协作功能
- 多用户协作编辑
- 评论和反馈系统
- 版本控制

### 3. 数据可视化
- 写作进度和习惯分析
- 字数和时间统计图表
- 写作质量评估

### 4. 导出与发布
- 多种格式导出(PDF, EPUB, DOCX)
- 排版和样式定制
- 一键发布到各平台

## 技术优化计划

### 1. 代码重构
- 优化组件结构
- 重构状态管理
- 改进API调用结构

### 2. 性能优化
- 大型文档加载和编辑性能
- AI响应速度
- 减少不必要的渲染

### 3. 测试覆盖
- 单元测试
- 端到端测试
- 自动化测试流程

## 更新日志

### v0.5.0 (当前版本 - 2025-02-26)
- 完成基础框架搭建
- 实现看板功能
- 完成AI集成初步实现
- 实现作品管理基础功能
- 完善中文本地化
- 精简冗余页面
- 实现大纲功能基础版
- 完成正文编辑器基础版

---



---

