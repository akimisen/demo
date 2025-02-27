import classNames from '../utils/classNames'
import type { CommonProps } from '../@types/common'
import type { ReactNode, Ref } from 'react'

// 定义颜色方案类型
export type TagColorScheme = 
    | 'blue' 
    | 'green' 
    | 'red' 
    | 'orange' 
    | 'purple' 
    | 'cyan' 
    | 'indigo' 
    | 'pink' 
    | 'emerald' 
    | 'amber' 
    | 'violet' 
    | 'teal' 
    | 'rose' 
    | 'yellow'
    | 'default'

// 颜色方案映射
const colorSchemes: Record<TagColorScheme, string> = {
    blue: 'bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-100 border-blue-100 dark:border-blue-500/20',
    green: 'bg-green-100 text-green-600 dark:bg-green-500/20 dark:text-green-100 border-green-100 dark:border-green-500/20',
    red: 'bg-red-100 text-red-600 dark:bg-red-500/20 dark:text-red-100 border-red-100 dark:border-red-500/20',
    orange: 'bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-100 border-orange-100 dark:border-orange-500/20',
    purple: 'bg-purple-100 text-purple-600 dark:bg-purple-500/20 dark:text-purple-100 border-purple-100 dark:border-purple-500/20',
    cyan: 'bg-cyan-100 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-100 border-cyan-100 dark:border-cyan-500/20',
    indigo: 'bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-100 border-indigo-100 dark:border-indigo-500/20',
    pink: 'bg-pink-100 text-pink-600 dark:bg-pink-500/20 dark:text-pink-100 border-pink-100 dark:border-pink-500/20',
    emerald: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100 border-emerald-100 dark:border-emerald-500/20',
    amber: 'bg-amber-100 text-amber-600 dark:bg-amber-500/20 dark:text-amber-100 border-amber-100 dark:border-amber-500/20',
    violet: 'bg-violet-100 text-violet-600 dark:bg-violet-500/20 dark:text-violet-100 border-violet-100 dark:border-violet-500/20',
    teal: 'bg-teal-100 text-teal-600 dark:bg-teal-500/20 dark:text-teal-100 border-teal-100 dark:border-teal-500/20',
    rose: 'bg-rose-100 text-rose-600 dark:bg-rose-500/20 dark:text-rose-100 border-rose-100 dark:border-rose-500/20',
    yellow: 'bg-yellow-100 text-yellow-600 dark:bg-yellow-500/20 dark:text-yellow-100 border-yellow-100 dark:border-yellow-500/20',
    default: 'bg-gray-100 dark:bg-gray-700 border-gray-100 dark:border-gray-700 text-gray-900 dark:text-gray-50',
}

export interface TagProps extends CommonProps {
    children: ReactNode
    prefix?: boolean | ReactNode
    prefixClass?: string
    ref?: Ref<HTMLDivElement>
    suffix?: boolean | ReactNode
    suffixClass?: string
    minWidth?: string | number
    colorScheme?: TagColorScheme // 添加颜色方案属性
}

const Tag = (props: TagProps) => {
    const {
        className,
        children,
        prefix,
        ref,
        suffix,
        prefixClass,
        suffixClass,
        minWidth,
        colorScheme = 'default', // 默认使用 default 颜色方案
        ...rest
    } = props

    // 获取颜色方案对应的样式类
    const colorClass = colorSchemes[colorScheme]

    // 创建内联样式对象，包含最小宽度
    const style = {
        ...(rest.style || {}),
        ...(minWidth ? { minWidth: typeof minWidth === 'number' ? `${minWidth}px` : minWidth } : {})
    }

    return (
        <div
            ref={ref}
            className={classNames(
                'tag', 
                colorClass,
                'flex justify-center items-center',
                className
            )}
            style={style}
            {...rest}
        >
            {prefix && typeof prefix === 'boolean' && (
                <span
                    className={classNames('tag-affix tag-prefix', prefixClass)}
                />
            )}
            {typeof prefix === 'object' && prefix}
            {children}
            {suffix && typeof suffix === 'boolean' && (
                <span
                    className={classNames('tag-affix tag-suffix', suffixClass)}
                />
            )}
            {typeof suffix === 'object' && suffix}
        </div>
    )
}

export default Tag
