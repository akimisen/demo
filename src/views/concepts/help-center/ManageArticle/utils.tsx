import type { ReactNode } from 'react'
import {
    TbPresentation,
    TbSettings,
    TbStar,
    TbLicense,
    TbChartHistogram,
    TbChartPie,
    TbRobotFace,
    TbLibraryPhoto,
    TbShieldCheck,
    TbRefreshDot,
    TbPalette,
    TbCoins,
} from 'react-icons/tb'

export const categoryIcon: Record<string, ReactNode> = {
    introduction: <TbPresentation />,
    setupGuide: <TbSettings />,
    basicFeatures: <TbStar />,
    survey: <TbLicense />,
    analytic: <TbChartHistogram />,
    dataVisualization: <TbChartPie />,
    chatbot: <TbRobotFace />,
    media: <TbLibraryPhoto />,
    security: <TbShieldCheck />,
    integration: <TbRefreshDot />,
    themes: <TbPalette />,
    commission: <TbCoins />,
}

export const categoryLabel: Record<string, string> = {
    introduction: 'Introduction',
    setupGuide: 'Setup Guide',
    basicFeatures: 'Basic Features',
    survey: 'Survey',
    analytic: 'Analytic',
    dataVisualization: 'Data Visualization',
    chatbot: 'Chatbot',
    media: 'Media',
    security: 'Security',
    integration: 'Integration',
    themes: 'Themes',
    commission: 'Commission',
}

export const categoryClass: Record<string, string> = {
    introduction: 'bg-sky-200 dark:bg-sky-200',
    setupGuide: 'bg-red-200 dark:bg-red-200',
    basicFeatures: 'bg-amber-200 dark:bg-amber-200',
    survey: 'bg-orange-200 dark:bg-orange-200',
    analytic: 'bg-teal-200 dark:bg-teal-200',
    dataVisualization: 'bg-cyan-200 dark:bg-cyan-200',
    chatbot: 'bg-yellow-200 dark:bg-yellow-200',
    media: 'bg-rose-200 dark:bg-rose-200',
    security: 'bg-emerald-200 dark:bg-emerald-200',
    integration: ' bg-purple-200 dark:bg-purple-200',
    themes: 'bg-sky-200 dark:bg-sky-200',
    commission: 'bg-indigo-200 dark:bg-indigo-200',
}

export const categoryOption = [
    { label: 'Introduction', value: 'introduction' },
    { label: 'Setup Guide', value: 'setupGuide' },
    { label: 'Basic Features', value: 'basicFeatures' },
    { label: 'Survey', value: 'survey' },
    { label: 'Analytic', value: 'analytic' },
    { label: 'Data Visualization', value: 'dataVisualization' },
    { label: 'Chatbot', value: 'chatbot' },
    { label: 'Media', value: 'media' },
    { label: 'Security', value: 'security' },
    { label: 'Integration', value: 'integration' },
    { label: 'Themes', value: 'themes' },
    { label: 'Commission', value: 'commission' },
]
