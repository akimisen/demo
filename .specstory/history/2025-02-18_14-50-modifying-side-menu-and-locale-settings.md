## SpecStory

## Modifying Side Menu and Locale Settings (2/18/2025, 2:50:30 PM)

_**User**_

解读这个项目的源代码，告诉我1-如何修改这个sidemenu的具体菜单，然后如何修改对应的路由，2-如何设置默认的locale语言

---

_**Assistant**_

我来帮你解答这两个问题:

### 1. 修改侧边菜单和路由

侧边菜单的配置主要在以下几个文件中:

1. 菜单配置文件位于 `src/configs/navigation.config/` 目录下,包含多个导航配置文件如:
- concepts.navigation.config.ts
- dashboards.navigation.config.ts 
- auth.navigation.config.ts
- guide.navigation.config.ts

每个菜单项的结构如下:

```typescript
const menuConfig: NavigationTree[] = [
  {
    key: 'unique-key',           // 唯一标识
    path: '/your-path',          // 路由路径
    title: 'Menu Title',         // 菜单标题
    translateKey: 'nav.key',     // 翻译key
    icon: 'iconName',            // 图标名称
    type: NAV_ITEM_TYPE_ITEM,    // 菜单类型(ITEM/COLLAPSE/TITLE)
    authority: [ADMIN, USER],    // 权限控制
    subMenu: []                  // 子菜单
  }
]
```

2. 路由配置需要在对应的路由配置文件中添加,位于 `src/configs/routes.config/` 目录。

例如添加一个新的菜单项和路由:

1) 在 navigation.config 中添加菜单项:

```typescript
{
    key: 'myNewPage',
    path: '/my-new-page',
    title: 'My Page',
    translateKey: 'nav.myPage',
    icon: 'myIcon',
    type: NAV_ITEM_TYPE_ITEM,
    authority: [ADMIN, USER],
    subMenu: []
}
```

2) 在路由配置中添加对应路由:

```typescript
{
    key: 'myNewPage',
    path: '/my-new-page',
    component: lazy(() => import('@/views/mypage')),
    authority: [ADMIN, USER]
}
```

### 2. 设置默认语言

有两种方式设置默认语言:

1. 在 app.config.ts 中修改默认语言:


```11:19:src/configs/app.config.ts
const appConfig: AppConfig = {
    apiPrefix: '/api',
    authenticatedEntryPath: '/dashboards/ecommerce',
    unAuthenticatedEntryPath: '/sign-in',
    locale: 'en',
    accessTokenPersistStrategy: 'localStorage',
    enableMock: true,
    activeNavTranslation: true,
}
```


将 `locale` 修改为需要的语言代码,如 'zh'、'es'、'ar' 等。

2. 添加新的语言支持:

a) 在 `src/locales/lang/` 目录下添加新的语言文件,如 `fr.json`

b) 在 `src/locales/locales.ts` 中注册新语言:

```typescript
// 添加语言资源
const resources = {
  en: { translation: en },
  zh: { translation: zh },
  fr: { translation: fr }  // 新增语言
}

// 添加日期本地化
export const dateLocales = {
  en: () => import('dayjs/locale/en'),
  zh: () => import('dayjs/locale/zh'),
  fr: () => import('dayjs/locale/fr')  // 新增语言
}
```

c) 在 `src/components/template/LanguageSelector.tsx` 中添加语言选项:

```typescript
const languageList = [
  { label: 'English', value: 'en', flag: 'US' },
  { label: 'Chinese', value: 'zh', flag: 'CN' },
  { label: 'French', value: 'fr', flag: 'FR' }  // 新增语言
]
```

这样就完成了菜单路由的添加和默认语言的设置。记得在添加新的语言时,需要提供完整的翻译文件。

---

_**User**_

我如何移除这个主题设置的button，或者设置为不启用

---

_**Assistant**_

要移除或禁用主题设置按钮，你需要修改相关的配置或组件。根据代码中的红框标注，这个按钮应该是一个主题设置组件。

有以下几种方式可以处理：

1. 直接在布局组件中移除这个按钮。找到包含这个按钮的布局组件，通常在 `src/components/template/Header` 或类似的位置。

