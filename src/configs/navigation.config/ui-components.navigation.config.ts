import { UI_COMPONENTS_PREFIX_PATH } from '@/constants/route.constant'
import {
    NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_COLLAPSE,
    NAV_ITEM_TYPE_ITEM,
} from '@/constants/navigation.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { NavigationTree } from '@/@types/navigation'

const uiComponentNavigationConfig: NavigationTree[] = [
    {
        key: 'uiComponent',
        path: '',
        title: 'Ui Component',
        translateKey: 'nav.uiComponents',
        icon: 'uiComponents',
        type: NAV_ITEM_TYPE_TITLE,
        authority: [ADMIN, USER],
        meta: {
            horizontalMenu: {
                layout: 'tabs',
                columns: 2,
            },
        },
        subMenu: [
            {
                key: 'uiComponent.common',
                path: '',
                title: 'Common',
                translateKey: 'nav.uiComponentsCommon.common',
                icon: 'common',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey: 'nav.uiComponentsCommon.commonDesc',
                        label: 'Common UI elements',
                    },
                },
                subMenu: [
                    {
                        key: 'uiComponent.common.button',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/button`,
                        title: 'Button',
                        translateKey: 'nav.uiComponentsCommon.button',
                        icon: 'uiCommonButton',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsCommon.buttonDesc',
                                label: 'Interactive buttons',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'uiComponent.common.grid',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/grid`,
                        title: 'Grid',
                        translateKey: 'nav.uiComponentsCommon.grid',
                        icon: 'uiCommonGrid',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.uiComponentsCommon.gridDesc',
                                label: 'Layout grid system',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'uiComponent.common.typography',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/typography`,
                        title: 'Typography',
                        translateKey: 'nav.uiComponentsCommon.typography',
                        icon: 'uiCommonTypography',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsCommon.typographyDesc',
                                label: 'Text styling tools',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'uiComponent.common.icons',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/icons`,
                        title: 'Icons',
                        translateKey: 'nav.uiComponentsCommon.icons',
                        icon: 'uiCommonIcons',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsCommon.iconsDesc',
                                label: 'Visual icon set',
                            },
                        },
                        subMenu: [],
                    },
                ],
            },
            {
                key: 'uiComponent.feedback',
                path: '',
                title: 'Feedback',
                translateKey: 'nav.uiComponentsFeedback.feedback',
                icon: 'feedback',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey: 'nav.uiComponentsFeedback.feedbackDesc',
                        label: 'User feedback components',
                    },
                },
                subMenu: [
                    {
                        key: 'uiComponent.feedback.alert',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/alert`,
                        title: 'Alert',
                        translateKey: 'nav.uiComponentsFeedback.alert',
                        icon: 'uiFeedbackAlert',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsFeedback.alertDesc',
                                label: 'Notification alerts',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'uiComponent.feedback.dialog',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/dialog`,
                        title: 'Dialog',
                        translateKey: 'nav.uiComponentsFeedback.dialog',
                        icon: 'uiFeedbackDialog',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsFeedback.dialogDesc',
                                label: 'Modal dialog boxes',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'uiComponent.feedback.drawer',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/drawer`,
                        title: 'Drawer',
                        translateKey: 'nav.uiComponentsFeedback.drawer',
                        icon: 'uiFeedbackDrawer',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsFeedback.drawerDesc',
                                label: 'Sidebar drawers',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'uiComponent.feedback.progress',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/progress`,
                        title: 'Progress',
                        translateKey: 'nav.uiComponentsFeedback.progress',
                        icon: 'uiFeedbackProgress',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsFeedback.progressDesc',
                                label: 'Progress indicators',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'uiComponent.feedback.skeleton',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/skeleton`,
                        title: 'Skeleton',
                        translateKey: 'nav.uiComponentsFeedback.skeleton',
                        icon: 'uiFeedbackSkeleton',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsFeedback.skeletonDesc',
                                label: 'Loading skeletons',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'uiComponent.feedback.spinner',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/spinner`,
                        title: 'Spinner',
                        translateKey: 'nav.uiComponentsFeedback.spinner',
                        icon: 'uiFeedbackSpinner',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsFeedback.spinnerDesc',
                                label: 'Loading spinners',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'uiComponent.feedback.toast',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/toast`,
                        title: 'Toast',
                        translateKey: 'nav.uiComponentsFeedback.toast',
                        icon: 'uiFeedbackToast',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsFeedback.toastDesc',
                                label: 'Toast notifications',
                            },
                        },
                        subMenu: [],
                    },
                ],
            },
            {
                key: 'uiComponent.dataDisplay',
                path: '',
                title: 'Data Display',
                translateKey: 'nav.uiComponentsDataDisplay.dataDisplay',
                icon: 'dataDisplay',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey:
                            'nav.uiComponentsDataDisplay.dataDisplayDesc',
                        label: 'Components for showing data',
                    },
                },
                subMenu: [
                    {
                        key: 'uiComponent.dataDisplay.avatar',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/avatar`,
                        title: 'Avatar',
                        translateKey: 'nav.uiComponentsDataDisplay.avatar',
                        icon: 'uiDataDisplayAvatar',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsDataDisplay.avatarDesc',
                                label: 'User profile pictures',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'uiComponent.dataDisplay.badge',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/badge`,
                        title: 'Badge',
                        translateKey: 'nav.uiComponentsDataDisplay.badge',
                        icon: 'uiDataDisplayBadge',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsDataDisplay.badgeDesc',
                                label: 'Status indicators',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'uiComponent.dataDisplay.calendar',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/calendar`,
                        title: 'Calendar',
                        translateKey: 'nav.uiComponentsDataDisplay.calendar',
                        icon: 'uiDataDisplayCalendar',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsDataDisplay.calendarDesc',
                                label: 'Date selectors',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'uiComponent.dataDisplay.cards',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/cards`,
                        title: 'Cards',
                        translateKey: 'nav.uiComponentsDataDisplay.cards',
                        icon: 'uiDataDisplayCard',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsDataDisplay.cardsDesc',
                                label: 'Content cards',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'uiComponent.dataDisplay.table',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/table`,
                        title: 'Table',
                        translateKey: 'nav.uiComponentsDataDisplay.table',
                        icon: 'uiDataDisplayTable',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsDataDisplay.tableDesc',
                                label: 'Data tables',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'uiComponent.dataDisplay.tag',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/tag`,
                        title: 'Tag',
                        translateKey: 'nav.uiComponentsDataDisplay.tag',
                        icon: 'uiDataDisplayTag',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsDataDisplay.tagDesc',
                                label: 'Label tags',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'uiComponent.dataDisplay.timeline',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/timeline`,
                        title: 'Timeline',
                        translateKey: 'nav.uiComponentsDataDisplay.timeline',
                        icon: 'uiDataDisplayTimeline',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsDataDisplay.timelineDesc',
                                label: 'Event timelines',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'uiComponent.dataDisplay.tooltip',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/tooltip`,
                        title: 'Tooltip',
                        translateKey: 'nav.uiComponentsDataDisplay.tooltip',
                        icon: 'uiDataDisplayTooltip',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsDataDisplay.tooltipDesc',
                                label: 'Hover tooltips',
                            },
                        },
                        subMenu: [],
                    },
                ],
            },
            {
                key: 'uiComponent.forms',
                path: '',
                title: 'Forms',
                translateKey: 'nav.uiComponentsForms.forms',
                icon: 'forms',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey: 'nav.uiComponentsForms.formsDesc',
                        label: 'Form elements',
                    },
                },
                subMenu: [
                    {
                        key: 'uiComponent.forms.checkbox',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/checkbox`,
                        title: 'Checkbox',
                        translateKey: 'nav.uiComponentsForms.checkbox',
                        icon: 'uiFormsCheckbox',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsForms.checkboxDesc',
                                label: 'Tickable checkboxes',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'uiComponent.forms.datePicker',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/date-picker`,
                        title: 'Date picker',
                        translateKey: 'nav.uiComponentsForms.datePicker',
                        icon: 'uiFormsDatepicker',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsForms.datePickerDesc',
                                label: 'Select dates',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'uiComponent.forms.formControl',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/form-control`,
                        title: 'Form control',
                        translateKey: 'nav.uiComponentsForms.formControl',
                        icon: 'uiFormsFormControl',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsForms.formControlDesc',
                                label: 'Form control elements',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'uiComponent.forms.input',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/input`,
                        title: 'Input',
                        translateKey: 'nav.uiComponentsForms.input',
                        icon: 'uiFormsInput',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.uiComponentsForms.inputDesc',
                                label: 'Text inputs',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'uiComponent.forms.inputGroup',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/input-group`,
                        title: 'Input Group',
                        translateKey: 'nav.uiComponentsForms.inputGroup',
                        icon: 'uiFormsInputGroup',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsForms.inputGroupDesc',
                                label: 'Grouped inputs',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'uiComponent.forms.radio',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/radio`,
                        title: 'Radio',
                        translateKey: 'nav.uiComponentsForms.radio',
                        icon: 'uiFormsRadio',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.uiComponentsForms.radioDesc',
                                label: 'Radio buttons',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'uiComponent.forms.segment',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/segment`,
                        title: 'Segment',
                        translateKey: 'nav.uiComponentsForms.segment',
                        icon: 'uiFormsSegment',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsForms.segmentDesc',
                                label: 'Input segments',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'uiComponent.forms.select',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/select`,
                        title: 'Select',
                        translateKey: 'nav.uiComponentsForms.select',
                        icon: 'uiFormsSelect',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsForms.selectDesc',
                                label: 'Dropdown selects',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'uiComponent.forms.switcher',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/switcher`,
                        title: 'Switcher',
                        translateKey: 'nav.uiComponentsForms.switcher',
                        icon: 'uiFormsSwitcher',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsForms.switcherDesc',
                                label: 'Toggle switches',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'uiComponent.forms.timeInput',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/time-input`,
                        title: 'Time Input',
                        translateKey: 'nav.uiComponentsForms.timeInput',
                        icon: 'uiFormsTimePicker',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsForms.timeInputDesc',
                                label: 'Time inputs',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'uiComponent.forms.upload',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/upload`,
                        title: 'Upload',
                        translateKey: 'nav.uiComponentsForms.upload',
                        icon: 'uiFormsUpload',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsForms.uploadDesc',
                                label: 'File uploaders',
                            },
                        },
                        subMenu: [],
                    },
                ],
            },
            {
                key: 'uiComponent.navigation',
                path: '',
                title: 'Navigation',
                translateKey: 'nav.uiComponentsNavigation.navigation',
                icon: 'navigation',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey:
                            'nav.uiComponentsNavigation.navigationDesc',
                        label: 'Navigation elements',
                    },
                },
                subMenu: [
                    {
                        key: 'uiComponent.navigation.dropdown',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/dropdown`,
                        title: 'Dropdown',
                        translateKey: 'nav.uiComponentsNavigation.dropdown',
                        icon: 'uiNavigationDropdown',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsNavigation.dropdownDesc',
                                label: 'Dropdown menus',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'uiComponent.navigation.menu',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/menu`,
                        title: 'Menu',
                        translateKey: 'nav.uiComponentsNavigation.menu',
                        icon: 'uiNavigationMenu',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsNavigation.menuDesc',
                                label: 'Menu navigation',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'uiComponent.navigation.pagination',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/pagination`,
                        title: 'Pagination',
                        translateKey: 'nav.uiComponentsNavigation.pagination',
                        icon: 'uiNavigationPagination',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsNavigation.paginationDesc',
                                label: 'Pagination controls',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'uiComponent.navigation.steps',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/steps`,
                        title: 'Steps',
                        translateKey: 'nav.uiComponentsNavigation.steps',
                        icon: 'uiNavigationSteps',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsNavigation.stepsDesc',
                                label: 'Sequential steps',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'uiComponent.navigation.tabs',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/tabs`,
                        title: 'Tabs',
                        translateKey: 'nav.uiComponentsNavigation.tabs',
                        icon: 'uiNavigationTabs',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsNavigation.tabsDesc',
                                label: 'Tab navigation',
                            },
                        },
                        subMenu: [],
                    },
                ],
            },
            {
                key: 'uiComponent.graph',
                path: '',
                title: 'Graph',
                translateKey: 'nav.uiComponentsGraph.graph',
                icon: 'graph',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey: 'nav.uiComponentsGraph.graphDesc',
                        label: 'Graphical elements',
                    },
                },
                subMenu: [
                    {
                        key: 'uiComponent.graph.charts',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/graph/charts`,
                        title: 'Charts',
                        translateKey: 'nav.uiComponentsGraph.charts',
                        icon: 'uiGraphChart',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.uiComponentsGraph.chartsDesc',
                                label: 'Various charts',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'uiComponent.graph.maps',
                        path: `${UI_COMPONENTS_PREFIX_PATH}/graph/maps`,
                        title: 'Maps',
                        translateKey: 'nav.uiComponentsGraph.maps',
                        icon: 'uiGraphMaps',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.uiComponentsGraph.mapsDesc',
                                label: 'Geographic maps',
                            },
                        },
                        subMenu: [],
                    },
                ],
            },
        ],
    },
]

export default uiComponentNavigationConfig
