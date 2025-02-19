import Card from '@/components/ui/Card'
import Tag from '@/components/ui/Tag'
import { NumericFormat } from 'react-number-format'
import type { PaymentSummary } from '../types'

type OrderDetailPaymentProps = {
    paymentSummary: PaymentSummary
    paymentStatus: number
}

const paymentStatusColor: Record<
    number,
    {
        label: string
        bgClass: string
        textClass: string
    }
> = {
    0: {
        label: 'Paid',
        bgClass: 'bg-success-subtle',
        textClass: 'text-success',
    },
    1: {
        label: 'Pending',
        bgClass: 'bg-warning-subtle',
        textClass: 'text-warning',
    },
    2: { label: 'Failed', bgClass: 'bg-error-subtle', textClass: 'text-error' },
}

const OrderDetailPayment = ({
    paymentSummary,
    paymentStatus,
}: OrderDetailPaymentProps) => {
    return (
        <Card>
            <div className="flex items-center gap-2 mb-8">
                <h4>Payment</h4>
                <Tag className={paymentStatusColor[paymentStatus || 0].bgClass}>
                    <span
                        className={`capitalize font-semibold ${
                            paymentStatusColor[paymentStatus || 0].textClass
                        }`}
                    >
                        {paymentStatusColor[paymentStatus || 0].label}
                    </span>
                </Tag>
            </div>
            <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between">
                    <span className="font-semibold">Subtotal</span>
                    <NumericFormat
                        fixedDecimalScale
                        prefix="$"
                        displayType="text"
                        value={paymentSummary.subTotal}
                        decimalScale={2}
                        thousandSeparator={true}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <span className="font-semibold">Shipping</span>
                    <NumericFormat
                        fixedDecimalScale
                        prefix="$"
                        displayType="text"
                        value={paymentSummary.deliveryFees}
                        decimalScale={2}
                        thousandSeparator={true}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <span className="font-semibold">Tax</span>
                    <NumericFormat
                        fixedDecimalScale
                        prefix="$"
                        displayType="text"
                        value={paymentSummary.tax}
                        decimalScale={2}
                        thousandSeparator={true}
                    />
                </div>
                <div className="flex items-center justify-between heading-text font-bold">
                    <span>Total</span>
                    <NumericFormat
                        fixedDecimalScale
                        prefix="$"
                        displayType="text"
                        value={paymentSummary.total}
                        decimalScale={2}
                        thousandSeparator={true}
                    />
                </div>
                <hr />
                <div className="flex items-center justify-between">
                    <span className="font-semibold">Customer payment</span>
                    <h5 className="font-bold">
                        <NumericFormat
                            fixedDecimalScale
                            prefix="$"
                            displayType="text"
                            value={paymentSummary.customerPayment}
                            decimalScale={2}
                            thousandSeparator={true}
                        />
                    </h5>
                </div>
            </div>
        </Card>
    )
}

export default OrderDetailPayment
