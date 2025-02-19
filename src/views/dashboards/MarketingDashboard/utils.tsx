import { TbRocket, TbLeaf, TbRosetteDiscount } from 'react-icons/tb'
import type { ReactNode } from 'react'

export const campaignTypeOption: Record<
    string,
    {
        label: string
        icon: ReactNode
    }
> = {
    promotional: {
        label: 'Promotional',
        icon: <TbRosetteDiscount />,
    },
    seasonal: {
        label: 'Seasonal',
        icon: <TbLeaf />,
    },
    launch: {
        label: 'Lauch',
        icon: <TbRocket />,
    },
}
