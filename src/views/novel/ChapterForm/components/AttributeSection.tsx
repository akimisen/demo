import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import Select from '@/components/ui/Select'
import Tooltip from '@/components/ui/Tooltip'
import { FormItem } from '@/components/ui/Form'
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi'
import { Controller } from 'react-hook-form'
import CreatableSelect from 'react-select/creatable'
import type { FormSectionBaseProps } from '../types'

type AttributeSectionProps = FormSectionBaseProps

type Options = {
    label: string
    value: string
}[]

const categories: Options = [
    { label: 'Bags', value: 'bags' },
    { label: 'Cloths', value: 'cloths' },
    { label: 'Devices', value: 'devices' },
    { label: 'Shoes', value: 'shoes' },
    { label: 'Watches', value: 'watches' },
]

const tags: Options = [
    { label: 'trend', value: 'trend' },
    { label: 'unisex', value: 'unisex' },
]

const AttributeSection = ({ control, errors }: AttributeSectionProps) => {
    return (
        <Card>
            <h4 className="mb-6">Attribute</h4>
            <FormItem
                label="Category"
                invalid={Boolean(errors.category)}
                errorMessage={errors.category?.message}
            >
                <Controller
                    name="category"
                    control={control}
                    render={({ field }) => (
                        <Select
                            options={categories}
                            value={categories.filter(
                                (category) => category.value === field.value,
                            )}
                            onChange={(option) => field.onChange(option?.value)}
                        />
                    )}
                />
            </FormItem>
            <FormItem
                label="Tags"
                extra={
                    <Tooltip
                        title="You add as many tags as you want to a product"
                        className="text-center"
                    >
                        <HiOutlineQuestionMarkCircle className="text-base mx-1" />
                    </Tooltip>
                }
            >
                <Controller
                    name="tags"
                    control={control}
                    render={({ field }) => (
                        <Select
                            isMulti
                            isClearable
                            value={field.value}
                            placeholder="Add tags for product..."
                            componentAs={CreatableSelect}
                            options={tags}
                            onChange={(option) => field.onChange(option)}
                        />
                    )}
                />
            </FormItem>
            <FormItem
                label="Brand"
                invalid={Boolean(errors.brand)}
                errorMessage={errors.brand?.message}
            >
                <Controller
                    name="brand"
                    control={control}
                    render={({ field }) => (
                        <Input
                            type="text"
                            autoComplete="off"
                            placeholder="Product brand"
                            {...field}
                        />
                    )}
                />
            </FormItem>
        </Card>
    )
}

export default AttributeSection
