import Avatar from '@/components/ui/Avatar'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Tooltip from '@/components/ui/Tooltip'
import Tag from '@/components/ui/Tag'
import { useNavigate } from 'react-router-dom'
import { PiBookmarkSimple, PiCaretRight } from 'react-icons/pi'
import { PiInfo } from 'react-icons/pi'
import { useState } from 'react'
import type { Novel } from '../types'
import type { TagColorScheme } from '@/components/ui/Tag/Tag'

type NovelBoardProps = {
    data: Novel[]
}

// 定义小说状态映射
const novelStatus: Record<string, { label: string; colorScheme: TagColorScheme }> = {
    completed: { label: '已完结', colorScheme: 'green' },
    ongoing: { label: '连载中', colorScheme: 'blue' },
    planned: { label: '规划中', colorScheme: 'default' },
}

// 定义小说类别颜色映射
const genreColorSchemes: Record<string, TagColorScheme> = {
    '科幻': 'indigo',
    '奇幻': 'purple',
    '武侠': 'amber',
    '仙侠': 'cyan',
    '玄幻': 'blue',
    '历史': 'yellow',
    '军事': 'red',
    '都市': 'pink',
    '悬疑': 'orange',
    '恐怖': 'rose',
    '游戏': 'green',
    '体育': 'teal',
    '轻小说': 'violet',
    '西幻': 'purple',
}

// 获取类别标签颜色
const getGenreColorScheme = (genre: string): TagColorScheme => {
    return genreColorSchemes[genre] || 'default'
}

const NovelBoard = ({ data }: NovelBoardProps) => {
    const navigate = useNavigate()
    const [visibleCount, setVisibleCount] = useState(3)

    const visibleNovels = data.slice(0, visibleCount)

    const handleViewAll = () => {
        navigate('/novels/list')
    }

    const formatWordCount = (count: number) => {
        if (count >= 10000) {
            return `${(count / 10000).toFixed(1)}万字`
        }
        return `${count}字`
    }

    return (
        <Card>
            <div className="flex items-center justify-between mb-4">
                <h4>作品一览</h4>
                <Button size="sm" onClick={handleViewAll} icon={<PiCaretRight />}>
                    查看全部
                </Button>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
                {visibleNovels.map((novel) => (
                    <div
                        key={novel.id}
                        className="flex p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors"
                        onClick={() => navigate(`/novels/detail/${novel.id}`)}
                    >
                        <Avatar
                            className="mr-4 bg-gray-100"
                            size={60}
                            src={novel.cover}
                            icon={<PiBookmarkSimple />}
                            shape="rounded"
                        />
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                                <div className="font-semibold text-lg truncate">
                                    {novel.title}
                                </div>
                                {novel.genre && (
                                    <Tag colorScheme={getGenreColorScheme(novel.genre)}>
                                        {novel.genre}
                                    </Tag>
                                )}
                                <Tooltip
                                    title={
                                        <div className="p-2">
                                            <div><strong>题材：</strong>{novel.genre || '未设置'}</div>
                                            <div><strong>简介：</strong>{novel.summary || '未设置'}</div>
                                            <div><strong>主角：</strong>{novel.protagonist || '未设置'}</div>
                                            <div><strong>背景：</strong>{novel.setting || '未设置'}</div>
                                            <div><strong>目标读者：</strong>{novel.targetAudience || '未设置'}</div>
                                        </div>
                                    }
                                >
                                    <span className="text-gray-400 cursor-pointer">
                                        <PiInfo/>
                                    </span>
                                </Tooltip>
                            </div>
                            <div className="text-sm text-gray-500 mt-1">
                                字数: {formatWordCount(novel.wordCount)}
                            </div>
                            <div className="flex items-center justify-between mt-2">
                                <div className="text-sm text-gray-500">
                                    【最新章节】 {novel.latestChapter || '暂无章节'}
                                </div>
                                <div className="flex items-center gap-2">
                                    {novel.status === 'completed' ? (
                                        <Tag
                                            colorScheme={novelStatus[novel.status].colorScheme}
                                            minWidth={80}
                                        >
                                            {novelStatus[novel.status].label}
                                        </Tag>
                                    ) : (
                                        <Tag
                                            colorScheme={novelStatus[novel.status].colorScheme}
                                            minWidth={80}
                                        >
                                            {novel.progress > 0 ? `进度: ${novel.progress}%` : '规划中'}
                                        </Tag>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                
                {data.length > visibleCount && (
                    <Button 
                        block 
                        variant="plain" 
                        onClick={() => setVisibleCount(prev => Math.min(prev + 3, data.length))}
                    >
                        加载更多
                    </Button>
                )}
            </div>
        </Card>
    )
}

export default NovelBoard 