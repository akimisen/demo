import Avatar from '@/components/ui/Avatar'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { useNavigate } from 'react-router-dom'
import { TbBookmark, TbChevronRight } from 'react-icons/tb'
import classNames from '@/utils/classNames'
import { useState } from 'react'
import type { Novel } from '../types'

type NovelsListV2Props = {
    data: Novel[]
}

const NovelsListV2 = ({ data }: NovelsListV2Props) => {
    const navigate = useNavigate()
    const [visibleCount, setVisibleCount] = useState(5)

    const handleViewAll = () => {
        navigate('/novels/list')
    }

    const handleViewMore = () => {
        setVisibleCount(prev => prev + 5)
    }

    const handleNovelClick = (id: string) => {
        navigate(`/novels/${id}`)
    }

    const formatWordCount = (count: number) => {
        return (count / 10000).toFixed(1) + '万'
    }

    const visibleNovels = data?.slice(0, visibleCount) || []
    const hasMore = data && visibleCount < data.length

    return (
        <Card>
            <div className="flex items-center justify-between mb-4">
                <h4>我的作品</h4>
                <Button size="sm" onClick={handleViewAll}>
                    查看全部
                </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {visibleNovels.map((novel) => (
                    <div
                        key={novel.id}
                        className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 cursor-pointer hover:shadow-md transition-shadow"
                        onClick={() => handleNovelClick(novel.id)}
                    >
                        <div className="flex items-start gap-3">
                            <Avatar
                                className="bg-white flex-shrink-0"
                                size={60}
                                src={novel.cover}
                                icon={<TbBookmark />}
                                shape="rounded"
                            />
                            <div className="flex-1 min-w-0">
                                <div className="heading-text font-bold text-lg truncate">
                                    {novel.title}
                                </div>
                                <div className="text-sm text-gray-500 mt-1">
                                    字数: {formatWordCount(novel.wordCount)}
                                </div>
                                <div className="text-sm text-gray-500 mt-1 truncate">
                                    最新: {novel.latestChapter}
                                </div>
                                <div className="flex items-center justify-between mt-2">
                                    <span className={classNames(
                                        'text-xs px-2 py-1 rounded-full',
                                        novel.status === 'ongoing' ? 'bg-blue-100 text-blue-600' :
                                        novel.status === 'completed' ? 'bg-green-100 text-green-600' :
                                        'bg-purple-100 text-purple-600'
                                    )}>
                                        {novel.status === 'ongoing' && '连载中'}
                                        {novel.status === 'completed' && '已完结'}
                                        {novel.status === 'planned' && '计划中'}
                                    </span>
                                    <TbChevronRight className="text-gray-400" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            {hasMore && (
                <div className="mt-4 text-center">
                    <Button variant="plain" onClick={handleViewMore}>
                        加载更多
                    </Button>
                </div>
            )}
        </Card>
    )
}

export default NovelsListV2 