```typescript:src/components/template/Header.tsx
// 找到类似这样的代码
return (
    <Header>
        {/* ... other header items ... */}
        {/* 注释掉或删除下面这行 */}
        {/* <ThemeConfigurator /> */}
    </Header>
)
```

2. 如果有专门的配置文件控制这个功能，可以在配置中禁用它。查找 `src/configs/theme.config.ts` 或类似的配置文件：

```typescript:src/configs/theme.config.ts
export const themeConfig = {
    // ... other config
    showThemeConfigurator: false, // 添加这个配置项
    // ... other config
}
```

3. 如果这个组件是通过条件渲染的，可以设置相关的状态或配置来控制其显示：

```typescript:src/components/template/ThemeConfigurator.tsx
const ThemeConfigurator = () => {
    // 添加条件返回 null
    if (process.env.NODE_ENV === 'production') {
        return null
    }
    
    // ... rest of the component code
}
```

建议先找到这个按钮对应的组件代码，然后选择最合适的方式来禁用它。通常在 Header 组件或者布局相关的组件中会找到这个主题配置按钮的实现。

如果你需要更具体的指导，可以分享一下 Header 组件或者主题配置相关的代码，我可以提供更精确的修改建议。

---

_**User**_

我需要把这个前端模板，修改为我当前需要的版本。1-帮我重新设计菜单结构，我想实现的功能如下：[写作助手app]
1.大纲
	人物
	地点
	事件（功能：故事板\时间线\tags\颜色标签\导出pdf）
2.正文
	文本编辑器
	自动扩写功能（接入deepseek api；正文→大纲；大纲→正文）
3.灵感
	deepseek聊天，头脑风暴（复用该前端模板中的人工智能>聊天页面）
	 生成人物、场景设定图（复用该前端模板中的人工智能>图片页面，但是可以关联灵感、大纲等既有内容，根据这些文字设定自动发散思考，提供一些可能的思路选项，帮助写作者头脑风暴）
2-我应该如何修改左菜单栏的结构？具体修改哪些代码？

---

_**Assistant**_

<think>

好的，我需要帮助用户将现有的前端模板修改为写作助手应用，主要调整侧边菜单结构和功能。用户的需求分为三个主要部分：大纲、正文和灵感，每个部分下有不同的子功能。我需要先理解用户的具体需求，然后对应到代码结构上，确定需要修改哪些文件。

首先，用户提到的菜单结构需要重新设计。根据现有项目结构，导航配置应该在src/configs/navigation.config/目录下，可能有多个配置文件，如dashboards.navigation.config.ts等。需要创建一个新的导航配置文件，比如writing.navigation.config.ts，或者修改现有的来包含新的菜单项。

接下来，每个菜单项的结构需要符合用户的需求。例如，大纲部分包含人物、地点、事件，而事件下又有故事板、时间线、tags、颜色标签、导出PDF等功能。这些需要转化为导航配置中的subMenu数组。同时，正文部分需要文本编辑器和自动扩写功能，后者需要接入DeepSeek API，并可能涉及路由配置。灵感部分需要复用现有的AI聊天和图片生成页面，但需要关联已有内容，可能需要传递参数或调整组件逻辑。

然后，路由配置需要对应新的菜单项。在src/configs/routes.config/目录下，可能需要添加新的路由，如/writing/outline/events等，确保每个路径有对应的组件。例如，文本编辑器可能对应一个新建的组件，需要创建或引用现有的编辑器组件。

关于左菜单栏的修改，需要确定现有的导航配置是如何组合的。可能需要在主导航配置中引入新的writing导航配置，并调整顺序，确保新菜单显示在侧边栏的正确位置。同时，检查权限设置，确保用户有权访问这些新功能。

对于多语言支持，需要更新翻译文件，添加新菜单项的translateKey，如nav.writing.outline等，确保在不同语言环境下显示正确。

可能还需要调整布局组件，确保菜单的图标、标题等正确显示。图标部分可能需要使用项目已有的图标库，或添加新的图标。

最后，测试修改后的导航和路由，确保点击菜单项能正确跳转，并且功能页面正常显示。如果有接入API的部分，如DeepSeek，需要确认API调用是否正确配置，可能需要修改相关服务文件或环境变量。

