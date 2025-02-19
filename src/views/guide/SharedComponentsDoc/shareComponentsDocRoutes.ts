import { lazy } from 'react'
import { DocumentationRoute } from '@/@types/docs'

const documentationRoutes: DocumentationRoute[] = [
    {
        groupName: 'Components',
        nav: [
            {
                path: 'abbreviate-number',
                label: 'AbbreviateNumber',
                component: lazy(
                    () => import('./components/AbbreviateNumberDoc'),
                ),
            },
            {
                path: 'action-link',
                label: 'ActionLink',
                component: lazy(() => import('./components/ActionLinkDoc')),
            },
            {
                path: 'adaptive-card',
                label: 'AdaptiveCard',
                component: lazy(() => import('./components/AdaptiveCardDoc')),
            },
            {
                path: 'affix',
                label: 'Affix',
                component: lazy(() => import('./components/AffixDoc')),
            },
            {
                path: 'authority-check',
                label: 'AuthorityCheck',
                component: lazy(() => import('./components/AuthorityCheckDoc')),
            },
            {
                path: 'calendar-view',
                label: 'CalendarView',
                component: lazy(() => import('./components/CalendarViewDoc')),
            },
            {
                path: 'chart',
                label: 'Chart',
                component: lazy(() => import('./components/ChartDoc')),
            },
            {
                path: 'confirm-dialog',
                label: 'ConfirmDialog',
                component: lazy(() => import('./components/ConfirmDialogDoc')),
            },
            {
                path: 'container',
                label: 'Container',
                component: lazy(() => import('./components/ContainerDoc')),
            },
            {
                path: 'custom-format-input',
                label: 'CustomFormatInput',
                component: lazy(
                    () => import('./components/CustomFormatInputDoc'),
                ),
            },
            {
                path: 'data-table',
                label: 'DataTable',
                component: lazy(() => import('./components/DataTableDoc')),
            },
            {
                path: 'debounce-input',
                label: 'DebounceInput',
                component: lazy(() => import('./components/DebounceInputDoc')),
            },
            {
                path: 'double-sided-image',
                label: 'DoubleSidedImage',
                component: lazy(
                    () => import('./components/DoubleSidedImageDoc'),
                ),
            },
            {
                path: 'ellipsis-button',
                label: 'EllipsisButton',
                component: lazy(() => import('./components/EllipsisButtonDoc')),
            },
            {
                path: 'gantt-chart',
                label: 'GanttChart',
                component: lazy(() => import('./components/GanttChartDoc')),
            },
            {
                path: 'grow-shrink-value',
                label: 'GrowShrinkValue',
                component: lazy(
                    () => import('./components/GrowShrinkValueDoc'),
                ),
            },
            {
                path: 'icon-text',
                label: 'IconText',
                component: lazy(() => import('./components/IconTextDoc')),
            },
            {
                path: 'image-gallery',
                label: 'ImageGallery',
                component: lazy(() => import('./components/ImageGalleryDoc')),
            },
            {
                path: 'loading',
                label: 'Loading',
                component: lazy(() => import('./components/LoadingDoc')),
            },
            {
                path: 'masonry',
                label: 'Masonry',
                component: lazy(() => import('./components/MasonryDoc')),
            },
            {
                path: 'media-skeleton',
                label: 'MediaSkeleton',
                component: lazy(() => import('./components/MediaSkeletonDoc')),
            },
            {
                path: 'nav-toggle',
                label: 'NavToggle',
                component: lazy(() => import('./components/NavToggleDoc')),
            },
            {
                path: 'numeric-input',
                label: 'NumericInput',
                component: lazy(() => import('./components/NumericInputDoc')),
            },
            {
                path: 'otp-input',
                label: 'OtpInput',
                component: lazy(() => import('./components/OtpInputDoc')),
            },
            {
                path: 'password-input',
                label: 'PasswordInput',
                component: lazy(() => import('./components/PasswordInputDoc')),
            },
            {
                path: 'pattern-input',
                label: 'PatternInput',
                component: lazy(() => import('./components/PatternInputDoc')),
            },
            {
                path: 'region-map',
                label: 'RegionMap',
                component: lazy(() => import('./components/RegionMapDoc')),
            },
            {
                path: 'rich-text-editor',
                label: 'RichTextEditor',
                component: lazy(() => import('./components/RichTextEditorDoc')),
            },
            {
                path: 'preset-segment-item-option',
                label: 'SegmentItemOption',
                component: lazy(
                    () => import('./components/PresetSegmentItemOptionDoc'),
                ),
            },
            {
                path: 'sticky-footer',
                label: 'StickyFooter',
                component: lazy(() => import('./components/StickyFooterDoc')),
            },
            {
                path: 'syntax-highlighter',
                label: 'SyntaxHighlighter',
                component: lazy(
                    () => import('./components/SyntaxHighlighterDoc'),
                ),
            },
            {
                path: 'users-avatar-group',
                label: 'UsersAvatarGroup',
                component: lazy(
                    () => import('./components/UsersAvatarGroupDoc'),
                ),
            },
        ],
    },
]

export default documentationRoutes
