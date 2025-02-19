import Button from '@/components/ui/Button'
import { Form, FormItem } from '@/components/ui/Form'
import PatternInput from '@/components/shared/PatternInput'
import { useForm, Controller } from 'react-hook-form'

const WithForm = () => {
    const {
        handleSubmit,
        formState: { errors },
        control,
    } = useForm<{ amount?: string }>()

    const onSubmit = (value: { amount?: string }) => {
        console.log(value)
    }

    return (
        <Form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
            <FormItem
                label="Amount"
                invalid={Boolean(errors.amount)}
                errorMessage={errors.amount?.message}
            >
                <Controller
                    name="amount"
                    control={control}
                    render={({ field }) => (
                        <PatternInput
                            format="#### #### #### ####"
                            mask="_"
                            placeholder="Card Number"
                            value={field.value}
                            onValueChange={(e) => {
                                field.onChange(e.floatValue)
                            }}
                        />
                    )}
                />
            </FormItem>
            <Button block variant="solid" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default WithForm