总结步骤：
1. 创建或修改导航配置文件，定义新的菜单结构。
2. 添加或修改路由配置，指向对应的组件。
3. 调整主导航配置，包含新的菜单项。
4. 更新多语言翻译文件。
5. 创建或调整相关组件，实现功能页面。
6. 测试导航和功能，确保一切正常。
</think>

根据你的需求，我们需要修改导航配置和路由配置。以下是具体的修改步骤：

### 1. 修改菜单结构
需要修改导航配置文件 `src/configs/navigation.config/` 目录下的相关文件（建议新建 `writing.navigation.config.ts`）

```typescript:src/configs/navigation.config/writing.navigation.config.ts
import { NAV_ITEM_TYPE_ITEM } from '@/constants/navigation.constant'
import type { NavigationTree } from '@/@types/navigation'

const writingMenuConfig: NavigationTree[] = [
  {
    key: 'writing',
    path: '/writing',
    title: '写作助手',
    translateKey: 'nav.writing',
    icon: 'writing',
    type: NAV_ITEM_TYPE_ITEM,
    subMenu: [
      {
        key: 'outline',
        path: '/writing/outline',
        title: '大纲',
        translateKey: 'nav.writing.outline',
        icon: 'outline',
        subMenu: [
          {
            key: 'characters',
            path: '/writing/outline/characters',
            title: '人物设定',
            translateKey: 'nav.writing.outline.characters'
          },
          {
            key: 'locations',
            path: '/writing/outline/locations',
            title: '地点设定',
            translateKey: 'nav.writing.outline.locations'
          },
          {
            key: 'events',
            path: '/writing/outline/events',
            title: '事件编排',
            translateKey: 'nav.writing.outline.events',
            subMenu: [
              { key: 'storyboard', title: '故事板', path: '/writing/outline/events/storyboard' },
              { key: 'timeline', title: '时间线', path: '/writing/outline/events/timeline' },
              { key: 'tags', title: '标签管理', path: '/writing/outline/events/tags' },
              { key: 'export', title: '导出PDF', path: '/writing/outline/events/export' }
            ]
          }
        ]
      },
      {
        key: 'content',
        path: '/writing/content',
        title: '正文创作',
        translateKey: 'nav.writing.content',
        icon: 'document',
        subMenu: [
          {
            key: 'editor',
            path: '/writing/content/editor',
            title: '文本编辑器',
            translateKey: 'nav.writing.content.editor'
          },
          {
            key: 'auto-expand',
            path: '/writing/content/auto-expand',
            title: '智能扩写',
            translateKey: 'nav.writing.content.autoExpand'
          }
        ]
      },
      {
        key: 'inspiration',
        path: '/writing/inspiration',
        title: '灵感工坊',
        translateKey: 'nav.writing.inspiration',
        icon: 'lightbulb',
        subMenu: [
          {
            key: 'brainstorm',
            path: '/writing/inspiration/brainstorm',
            title: '头脑风暴',
            translateKey: 'nav.writing.inspiration.brainstorm'
          },
          {
            key: 'character-design',
            path: '/writing/inspiration/character-design',
            title: '人物生成',
            translateKey: 'nav.writing.inspiration.characterDesign'
          },
          {
            key: 'scene-design',
            path: '/writing/inspiration/scene-design',
            title: '场景生成',
            translateKey: 'nav.writing.inspiration.sceneDesign'
          }
        ]
      }
    ]
  }
]

export default writingMenuConfig
```

### 2. 修改路由配置
在 `src/configs/routes.config/` 目录下新建 `writing.routes.config.ts`：

```typescript:src/configs/routes.config/writing.routes.config.ts
import { lazy } from 'react'

const writingRoutes = [
  {
    key: 'writing',
    path: '/writing/*',
    component: lazy(() => import('@/views/writing')),
    authority: ['user', 'admin']
  },
  {
    key: 'outline.events.storyboard',
    path: '/writing/outline/events/storyboard',
    component: lazy(() => import('@/views/writing/outline/Storyboard')),
    authority: ['user', 'admin']
  },
  // 其他子路由按相同模式添加...
  {
    key: 'content.editor',
    path: '/writing/content/editor',
    component: lazy(() => import('@/views/writing/content/Editor')),
    authority: ['user', 'admin']
  },
  {
    key: 'content.autoExpand',
    path: '/writing/content/auto-expand',
    component: lazy(() => import('@/views/writing/content/AutoExpand')),
    authority: ['user', 'admin']
  },
  {
    key: 'inspiration.brainstorm',
    path: '/writing/inspiration/brainstorm',
    component: lazy(() => import('@/views/ai/Chat')),
    authority: ['user', 'admin'],
    meta: {
      header: '头脑风暴',
      headerTranslation: 'nav.writing.inspiration.brainstorm'
    }
  }
]

export default writingRoutes
```

