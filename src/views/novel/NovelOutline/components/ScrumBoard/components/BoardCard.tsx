import Card from '@/components/ui/Card'
import Tag from '@/components/ui/Tag'
import UsersAvatarGroup from '@/components/shared/UsersAvatarGroup'
import IconText from '@/components/shared/IconText'
import { TbPaperclip, TbMessageCircle } from 'react-icons/tb'
import { useScrumBoardStore } from '../store/scrumBoardStore'
import { taskLabelColors } from '../utils'
import type { Ticket } from '../types'
import type { CardProps } from '@/components/ui/Card'
import type { Ref } from 'react'

interface BoardCardProps extends CardProps {
    data: Ticket
    ref?: Ref<HTMLDivElement>
}

const BoardCard = (props: BoardCardProps) => {
    const { openDialog, updateDialogView, setSelectedTicketId } =
        useScrumBoardStore()

    const { data, ref, ...rest } = props

    const { id, name, comments, attachments, members, labels } = data

    const onCardClick = () => {
        openDialog()
        updateDialogView('TICKET')
        setSelectedTicketId(id)
    }

    return (
        <Card
            ref={ref}
            clickable
            className="hover:shadow-lg rounded-lg mb-4 border-0"
            bodyClass="p-4"
            onClick={() => onCardClick()}
            {...rest}
        >
            <div className="mb-2 font-bold heading-text text-base">{name}</div>
            {labels && labels.length > 0 && (
                <>
                    {labels.map((label, index) => (
                        <Tag
                            key={label + index}
                            className={`mr-2 rtl:ml-2 mb-2 ${taskLabelColors[label]}`}
                        >
                            {label}
                        </Tag>
                    ))}
                </>
            )}
            <div className="flex items-center justify-between mt-3">
                <UsersAvatarGroup avatarProps={{ size: 25 }} users={members} />
                <div className="flex items-center gap-2">
                    {comments && comments.length > 0 && (
                        <IconText
                            className="font-semibold gap-1"
                            icon={<TbMessageCircle className="text-base" />}
                        >
                            {comments.length}
                        </IconText>
                    )}
                    {attachments && attachments.length > 0 && (
                        <IconText
                            icon={<TbPaperclip />}
                            className="text-base gap-1"
                        >
                            {attachments.length}
                        </IconText>
                    )}
                </div>
            </div>
        </Card>
    )
}

export default BoardCard
