import { KANBAN_PREFIX_PATH } from '@/constants/route.constant'
import {
    // NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_ITEM,
} from '@/constants/navigation.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { NavigationTree } from '@/@types/navigation'

const kanbanNavigationConfig: NavigationTree[] = [
    {
        key: 'kanban',
        path: `${KANBAN_PREFIX_PATH}`,
        title: '看板',
        translateKey: 'nav.kanban.kanban',
        icon: 'kanban',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [ADMIN, USER],
        meta: {
            horizontalMenu: {
                layout: 'default',
            },
        },
        subMenu: [],
    },
]

export default kanbanNavigationConfig
