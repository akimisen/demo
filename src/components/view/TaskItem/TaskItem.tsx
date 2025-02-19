import classNames from '@/utils/classNames'
import Table from '@/components/ui/Table'
import Tag from '@/components/ui/Tag'
import Avatar from '@/components/ui/Avatar'
import { TbCircleCheck, TbCircleCheckFilled } from 'react-icons/tb'
import dayjs from 'dayjs'
import type { ReactNode, Ref } from 'react'

type TaskItemProps = Partial<{
    progress: string
    name: string
    checked: boolean
    dueDate: number
    priority: string
    assignee: {
        name: string
        img: string
    }
    labelClass: Record<string, string>
    showDragger: boolean
    dragger: ReactNode
    showAssignee: boolean
}> & {
    taskId: string
    onChange: (taskId: string) => void
    ref?: Ref<HTMLTableRowElement>
}

const { Td, Tr } = Table

const TaskItem = (props: TaskItemProps) => {
    const {
        taskId,
        progress,
        checked,
        name,
        dueDate,
        onChange,
        assignee,
        dragger,
        priority,
        labelClass = {},
        showDragger = true,
        showAssignee = true,
        ref,
        ...rest
    } = props

    return (
        <Tr ref={ref} {...rest}>
            {showDragger && <Td className="w-[40px] text-lg">{dragger}</Td>}
            <Td className="w-[40px]">
                <button
                    className="text-2xl cursor-pointer pt-1"
                    role="button"
                    onClick={() => onChange(taskId)}
                >
                    {checked ? (
                        <TbCircleCheckFilled className="text-primary" />
                    ) : (
                        <TbCircleCheck className="hover:text-primary" />
                    )}
                </button>
            </Td>
            <Td className="w-[500px]">
                <span
                    className={classNames(
                        'heading-text font-bold',
                        checked && 'line-through opacity-50',
                    )}
                >
                    {name}
                </span>
            </Td>
            <Td className="w-[150px]">
                <Tag
                    className={`mr-2 rtl:ml-2 mb-2 ${
                        progress ? labelClass[progress] : ''
                    }`}
                >
                    {progress}
                </Tag>
            </Td>
            <Td className="w-[150px]">
                <Tag
                    className={`mr-2 rtl:ml-2 mb-2 ${
                        priority ? labelClass[priority] : ''
                    }`}
                >
                    {priority}
                </Tag>
            </Td>
            <Td className="w-[150px]">
                <span className="font-semibold">
                    {dueDate ? dayjs(dueDate).format('MMMM DD') : '-'}
                </span>
            </Td>
            {showAssignee && (
                <Td>
                    {!assignee?.img || assignee?.name ? (
                        '-'
                    ) : (
                        <div className="flex items-center gap-2">
                            <Avatar src={assignee?.img} size="sm" alt="" />
                            <span className="font-bold heading-text">
                                {assignee?.name}
                            </span>
                        </div>
                    )}
                </Td>
            )}
        </Tr>
    )
}

export default TaskItem
