## SpecStory

## Navigation Bar Modification and Configuration (2/20/2025, 8:43:11 PM)

_**User**_

用中文回答

---

_**Assistant**_

根据您的需求，我将帮您修改导航栏和相关配置。主要需要修改以下几个文件：

1. 首先修改语言配置文件，添加新的导航项翻译：

```json:src/locales/lang/zh.json
{
    "nav": {
        // 删除或注释掉不需要的导航项...
        "writing": {
            "writing": "写作",
            "outline": "大纲",
            "outlineCharacters": "人物",
            "outlineLocations": "地点", 
            "outlinePlots": "情节",
            "outlineBoard": "故事板",
            "outlineTimeline": "时间线",
            "outlineTable": "表格视图",
            "outlineList": "列表视图",
            "content": "正文",
            "contentEditor": "编辑器",
            "contentAI": "AI辅助",
            "inspiration": "灵感",
            "inspirationChat": "对话启发",
            "inspirationImage": "设定图"
        },
        // 保留 conceptsAi 部分用于复用AI功能
        "conceptsAi": {
            "ai": "人工智能",
            "chat": "聊天",
            "image": "图片"
        }
        // 其他不相关的导航项可以删除...
    }
}
```

2. 创建新的导航配置文件：

```typescript:src/configs/navigation.config/writing.navigation.config.ts
import { WRITING_PREFIX_PATH } from '@/constants/route.constant'
import {
    NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_COLLAPSE,
    NAV_ITEM_TYPE_ITEM,
} from '@/constants/navigation.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { NavigationTree } from '@/@types/navigation'

const writingNavigationConfig: NavigationTree[] = [
    {
        key: 'writing',
        path: '',
        title: '写作',
        translateKey: 'nav.writing.writing',
        icon: 'writing',
        type: NAV_ITEM_TYPE_TITLE,
        authority: [ADMIN, USER],
        subMenu: [
            {
                key: 'writing.outline',
                path: '',
                title: '大纲',
                translateKey: 'nav.writing.outline',
                icon: 'outline',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                subMenu: [
                    {
                        key: 'writing.outline.characters',
                        path: `${WRITING_PREFIX_PATH}/outline/characters`,
                        title: '人物',
                        translateKey: 'nav.writing.outlineCharacters',
                        icon: 'characters',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        subMenu: [],
                    },
                    // 类似地添加地点、情节等子菜单...
                    {
                        key: 'writing.outline.board',
                        path: `${WRITING_PREFIX_PATH}/outline/board`,
                        title: '故事板',
                        translateKey: 'nav.writing.outlineBoard',
                        icon: 'board',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        subMenu: [],
                    },
                    // 添加时间线、表格、列表视图...
                ]
            },
            {
                key: 'writing.content',
                path: '',
                title: '正文',
                translateKey: 'nav.writing.content',
                icon: 'content',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                subMenu: [
                    {
                        key: 'writing.content.editor',
                        path: `${WRITING_PREFIX_PATH}/content/editor`,
                        title: '编辑器',
                        translateKey: 'nav.writing.contentEditor',
                        icon: 'editor',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        subMenu: [],
                    },
                    {
                        key: 'writing.content.ai',
                        path: `${WRITING_PREFIX_PATH}/content/ai`,
                        title: 'AI辅助',
                        translateKey: 'nav.writing.contentAI',
                        icon: 'ai',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        subMenu: [],
                    }
                ]
            },
            {
                key: 'writing.inspiration',
                path: '',
                title: '灵感',
                translateKey: 'nav.writing.inspiration', 
                icon: 'inspiration',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                subMenu: [
                    {
                        key: 'writing.inspiration.chat',
                        path: `${WRITING_PREFIX_PATH}/inspiration/chat`,
                        title: '对话启发',
                        translateKey: 'nav.writing.inspirationChat',
                        icon: 'chat',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        subMenu: [],
                    },
                    {
                        key: 'writing.inspiration.image',
                        path: `${WRITING_PREFIX_PATH}/inspiration/image`,
                        title: '设定图',
                        translateKey: 'nav.writing.inspirationImage',
                        icon: 'image',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        subMenu: [],
                    }
                ]
            }
        ],
    },
]

export default writingNavigationConfig
```

3. 添加路由常量：

```typescript:src/constants/route.constant.ts
// 添加写作模块的路由前缀
export const WRITING_PREFIX_PATH = '/writing'
```

4. 创建写作模块的路由配置：

```typescript:src/configs/routes.config/writingRoute.ts
import { lazy } from 'react'
import { WRITING_PREFIX_PATH } from '@/constants/route.constant'
import type { Routes } from '@/@types/routes'

const writingRoute: Routes = [
    {
        key: 'writing.outline.characters',
        path: `${WRITING_PREFIX_PATH}/outline/characters`,
        component: lazy(() => import('@/views/writing/outline/Characters')),
        authority: [],
    },
    // 添加其他路由...
]

export default writingRoute
```

5. 修改主导航配置文件，整合新的写作导航：

```typescript:src/configs/navigation.config/index.ts
import writingNavigationConfig from './writing.navigation.config'
// 其他导入...

const navigationConfig = [
    ...writingNavigationConfig,
    // 保留需要的其他导航配置...
]

export default navigationConfig
```

这些修改完成后，您需要：

1. 在 `src/views/writing/` 目录下创建对应的组件文件
2. 为新的导航项添加图标配置（在 navigation-icon.config 中）
3. 如果需要复用AI聊天和图片生成功能，可以参考原有的实现进行改造

这样就完成了基本的导航栏改造。您可以根据需要继续调整样式、布局等细节。

---



---

