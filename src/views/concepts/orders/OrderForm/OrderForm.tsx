import { useEffect } from 'react'
import { Form } from '@/components/ui/Form'
import Affix from '@/components/shared/Affix'
import Card from '@/components/ui/Card'
import Container from '@/components/shared/Container'
import BottomStickyBar from '@/components/template/BottomStickyBar'
import { apiGetProductList } from '@/services/ProductService'
import ProductSelectSection from './components/ProductSelectSection'
import CustomerDetailSection from './components/CustomerDetailSection'
import BillingAddressSection from './components/BillingAddressSection'
import PaymentMethodSection from './components/PaymentMethodSection'
import Navigator from './components/Navigator'
import { useOrderFormStore } from './store/orderFormStore'
import useLayoutGap from '@/utils/hooks/useLayoutGap'
import useResponsive from '@/utils/hooks/useResponsive'
import useSWR from 'swr'
import isEmpty from 'lodash/isEmpty'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import type { ZodType } from 'zod'
import type { ReactNode } from 'react'
import type {
    GetProductListResponse,
    OrderFormSchema,
    SelectedProduct,
} from './types'
import type { TableQueries, CommonProps } from '@/@types/common'

type OrderFormProps = {
    children: ReactNode
    onFormSubmit: (values: OrderFormSchema) => void
    defaultValues?: OrderFormSchema
    defaultProducts?: SelectedProduct[]
    newOrder?: boolean
} & CommonProps

const baseValidationSchema = z.object({
    firstName: z.string().min(1, { message: 'First name required' }),
    lastName: z.string().min(1, { message: 'Last name required' }),
    email: z
        .string()
        .min(1, { message: 'Email required' })
        .email({ message: 'Invalid email' }),
    dialCode: z.string().min(1, { message: 'Please select your country code' }),
    phoneNumber: z
        .string()
        .min(1, { message: 'Please input your mobile number' }),
    country: z.string().min(1, { message: 'Please select a country' }),
    address: z.string().min(1, { message: 'Addrress required' }),
    postcode: z.string().min(1, { message: 'Postcode required' }),
    city: z.string().min(1, { message: 'City required' }),
})

const validationSchema: ZodType<OrderFormSchema> = z.discriminatedUnion(
    'paymentMethod',
    [
        z
            .object({
                paymentMethod: z.literal('creditOrDebitCard'),
                cardHolderName: z
                    .string()
                    .min(1, { message: 'Card holder name required' }),
                ccNumber: z
                    .string()
                    .min(1, 'Credit card number required')
                    .refine(
                        (value) =>
                            /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/.test(
                                value,
                            ),
                        'Invalid credit card number',
                    ),
                cardExpiry: z
                    .string()
                    .min(1, { message: 'Card holder name required' })
                    .refine(
                        (value) =>
                            /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/.test(
                                value,
                            ),
                        'Invalid Date',
                    ),
                code: z
                    .string()
                    .min(1, { message: 'Code required' })
                    .refine((value) => /^[0-9]{3}$/.test(value), 'Invalid CVV'),
            })
            .merge(baseValidationSchema),
        z
            .object({
                paymentMethod: z.literal('paypal'),
                paypalEmail: z
                    .string()
                    .min(1, { message: 'Email required' })
                    .email({ message: 'Invalid email' }),
            })
            .merge(baseValidationSchema),
        z
            .object({
                paymentMethod: z.literal('bankTransfer'),
                bankName: z.string().min(1, { message: 'Bank name required' }),
                accountNumber: z
                    .string()
                    .min(1, { message: 'Account number required' }),
                accountHolderName: z
                    .string()
                    .min(1, { message: 'Account holder name required' }),
                IBAN: z.string().min(1, { message: 'IBAN required' }),
            })
            .merge(baseValidationSchema),
        z
            .object({
                paymentMethod: z.literal(''),
            })
            .merge(baseValidationSchema),
    ],
)

const OrderForm = (props: OrderFormProps) => {
    const { onFormSubmit, children, defaultValues, defaultProducts } = props

    const { setProductOption, setProductList, setSelectedProduct } =
        useOrderFormStore()

    const { getTopGapValue } = useLayoutGap()

    const { larger } = useResponsive()

    useSWR(
        [
            '/api/products',
            {
                pageIndex: 1,
                pageSize: 10,
                query: '',
                sort: {
                    order: '',
                    key: '',
                },
            } as TableQueries,
        ],
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ([_, params]) =>
            apiGetProductList<GetProductListResponse, TableQueries>(params),
        {
            revalidateOnFocus: false,
            onSuccess: (resp) => {
                const list = resp.list.map(
                    ({ id: value, name: label, img, stock: quantity }) => ({
                        label,
                        value,
                        img,
                        quantity,
                    }),
                )
                setProductList(resp.list)
                setProductOption(list)
            },
        },
    )

    useEffect(() => {
        if (defaultProducts) {
            setSelectedProduct(defaultProducts)
        }
        if (!isEmpty(defaultValues)) {
            reset(defaultValues)
        }
        return () => {
            setSelectedProduct([])
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const onSubmit = (values: OrderFormSchema) => {
        onFormSubmit?.(values)
    }

    const {
        handleSubmit,
        reset,
        watch,
        formState: { errors },
        control,
    } = useForm<OrderFormSchema>({
        defaultValues: {
            paymentMethod: 'creditOrDebitCard',
            ...(defaultValues ? defaultValues : {}),
        },
        resolver: zodResolver(validationSchema),
    })

    const selectedPaymentMethod = watch('paymentMethod', '')

    return (
        <div className="flex">
            <Form
                className="flex-1 flex flex-col overflow-hidden"
                onSubmit={handleSubmit(onSubmit)}
            >
                <Container>
                    <div className="flex gap-4">
                        {larger.xl && (
                            <div className="w-[360px]">
                                <Affix offset={getTopGapValue()}>
                                    <Card>
                                        <Navigator />
                                    </Card>
                                </Affix>
                            </div>
                        )}

                        <div className="flex-1">
                            <div className="flex flex-col gap-4">
                                <ProductSelectSection />
                                <CustomerDetailSection
                                    control={control}
                                    errors={errors}
                                />
                                <BillingAddressSection
                                    control={control}
                                    errors={errors}
                                />
                                <PaymentMethodSection
                                    control={control}
                                    errors={errors}
                                    selectedPaymentMethod={
                                        selectedPaymentMethod
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </Container>
                <BottomStickyBar>{children}</BottomStickyBar>
            </Form>
        </div>
    )
}

export default OrderForm