### 3. 集成到主配置
在 `src/configs/navigation.config/index.ts` 中引入新配置：

```typescript:src/configs/navigation.config/index.ts
// ... existing imports ...
import writingMenuConfig from './writing.navigation.config'

const navigationConfig: NavigationTree[] = [
  ...dashboardsMenuConfig,
  ...writingMenuConfig, // 新增的写作菜单
  ...appsMenuConfig,
  // ... 其他现有配置...
]
```

### 4. 需要创建对应的视图组件
在 `src/views/` 目录下新建以下结构：
```
/writing
  /outline
    Storyboard.tsx
    Timeline.tsx
    Tags.tsx
    ExportPdf.tsx
  /content
    Editor.tsx
    AutoExpand.tsx
  /inspiration
    CharacterDesign.tsx
    SceneDesign.tsx
```

### 5. 多语言配置
在 `src/locales/lang/` 的各语言文件中添加翻译键：

```json:src/locales/lang/zh.json
{
  "nav": {
    "writing": "写作助手",
    "writing.outline": "大纲设计",
    "writing.outline.characters": "人物设定",
    "writing.content.autoExpand": "智能扩写",
    // ...其他翻译键...
  }
}
```

### 6. 复用AI组件的技巧
对于灵感工坊的AI功能，可以通过路由参数复用现有组件：

```typescript:src/configs/routes.config/writing.routes.config.ts
{
  key: 'inspiration.brainstorm',
  path: '/writing/inspiration/brainstorm/:contextId?',
  component: lazy(() => import('@/views/ai/Chat')),
  meta: {
    presetContext: 'writing' // 用于区分不同场景的AI交互
  }
}
```

然后在AI组件中根据预设上下文加载不同的提示词模板：

```typescript:src/views/ai/Chat.tsx
const contextPresets = {
  writing: {
    systemPrompt: '你是一个专业写作助手，请根据用户提供的故事大纲...',
    defaultMessages: []
  }
}
```

这些修改完成后，侧边栏会自动显示新的菜单结构。需要确保：
1. 图标资源已存在或已添加
2. 路由权限配置正确
3. 各视图组件已创建基础结构
4. 翻译文件已同步更新

---

_**User**_

当前的writing文件有问题，仿照concepts重新修改

---

_**Assistant**_

<think>
好的，用户提到当前的writing.navigation.config.ts文件有问题，需要仿照concepts.navigation.config.ts进行修改。首先，我需要比较用户提供的concepts配置和现有的writing配置之间的差异，找出需要调整的地方。

查看concepts.navigation.config.ts的结构，发现每个顶级菜单项的类型是NAV_ITEM_TYPE_TITLE，而writing配置中使用了NAV_ITEM_TYPE_ITEM。这可能是一个错误，因为TITLE类型通常用于主菜单分类，而ITEM用于子项。因此，需要将writing的type改为NAV_ITEM_TYPE_TITLE。

接下来，concepts中的每个子菜单项（如AI、Projects）使用NAV_ITEM_TYPE_COLLAPSE，而writing中的子菜单可能没有正确设置类型。例如，outline、content、inspiration应该设置为COLLAPSE类型，以便能够展开子菜单。

另外，concepts中的路径使用了CONCEPTS_PREFIX_PATH常量，而writing的路径直接写了字符串。为了提高可维护性，应该为writing创建一个新的前缀路径常量，比如WRITING_PREFIX_PATH，并在路径中使用它。

权限设置方面，concepts中每个菜单项都明确指定了authority为[ADMIN, USER]，而writing的配置可能遗漏了这些权限设置，需要补充。

