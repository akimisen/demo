import {
    HiOutlineInbox,
    HiOutlinePaperAirplane,
    HiOutlinePencil,
    HiOutlineStar,
    HiOutlineTrash,
} from 'react-icons/hi'
import type { Group, Label } from './types'

export const groupList: Group[] = [
    { value: 'inbox', label: 'Inbox', icon: <HiOutlineInbox /> },
    { value: 'sentItem', label: 'Sent Item', icon: <HiOutlinePaperAirplane /> },
    { value: 'draft', label: 'Draft', icon: <HiOutlinePencil /> },
    { value: 'starred', label: 'Starred', icon: <HiOutlineStar /> },
    { value: 'deleted', label: 'Deleted', icon: <HiOutlineTrash /> },
]

export const labelList: Label[] = [
    {
        value: 'work',
        label: 'Work',
        bgClass: 'bg-rose-100 dark:bg-rose-100',
        dotClass: 'bg-rose-300',
    },
    {
        value: 'private',
        label: 'Private',
        bgClass: 'bg-blue-100 dark:bg-blue-100',
        dotClass: 'bg-blue-300',
    },
    {
        value: 'important',
        label: 'Important',
        bgClass: 'bg-purple-100 dark:bg-purple-100',
        dotClass: 'bg-purple-300',
    },
]
