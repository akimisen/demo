import { useEffect, useState } from 'react'
import Button from '@/components/ui/Button'
import Dialog from '@/components/ui/Dialog'
import Input from '@/components/ui/Input'
import Notification from '@/components/ui/Notification'
import toast from '@/components/ui/toast'
import RichTextEditor from '@/components/shared/RichTextEditor'
import { useMailStore } from '../store/mailStore'
import { FormItem, Form } from '@/components/ui/Form'
import sleep from '@/utils/sleep'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import type { ZodType } from 'zod'

type FormSchema = {
    to: string
    content?: string
    title?: string
}

const validationSchema: ZodType<FormSchema> = z.object({
    to: z.string().min(1, { message: 'Please enter recipient' }),
    title: z.string(),
    content: z.string().min(1, { message: 'Please enter message' }),
})

const MailEditor = () => {
    const { mail, messageDialog, toggleMessageDialog } = useMailStore()

    const [formSubmiting, setFormSubmiting] = useState(false)

    const {
        handleSubmit,
        reset,
        formState: { errors },
        control,
    } = useForm<FormSchema>({
        resolver: zodResolver(validationSchema),
    })

    useEffect(() => {
        if (messageDialog.mode === 'reply') {
            reset({
                to: mail.from,
                title: `Re:${mail.title}`,
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [messageDialog.mode])

    const handleDialogClose = () => {
        toggleMessageDialog({
            mode: '',
            open: false,
        })
        reset({
            to: '',
            title: '',
            content: '',
        })
    }

    const onSubmit = async (value: FormSchema) => {
        console.log('values', value)
        setFormSubmiting(true)
        await sleep(500)
        toast.push(<Notification type="success">Mail send!</Notification>, {
            placement: 'top-center',
        })
        setFormSubmiting(false)
        handleDialogClose()
    }

    return (
        <Dialog
            isOpen={messageDialog.open}
            onClose={handleDialogClose}
            onRequestClose={handleDialogClose}
        >
            <h4 className="mb-4">
                {messageDialog.mode === 'new' && 'New Message'}
                {messageDialog.mode === 'reply' && 'Reply'}
            </h4>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FormItem
                    label="Title:"
                    invalid={Boolean(errors.title)}
                    errorMessage={errors.title?.message}
                >
                    <Controller
                        name="title"
                        control={control}
                        render={({ field }) => (
                            <Input
                                autoComplete="off"
                                placeholder="Add a subject"
                                {...field}
                            />
                        )}
                    />
                </FormItem>
                <FormItem
                    label="To:"
                    invalid={Boolean(errors.to)}
                    errorMessage={errors.to?.message}
                >
                    <Controller
                        name="to"
                        control={control}
                        render={({ field }) => (
                            <Input autoComplete="off" {...field} />
                        )}
                    />
                </FormItem>
                <FormItem
                    label="Message"
                    invalid={Boolean(errors.content)}
                    errorMessage={errors.content?.message}
                >
                    <Controller
                        name="content"
                        control={control}
                        render={({ field }) => (
                            <RichTextEditor
                                content={field.value}
                                invalid={Boolean(errors.content)}
                                onChange={({ html }) => {
                                    field.onChange(html)
                                }}
                            />
                        )}
                    />
                </FormItem>
                <div className="text-right mt-4">
                    <Button
                        className="ltr:mr-2 rtl:ml-2"
                        variant="plain"
                        type="button"
                        onClick={handleDialogClose}
                    >
                        Discard
                    </Button>
                    <Button
                        variant="solid"
                        loading={formSubmiting}
                        type="submit"
                    >
                        Send
                    </Button>
                </div>
            </Form>
        </Dialog>
    )
}

export default MailEditor
