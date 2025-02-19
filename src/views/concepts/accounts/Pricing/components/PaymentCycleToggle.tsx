import Segment from '@/components/ui/Segment'
import { usePricingStore } from '../store/pricingStore'
import type { PaymentCycle } from '../types'

const PaymentCycleToggle = () => {
    const { paymentCycle, setPaymentCycle } = usePricingStore()

    return (
        <Segment
            value={paymentCycle}
            onChange={(val) => setPaymentCycle(val as PaymentCycle)}
        >
            <Segment.Item value="monthly">Monthly</Segment.Item>
            <Segment.Item value="annually">Annually</Segment.Item>
        </Segment>
    )
}

export default PaymentCycleToggle
