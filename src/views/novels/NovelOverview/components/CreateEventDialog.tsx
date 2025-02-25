import { useState } from 'react'
import Button from '@/components/ui/Button'
import Dialog from '@/components/ui/Dialog'
import Input from '@/components/ui/Input'
import Select, { Option as DefaultOption } from '@/components/ui/Select'
import { Form, FormItem } from '@/components/ui/Form'
import {
    TbVideo,
    TbCheckbox,
    TbCoffee,
    TbCalendarStar,
    TbPresentation,
    TbBell,
} from 'react-icons/tb'
import { LuTreePalm } from 'react-icons/lu'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import uniqueId from 'lodash/uniqueId'
import { components } from 'react-select'
import type { Event } from '../types'
import type { ZodType } from 'zod'
import type { ReactNode } from 'react'
import type { ControlProps, OptionProps } from 'react-select'

export type FormSchema = {
    type: Event
    label: string
    time: number
}

type EventOption = { label: string; value: Event; color: string }

const { Control } = components

// eslint-disable-next-line react-refresh/only-export-components
export const eventTypes: Record<
    Event,
    { label: string; icon: ReactNode; color: string }
> = {
    task: {
        label: 'Task',
        icon: <TbCheckbox />,
        color: 'bg-purple-200 dark:bg-purple-200',
    },
    meeting: {
        label: 'Meeting',
        icon: <TbVideo />,
        color: 'bg-sky-200 dark:bg-sky-200',
    },
    holiday: {
        label: 'Enjoy your holiday',
        icon: <LuTreePalm />,
        color: 'bg-amber-200 dark:bg-amber-200',
    },
    breaks: {
        label: 'Break',
        icon: <TbCoffee />,
        color: 'bg-orange-200 dark:bg-orange-200',
    },
    event: {
        label: 'Event',
        icon: <TbCalendarStar />,
        color: 'bg-emerald-200 dark:bg-emerald-200',
    },
    workshops: {
        label: 'Workshop',
        icon: <TbPresentation />,
        color: 'bg-rose-200 dark:bg-rose-200',
    },
    reminders: {
        label: 'Reminder',
        icon: <TbBell />,
        color: 'bg-teal-200 dark:bg-teal-200',
    },
}

const eventOptions: EventOption[] = [
    { label: 'Task', value: 'task', color: 'bg-purple-200' },
    { label: 'Meeting', value: 'meeting', color: 'bg-sky-200' },
    { label: 'Breaks', value: 'breaks', color: 'bg-orange-200' },
    { label: 'Event', value: 'event', color: 'bg-emerald-200' },
    { label: 'Workshops', value: 'workshops', color: 'bg-rose-200' },
    { label: 'Reminders', value: 'reminders', color: 'bg-teal-200' },
]

const timeOption = [
    { value: 0, label: '12:00 AM' },
    { value: 1, label: '1:00 AM' },
    { value: 2, label: '2:00 AM' },
    { value: 3, label: '3:00 AM' },
    { value: 4, label: '4:00 AM' },
    { value: 5, label: '5:00 AM' },
    { value: 6, label: '6:00 AM' },
    { value: 7, label: '7:00 AM' },
    { value: 8, label: '8:00 AM' },
    { value: 9, label: '9:00 AM' },
    { value: 10, label: '10:00 AM' },
    { value: 11, label: '11:00 AM' },
    { value: 12, label: '12:00 PM' },
    { value: 13, label: '1:00 PM' },
    { value: 14, label: '2:00 PM' },
    { value: 15, label: '3:00 PM' },
    { value: 16, label: '4:00 PM' },
    { value: 17, label: '5:00 PM' },
    { value: 18, label: '6:00 PM' },
    { value: 19, label: '7:00 PM' },
    { value: 20, label: '8:00 PM' },
    { value: 21, label: '9:00 PM' },
    { value: 22, label: '10:00 PM' },
    { value: 23, label: '11:00 PM' },
]

const CustomSelectOption = (props: OptionProps<EventOption>) => {
    return (
        <DefaultOption<EventOption>
            {...props}
            customLabel={(_, label) => (
                <span className="flex items-center gap-2">
                    <span>{label}</span>
                </span>
            )}
        />
    )
}

const CustomControl = ({ children, ...props }: ControlProps<EventOption>) => {
    const selected = props.getValue()[0]
    return (
        <Control {...props}>
            {selected && <></>}
            {children}
        </Control>
    )
}

const validationSchema: ZodType<FormSchema> = z.object({
    type: z.union([
        z.literal('meeting'),
        z.literal('task'),
        z.literal('holiday'),
        z.literal('breaks'),
        z.literal('event'),
        z.literal('workshops'),
        z.literal('reminders'),
    ]),
    label: z.string({ required_error: 'Please enter event name' }),
    time: z.number({ required_error: 'Please select a time' }),
})

const CreateEventDialog = ({
    onCreateEvent,
}: {
    onCreateEvent: (value: FormSchema & { id: string }) => void
}) => {
    const [dialogOpen, setDialogOpen] = useState(false)

    const {
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        control,
    } = useForm<FormSchema>({
        resolver: zodResolver(validationSchema),
    })

    const handleDialogClose = () => {
        reset()
        setDialogOpen(false)
    }

    const onSubmit = (value: FormSchema) => {
        onCreateEvent({
            id: uniqueId('schedule-event-'),
            ...value,
        })
        handleDialogClose()
    }

    return (
        <>
            <Button block onClick={() => setDialogOpen(true)}>
                Add event
            </Button>
            <Dialog
                isOpen={dialogOpen}
                onClose={handleDialogClose}
                onRequestClose={handleDialogClose}
            >
                <h4>New event</h4>
                <Form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
                    <FormItem
                        label="Event name"
                        invalid={Boolean(errors.label)}
                        errorMessage={errors.label?.message}
                    >
                        <Controller
                            name="label"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    type="text"
                                    autoComplete="off"
                                    placeholder="Event name"
                                    {...field}
                                />
                            )}
                        />
                    </FormItem>
                    <FormItem
                        label="Event type"
                        invalid={Boolean(errors.type)}
                        errorMessage={
                            errors.type?.message && 'Please select a type'
                        }
                    >
                        <Controller
                            name="type"
                            control={control}
                            render={({ field }) => (
                                <Select<EventOption>
                                    options={eventOptions}
                                    {...field}
                                    components={{
                                        Option: CustomSelectOption,
                                        Control: CustomControl,
                                    }}
                                    placeholder="Event type"
                                    value={eventOptions.filter(
                                        (option) =>
                                            option.value === field.value,
                                    )}
                                    onChange={(option) =>
                                        field.onChange(option?.value)
                                    }
                                />
                            )}
                        />
                    </FormItem>
                    <FormItem
                        label="Time"
                        invalid={Boolean(errors.time)}
                        errorMessage={errors.time?.message}
                    >
                        <Controller
                            name="time"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    options={timeOption}
                                    {...field}
                                    placeholder="Select a time..."
                                    value={timeOption.filter(
                                        (option) =>
                                            option.value === field.value,
                                    )}
                                    onChange={(option) =>
                                        field.onChange(option?.value)
                                    }
                                />
                            )}
                        />
                    </FormItem>
                    <Button
                        block
                        variant="solid"
                        type="submit"
                        loading={isSubmitting}
                    >
                        Create
                    </Button>
                </Form>
            </Dialog>
        </>
    )
}

export default CreateEventDialog
