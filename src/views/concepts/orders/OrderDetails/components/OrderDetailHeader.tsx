import { useParams } from 'react-router-dom'

const OrderDetailHeader = () => {
    const { id } = useParams()

    return <h3>Order: #{id}</h3>
}

export default OrderDetailHeader
