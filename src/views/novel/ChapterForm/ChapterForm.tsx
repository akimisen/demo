import { useEffect } from 'react'
import { Form } from '@/components/ui/Form'
import Container from '@/components/shared/Container'
import BottomStickyBar from '@/components/template/BottomStickyBar'
import GeneralSection from './components/GeneralSection'
import AttributeSection from './components/AttributeSection'
import NotesSection from './components/NotesSection'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import isEmpty from 'lodash/isEmpty'
import type { ChapterFormSchema } from './types'
import type { ZodType } from 'zod'
import type { CommonProps } from '@/@types/common'

type ChapterFormProps = {
    onFormSubmit: (values: ChapterFormSchema) => void
    defaultValues?: ChapterFormSchema
    newChapter?: boolean
} & CommonProps

const validationSchema: ZodType<ChapterFormSchema> = z.object({
    title: z.string().min(1, { message: '章节标题不能为空！' }),
    summary: z.string().optional(),
    text: z.string().min(1, { message: '章节内容不能为空！' }),
    notes: z.array(
        z.object({
            id: z.string(),
            name: z.string(),
            description: z.string(),
        })
    ).optional(),
    characters: z.array(
        z.object({
            id: z.string(),
            name: z.string(),
            description: z.string(),
        })
    ).optional(),
    locations: z.array(
        z.object({
            id: z.string(),
            name: z.string(),
            description: z.string(),
        })
    ).optional(),
    tags: z.array(
        z.object({
            label: z.string(),
            value: z.string(),
        })
    ).optional(),
})

const ChapterForm = (props: ChapterFormProps) => {
    const {
        onFormSubmit,
        defaultValues = {
            novelName: '',
            id: '',
            title: '',
            summary: '',
            text: '',
            notes: [],
            characters: [],
            locations: [],
            tags: [],
        },
        children,
    } = props

    const {
        handleSubmit,
        reset,
        formState: { errors },
        control,
    } = useForm<ChapterFormSchema>({
        defaultValues: {
            ...defaultValues,
        },
        resolver: zodResolver(validationSchema),
    })

    useEffect(() => {
        if (!isEmpty(defaultValues)) {
            reset(defaultValues)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [JSON.stringify(defaultValues)])

    const onSubmit = (values: ChapterFormSchema) => {
        onFormSubmit?.(values)
    }

    return (
        <Form
            className="flex w-full h-full"
            containerClassName="flex flex-col w-full justify-between"
            onSubmit={handleSubmit(onSubmit)}
        >
            <Container>
                <div className="flex flex-col xl:flex-row gap-4">
                    <div className="gap-4 flex flex-col flex-auto">
                        <GeneralSection control={control} errors={errors} />
                        <NotesSection control={control} errors={errors} />
                    </div>
                    <div className="lg:min-w-[440px] 2xl:w-[500px] gap-4 flex flex-col">
                        <AttributeSection control={control} errors={errors} />
                    </div>
                </div>
            </Container>
            <BottomStickyBar>{children}</BottomStickyBar>
        </Form>
    )
}

export default ChapterForm
