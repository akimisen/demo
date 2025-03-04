项目概述
本项目是一个基于现有模板改造的写作助手应用，旨在为作者提供全方位的写作支持工具。通过接入AI技术，实现智能化的写作辅助、大纲管理和灵感激发功能，类似于市面上的Scrivener或Plottr等专业写作软件，但增加了AI赋能的特性。

任务清单：
| 任务编号 | 模块          | 任务概述                                         | 完成度%   |
|----|---------------|--------------------------------------------------|--------|
| 1  | novel-api     | 如何设计数据结构，增删改api                                 | 0 |
| 2  | novel-outline  | 实现novel outline视图（列表，表格，时间线，故事板）    | 0 |
| 3  | novel—editor   | 实现novel editor视图，增删改api                 | 0 |
| 4  | kanban-writingcalendar | 添加按钮：新增任务，查看全部 | 80 |
| 5  | kanban-novelboard | 优化样式：设置空封面null.png；图片对齐文字 | 70 |
| 7  | novel-editor-tool | 起名小工具-ai版，大纲及章节概要打包作为context提交 | 0 |
| 8  | kanban      | kanban，如何设置灰色背景             | 0 |
| 9  | nav-icon     | navigation tree中的icon如何配置             | 10 |
| 10 | novel-api-userNovels  | 输出数据按作品进度排序，施工中>规划中>已完结 | 0 |


ideas:
1.后端采用mongo储存数据，本地采用json文件，这样两者数据结构实质上保持一致，方便统一管理和导入导出。文档格式可以参考plottr


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

已完成功能详情
1. 基础框架搭建
导航结构实现
相关代码: src/configs/navigation.config/novels.navigation.config.ts, src/configs/navigation.config/inspiration.navigation.config.ts
实现了作品管理和灵感源泉的导航配置
路由配置
相关代码: src/configs/routes.config/novelsRoute.ts, src/configs/routes.config/inspirationRoute.ts
配置了大纲、内容编辑器、AI扩写等路由
2. 看板功能
写作统计
相关代码: src/views/kanban/Kanban/components/WritingStats.tsx
实现了字数、速度等统计展示
作品列表
相关代码: src/views/kanban/Kanban/components/NovelsListV2.tsx
展示作品封面、标题、字数和最新章节
写作日历
相关代码: src/views/kanban/Kanban/components/WritingCalendar.tsx
实现了写作计划和日程管理
3. AI集成初步实现
Deepseek API连接
相关代码: src/services/WritingService.ts
实现了与AI服务的基础连接
对话界面
相关代码: src/views/inspiration/Chat.tsx
实现了基础的AI对话功能
4. 作品管理
作品数据结构
相关代码: src/views/kanban/Kanban/types.ts
定义了小说相关的数据类型
作品列表展示
相关代码: src/views/kanban/Kanban/components/NovelsList.tsx
实现了作品状态和进度的可视化
5. 完善本地化
中文翻译
相关代码: src/locales/lang/zh.json
完成了菜单和界面的中文翻译
6. 大纲功能基础实现
大纲数据结构
相关代码: src/views/novels/NovelOutline/types.ts
定义了大纲相关的数据类型
任务管理
相关代码: src/views/novels/NovelOverview/components/CurrentTasks.tsx
实现了写作任务的管理功能
7. 正文编辑器基础版
编辑器组件
相关代码: src/views/novels/NovelContent/Editor.tsx
实现了基础的文本编辑功能


进行中功能设计
1. AI扩写功能
设计思路:
实现基于上下文的文本生成
支持风格和长度控制
提供多种扩写模式（情节展开、角色对话、场景描写）
实现步骤:
创建AI扩写服务接口
实现扩写选项控制面板
集成到编辑器中

代码示例：
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
...

2. 多视图大纲
设计思路:
实现故事板、时间线、表格等多种视图
支持视图间的无缝切换
保持数据一致性
实现步骤:
设计统一的数据模型
实现各种视图组件
创建视图切换控制器


3. 用户体验优化
设计思路:
改进交互流程
添加拖拽功能
优化移动端适配
实现步骤:
审查现有UI组件
实现拖拽排序功能
优化响应式布局

计划中功能概述
1. 高级AI功能
根据大纲自动生成正文
风格分析和建议
角色对话生成
2. 协作功能
多用户协作编辑
评论和反馈系统
版本控制
3. 数据可视化
写作进度和习惯分析
字数和时间统计图表
写作质量评估
4. 导出与发布
多种格式导出(PDF, EPUB, DOCX)
排版和样式定制
一键发布到各平台
技术优化计划
1. 代码重构
优化组件结构
重构状态管理
改进API调用结构
2. 性能优化
大型文档加载和编辑性能
AI响应速度
减少不必要的渲染
3. 测试覆盖
单元测试
端到端测试
自动化测试流程

更新日志
v0.5.0 (当前版本 - 2025-02-26)
完成基础框架搭建
实现看板功能
完成AI集成初步实现
实现作品管理基础功能
完善中文本地化
精简冗余页面
实现大纲功能基础版
完成正文编辑器基础版