此外，concepts中的每个菜单项包含meta描述信息，而writing的配置中没有。为了保持一致性，应该为writing的菜单项添加类似的meta描述，特别是对于需要水平菜单布局的部分。

还需要检查图标名称是否正确，确保所有使用的图标在项目中存在，比如将'writing'改为项目中原有的图标名称，如'book'或'penTool'，避免出现图标不显示的问题。

最后，确保在src/configs/navigation.config/index.ts中正确导入并合并新的writing菜单配置，以便在侧边栏中显示。

总结需要修改的步骤：
1. 修改顶级菜单项类型为NAV_ITEM_TYPE_TITLE。
2. 为子菜单项设置正确的COLLAPSE类型。
3. 使用WRITING_PREFIX_PATH常量定义路径前缀。
4. 添加authority权限配置。
5. 补充meta描述信息，特别是水平菜单布局设置。
6. 调整图标名称以匹配现有资源。
7. 在导航配置索引文件中导入新的writing配置。

完成这些修改后，writing菜单的结构和样式将与concepts保持一致，确保功能正常且符合项目规范。
</think>

根据 concepts 的配置结构，修改后的写作菜单配置如下：

```typescript:src/configs/navigation.config/writing.navigation.config.ts
import { WRITING_PREFIX_PATH } from '@/constants/route.constant'
import {
    NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_COLLAPSE,
    NAV_ITEM_TYPE_ITEM,
} from '@/constants/navigation.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { NavigationTree } from '@/@types/navigation'

const writingMenuConfig: NavigationTree[] = [
    {
        key: 'writing',
        path: '',
        title: '写作助手',
        translateKey: 'nav.writing',
        icon: 'book', // 使用已有图标
        type: NAV_ITEM_TYPE_TITLE,
        authority: [ADMIN, USER],
        meta: {
            horizontalMenu: {
                layout: 'columns',
                columns: 3,
            },
        },
        subMenu: [
            {
                key: 'writing.outline',
                path: '',
                title: '大纲设计',
                translateKey: 'nav.writing.outline',
                icon: 'outline',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey: 'nav.writing.outlineDesc',
                        label: '故事大纲与设定管理',
                    },
                },
                subMenu: [
                    {
                        key: 'writing.outline.characters',
                        path: `${WRITING_PREFIX_PATH}/outline/characters`,
                        title: '人物设定',
                        translateKey: 'nav.writing.outline.characters',
                        icon: 'user',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.writing.outline.charactersDesc',
                                label: '管理故事人物设定',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'writing.outline.locations',
                        path: `${WRITING_PREFIX_PATH}/outline/locations`,
                        title: '地点设定',
                        translateKey: 'nav.writing.outline.locations',
                        icon: 'mapPin',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.writing.outline.locationsDesc',
                                label: '管理故事场景地点',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'writing.outline.events',
                        path: '',
                        title: '事件编排',
                        translateKey: 'nav.writing.outline.events',
                        icon: 'timeline',
                        type: NAV_ITEM_TYPE_COLLAPSE,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.writing.outline.eventsDesc',
                                label: '故事时间线与事件管理',
                            },
                        },
                        subMenu: [
                            {
                                key: 'writing.outline.events.storyboard',
                                path: `${WRITING_PREFIX_PATH}/outline/events/storyboard`,
                                title: '故事板',
                                translateKey: 'nav.writing.outline.events.storyboard',
                                icon: 'layout',
                                type: NAV_ITEM_TYPE_ITEM,
                                authority: [ADMIN, USER],
                                subMenu: [],
                            },
                            {
                                key: 'writing.outline.events.timeline',
                                path: `${WRITING_PREFIX_PATH}/outline/events/timeline`,
                                title: '时间线',
                                translateKey: 'nav.writing.outline.events.timeline',
                                icon: 'clock',
                                type: NAV_ITEM_TYPE_ITEM,
                                authority: [ADMIN, USER],
                                subMenu: [],
                            },
                            {
                                key: 'writing.outline.events.tags',
                                path: `${WRITING_PREFIX_PATH}/outline/events/tags`,
                                title: '标签管理',
                                translateKey: 'nav.writing.outline.events.tags',
                                icon: 'tag',
                                type: NAV_ITEM_TYPE_ITEM,
                                authority: [ADMIN, USER],
                                subMenu: [],
                            },
                            {
                                key: 'writing.outline.events.export',
                                path: `${WRITING_PREFIX_PATH}/outline/events/export`,
                                title: '导出PDF',
                                translateKey: 'nav.writing.outline.events.export',
                                icon: 'download',
                                type: NAV_ITEM_TYPE_ITEM,
                                authority: [ADMIN, USER],
                                subMenu: [],
                            },
                        ],
                    },
                ],
            },
            {
                key: 'writing.content',
                path: '',
                title: '正文创作',
                translateKey: 'nav.writing.content',
                icon: 'edit',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey: 'nav.writing.contentDesc',
                        label: '正文创作与智能辅助',
                    },
                },
                subMenu: [
                    {
                        key: 'writing.content.editor',
                        path: `${WRITING_PREFIX_PATH}/content/editor`,
                        title: '文本编辑器',
                        translateKey: 'nav.writing.content.editor',
                        icon: 'type',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        subMenu: [],
                    },
                    {
                        key: 'writing.content.autoExpand',
                        path: `${WRITING_PREFIX_PATH}/content/auto-expand`,
                        title: '智能扩写',
                        translateKey: 'nav.writing.content.autoExpand',
                        icon: 'magic',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        subMenu: [],
                    },
                ],
            },
            {
                key: 'writing.inspiration',
                path: '',
                title: '灵感工坊',
                translateKey: 'nav.writing.inspiration',
                icon: 'lightbulb',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey: 'nav.writing.inspirationDesc',
                        label: 'AI辅助创意生成',
                    },
                },
                subMenu: [
                    {
                        key: 'writing.inspiration.brainstorm',
                        path: `${WRITING_PREFIX_PATH}/inspiration/brainstorm`,
                        title: '头脑风暴',
                        translateKey: 'nav.writing.inspiration.brainstorm',
                        icon: 'messageCircle',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        subMenu: [],
                    },
                    {
                        key: 'writing.inspiration.characterDesign',
                        path: `${WRITING_PREFIX_PATH}/inspiration/character-design`,
                        title: '人物生成',
                        translateKey: 'nav.writing.inspiration.characterDesign',
                        icon: 'users',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        subMenu: [],
                    },
                    {
                        key: 'writing.inspiration.sceneDesign',
                        path: `${WRITING_PREFIX_PATH}/inspiration/scene-design`,
                        title: '场景生成',
                        translateKey: 'nav.writing.inspiration.sceneDesign',
                        icon: 'image',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        subMenu: [],
                    },
                ],
            },
        ],
    },
]

export default writingMenuConfig
```

