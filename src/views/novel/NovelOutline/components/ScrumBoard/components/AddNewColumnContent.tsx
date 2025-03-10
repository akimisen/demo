import { Form, FormItem } from '@/components/ui/Form'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import { useScrumBoardStore } from '../store/scrumBoardStore'
import sleep from '@/utils/sleep'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import cloneDeep from 'lodash/cloneDeep'
import type { ZodType } from 'zod'
import type { Columns } from '../types'

type FormSchema = {
    title: string
}

const validationSchema: ZodType<FormSchema> = z.object({
    title: z.string().min(1, 'Column title is required!'),
})

const AddNewColumnContent = () => {
    const {
        columns,
        ordered,
        closeDialog,
        updateColumns,
        resetView,
        updateOrdered,
    } = useScrumBoardStore()

    const {
        control,
        formState: { errors },
        handleSubmit,
    } = useForm<FormSchema>({
        defaultValues: {
            title: '',
        },
        resolver: zodResolver(validationSchema),
    })

    const onFormSubmit = async ({ title }: FormSchema) => {
        const data = cloneDeep(columns)
        data[title ? title : 'Untitled Board'] = []
        const newOrdered = [...ordered, ...[title ? title : 'Untitled Board']]
        const newColumns: Columns = {}

        newOrdered.forEach((elm) => {
            newColumns[elm] = data[elm]
        })

        updateColumns(newColumns)
        updateOrdered(newOrdered)
        closeDialog()
        await sleep(500)
        resetView()
    }

    return (
        <div>
            <h5>Add New Column</h5>
            <div className="mt-8">
                <Form layout="inline" onSubmit={handleSubmit(onFormSubmit)}>
                    <FormItem
                        label="Column title"
                        invalid={Boolean(errors.title)}
                        errorMessage={errors.title?.message}
                    >
                        <Controller
                            name="title"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                                <Input
                                    type="text"
                                    autoComplete="off"
                                    {...field}
                                />
                            )}
                        />
                    </FormItem>
                    <FormItem>
                        <Button variant="solid" type="submit">
                            Add
                        </Button>
                    </FormItem>
                </Form>
            </div>
        </div>
    )
}

export default AddNewColumnContent
