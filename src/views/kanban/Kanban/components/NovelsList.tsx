import Avatar from '@/components/ui/Avatar'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { useNavigate } from 'react-router-dom'
import { TbBookmark } from 'react-icons/tb'
import classNames from '@/utils/classNames'
import isLastChild from '@/utils/isLastChild'

type Novel = {
    id: string
    title: string
    wordCount: number
    status: 'ongoing' | 'completed' | 'planned'
    lastUpdated: string
    progress: number
    cover?: string
}

type NovelsListProps = {
    data: Novel[]
}

const NovelsList = ({ data }: NovelsListProps) => {
    const navigate = useNavigate()

    const handleViewAll = () => {
        navigate('/novels/list')
    }

    const getStatusColor = (status: string) => {
        switch(status) {
            case 'ongoing':
                return 'bg-blue-100 text-blue-600'
            case 'completed':
                return 'bg-green-100 text-green-600'
            case 'planned':
                return 'bg-purple-100 text-purple-600'
            default:
                return 'bg-gray-100 text-gray-600'
        }
    }

    return (
        <Card>
            <div className="flex items-center justify-between">
                <h4>我的作品</h4>
                <Button size="sm" onClick={handleViewAll}>
                    查看全部
                </Button>
            </div>
            <div className="mt-5">
                {data.map((novel, index) => (
                    <div
                        key={novel.id}
                        className={classNames(
                            'flex items-center justify-between py-2',
                            !isLastChild(data, index) && 'border-b border-gray-200 mb-2'
                        )}
                    >
                        <div className="flex items-center gap-2">
                            <Avatar
                                className="bg-white"
                                size={50}
                                src={novel.cover}
                                icon={<TbBookmark />}
                                shape="round"
                            />
                            <div>
                                <div className="heading-text font-bold">
                                    {novel.title}
                                </div>
                                <div className="text-sm text-gray-500">
                                    字数: {novel.wordCount}
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className={classNames(
                                'rounded-lg py-1 px-2 text-sm',
                                getStatusColor(novel.status)
                            )}>
                                {novel.status === 'ongoing' && '连载中'}
                                {novel.status === 'completed' && '已完结'}
                                {novel.status === 'planned' && '计划中'}
                            </span>
                            <div className="text-sm text-gray-500">
                                {novel.progress}%
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    )
}

export default NovelsList 