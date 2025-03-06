import Card from '@/components/ui/Card'
import { FormItem } from '@/components/ui/Form'
import NumericInput from '@/components/shared/NumericInput'
import { Controller } from 'react-hook-form'
import type { FormSectionBaseProps } from '../types'

type PricingSectionProps = FormSectionBaseProps

const PricingSection = ({ control, errors }: PricingSectionProps) => {
    return (
        <Card>
            <h4 className="mb-6">Pricing</h4>
            <div>
                <FormItem
                    label="Price"
                    invalid={Boolean(errors.price)}
                    errorMessage={errors.price?.message}
                >
                    <Controller
                        name="price"
                        control={control}
                        render={({ field }) => (
                            <NumericInput
                                thousandSeparator
                                type="text"
                                inputPrefix="$"
                                autoComplete="off"
                                placeholder="0.00"
                                value={field.value}
                                onChange={field.onChange}
                            />
                        )}
                    />
                </FormItem>
                <FormItem
                    label="Cost price"
                    invalid={Boolean(errors.costPerItem)}
                    errorMessage={errors.costPerItem?.message}
                >
                    <Controller
                        name="costPerItem"
                        control={control}
                        render={({ field }) => (
                            <NumericInput
                                thousandSeparator
                                type="text"
                                inputPrefix="$"
                                autoComplete="off"
                                placeholder="0.00"
                                value={field.value}
                                onChange={field.onChange}
                            />
                        )}
                    />
                </FormItem>
            </div>
            <div className="md:flex gap-4">
                <FormItem
                    label="Bulk discount price"
                    invalid={Boolean(errors.bulkDiscountPrice)}
                    errorMessage={errors.bulkDiscountPrice?.message}
                    className="w-full"
                >
                    <Controller
                        name="bulkDiscountPrice"
                        control={control}
                        render={({ field }) => (
                            <NumericInput
                                thousandSeparator
                                type="text"
                                inputPrefix="$"
                                autoComplete="off"
                                placeholder="0.00"
                                value={field.value}
                                onChange={field.onChange}
                            />
                        )}
                    />
                </FormItem>
                <FormItem
                    label="Tax rate(%)"
                    invalid={Boolean(errors.taxRate)}
                    errorMessage={errors.taxRate?.message}
                    className="w-full"
                >
                    <Controller
                        name="taxRate"
                        control={control}
                        render={({ field }) => (
                            <NumericInput
                                type="text"
                                autoComplete="off"
                                placeholder="0"
                                value={field.value}
                                isAllowed={(values) => {
                                    const { floatValue } = values
                                    return (floatValue || 0) <= 100
                                }}
                                onChange={field.onChange}
                            />
                        )}
                    />
                </FormItem>
            </div>
        </Card>
    )
}

export default PricingSection