需要同步进行的修改：

1. 在 `src/constants/route.constant.ts` 添加路由常量：
```typescript
export const WRITING_PREFIX_PATH = '/writing'
```

2. 在 `src/locales/lang/zh.json` 添加翻译：
```json
"nav": {
    "writing": "写作助手",
    "writing.outline": "大纲设计",
    "writing.outlineDesc": "故事大纲与设定管理",
    "writing.outline.characters": "人物设定",
    "writing.outline.charactersDesc": "管理故事人物设定",
    "writing.outline.locations": "地点设定",
    "writing.outline.locationsDesc": "管理故事场景地点",
    "writing.outline.events": "事件编排",
    "writing.outline.eventsDesc": "故事时间线与事件管理",
    "writing.content": "正文创作",
    "writing.contentDesc": "正文创作与智能辅助",
    "writing.content.editor": "文本编辑器",
    "writing.content.autoExpand": "智能扩写",
    "writing.inspiration": "灵感工坊",
    "writing.inspirationDesc": "AI辅助创意生成",
    "writing.inspiration.brainstorm": "头脑风暴",
    "writing.inspiration.characterDesign": "人物生成",
    "writing.inspiration.sceneDesign": "场景生成"
}
```

主要改进点：
1. 使用标准的NAV_ITEM_TYPE_TITLE作为根菜单类型
2. 添加完整的meta描述信息
3. 使用项目现有的图标名称
4. 规范key的命名层级（writing.xxx.xxx）
5. 添加权限控制[ADMIN, USER]
6. 使用统一的路由前缀常量
7. 完善多语言翻译配置

---



---

