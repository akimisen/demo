import { scaleSequential } from 'd3-scale'
import type { Control, FieldErrors } from 'react-hook-form'

export type Chapter = {
    novelId: string
    novelName: string
    id: string
    title: string
    summary: string
    text: string
    status: number
    sequenceId: string
    characters: {id: string, name: string, description: string}[]
    locations: {id: string, name: string, description: string}[]
    tags: { label: string; value: string }[]
    notes: {id: string, name: string, description: string}[]
}

export type GeneralFields = {
    title: string
    summary?: string
    text: string
}

export type NoteFields = {
    notes?: {
        id: string
        name: string
        description: string
    }[]
}

export type AttributeFields = {
    characters?: {id: string, name: string, description: string}[]
    locations?: {id: string, name: string, description: string}[]
    tags?: { label: string; value: string }[]
}

export type ChapterFormSchema = GeneralFields &
    NoteFields &
    AttributeFields

export type FormSectionBaseProps = {
    control: Control<ChapterFormSchema>
    errors: FieldErrors<ChapterFormSchema>
}
