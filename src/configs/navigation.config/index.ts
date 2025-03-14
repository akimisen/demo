import kanbanNavigationConfig from './kanban.navigation.config'
import novelNavigationConfig from './novel.navigation.config'
import inspirationNavigationConfig from './inspiration.navigation.config'
import dashboardsNavigationConfig from './dashboards.navigation.config'
import uiComponentNavigationConfig from './ui-components.navigation.config'
import conceptsNavigationConfig from './concepts.navigation.config'
import authNavigationConfig from './auth.navigation.config'
import guideNavigationConfig from './guide.navigation.config'
import type { NavigationTree } from '@/@types/navigation'

const navigationConfig: NavigationTree[] = [
    ...kanbanNavigationConfig,
    ...novelNavigationConfig,
    ...inspirationNavigationConfig,
    ...dashboardsNavigationConfig,
    ...conceptsNavigationConfig,
    ...uiComponentNavigationConfig,
    ...authNavigationConfig,
    ...guideNavigationConfig,
]

export default navigationConfig
