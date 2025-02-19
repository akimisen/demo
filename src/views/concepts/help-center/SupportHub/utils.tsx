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
