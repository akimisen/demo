import { useState } from 'react'
import Button from '@/components/ui/Button'
import Tag from '@/components/ui/Tag'
import Avatar from '@/components/ui/Avatar'
import Notification from '@/components/ui/Notification'
import toast from '@/components/ui/toast'
import CreditCardDialog from '@/components/view/CreditCardDialog'
import BillingHistory from './BillingHistory'
import { apiGetSettingsBilling } from '@/services/AccontsService'
import classNames from '@/utils/classNames'
import isLastChild from '@/utils/isLastChild'
import sleep from '@/utils/sleep'
import { TbPlus } from 'react-icons/tb'
import useSWR from 'swr'
import dayjs from 'dayjs'
import { useNavigate } from 'react-router-dom'
import { PiLightningFill } from 'react-icons/pi'
import { NumericFormat } from 'react-number-format'

import type {
    GetSettingsBillingResponse,
    CreditCard,
    CreditCardInfo,
} from '../types'

const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
]

const SettingsBilling = () => {
    const navigate = useNavigate()

    const [selectedCard, setSelectedCard] = useState<{
        type: 'NEW' | 'EDIT' | ''
        dialogOpen: boolean
        cardInfo: Partial<CreditCardInfo>
    }>({
        type: '',
        dialogOpen: false,
        cardInfo: {},
    })

    const {
        data = {
            currentPlan: {
                plan: '',
                status: '',
                billingCycle: '',
                nextPaymentDate: null,
                amount: null,
            },
            paymentMethods: [],
            transactionHistory: [],
        },
    } = useSWR(
        '/api/settings/billing/',
        () => apiGetSettingsBilling<GetSettingsBillingResponse>(),
        {
            revalidateOnFocus: false,
            revalidateIfStale: false,
            revalidateOnReconnect: false,
        },
    )

    const handleEditCreditCard = (card: Partial<CreditCard>) => {
        setSelectedCard({
            type: 'EDIT',
            dialogOpen: true,
            cardInfo: card,
        })
    }

    const handleCreditCardDialogClose = () => {
        setSelectedCard({
            type: '',
            dialogOpen: false,
            cardInfo: {},
        })
    }

    const handleEditCreditCardSubmit = async () => {
        await sleep(500)
        handleCreditCardDialogClose()
        toast.push(
            <Notification type="success">Credit card updated!</Notification>,
            { placement: 'top-center' },
        )
    }

    const handleAddCreditCardSubmit = async (values: CreditCard) => {
        console.log('Submitted values', values)
        await sleep(500)
        handleCreditCardDialogClose()
        toast.push(
            <Notification type="success">Credit card added!</Notification>,
            { placement: 'top-center' },
        )
    }

    const handleChangePlan = () => {
        navigate('/concepts/account/pricing?subcription=basic&cycle=monthly')
    }

    return (
        <div>
            <h4 className="mb-4">Billing</h4>
            <div className="bg-gray-100 dark:bg-gray-700 rounded-xl p-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div>
                            <Avatar
                                className="bg-emerald-500"
                                shape="circle"
                                icon={<PiLightningFill />}
                            />
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <h6 className="font-bold">
                                    {data.currentPlan.plan}
                                </h6>
                                <Tag className="bg-success-subtle text-success rounded-md border-0">
                                    <span className="capitalize">
                                        {data.currentPlan.status}
                                    </span>
                                </Tag>
                            </div>
                            <div className="font-semibold">
                                <span>
                                    Billing {data.currentPlan.billingCycle}
                                </span>
                                <span> | </span>
                                <span>
                                    Next payment on{' '}
                                    {dayjs
                                        .unix(
                                            (data.currentPlan
                                                .nextPaymentDate as number) ||
                                                0,
                                        )
                                        .format('MM/DD/YYYY')}
                                </span>
                                <span>
                                    <span className="mx-1">for</span>
                                    <NumericFormat
                                        className="font-bold heading-text"
                                        displayType="text"
                                        value={(
                                            Math.round(
                                                (data.currentPlan.amount || 0) *
                                                    100,
                                            ) / 100
                                        ).toFixed(2)}
                                        prefix={'$'}
                                        thousandSeparator={true}
                                    />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <Button
                            size="sm"
                            variant="solid"
                            onClick={handleChangePlan}
                        >
                            Change plan
                        </Button>
                    </div>
                </div>
            </div>
            <div className="mt-8">
                <h5>Payment method</h5>
                <div>
                    {data.paymentMethods?.map((card, index) => (
                        <div
                            key={card.cardId}
                            className={classNames(
                                'flex items-center justify-between p-4',
                                !isLastChild(data.paymentMethods, index) &&
                                    'border-b border-gray-200 dark:border-gray-600',
                            )}
                        >
                            <div className="flex items-center">
                                {card.cardType === 'VISA' && (
                                    <img
                                        src="/img/others/img-8.png"
                                        alt="visa"
                                    />
                                )}
                                {card.cardType === 'MASTER' && (
                                    <img
                                        src="/img/others/img-9.png"
                                        alt="master"
                                    />
                                )}
                                <div className="ml-3 rtl:mr-3">
                                    <div className="flex items-center">
                                        <div className="text-gray-900 dark:text-gray-100 font-semibold">
                                            {card.cardHolderName} ••••{' '}
                                            {card.last4Number}
                                        </div>
                                        {card.primary && (
                                            <Tag className="bg-primary-subtle text-primary rounded-md border-0 mx-2">
                                                <span className="capitalize">
                                                    {' '}
                                                    Primary{' '}
                                                </span>
                                            </Tag>
                                        )}
                                    </div>
                                    <span>
                                        Expired{' '}
                                        {months[parseInt(card.expMonth) - 1]} 20
                                        {card.expYear}
                                    </span>
                                </div>
                            </div>
                            <div className="flex">
                                <Button
                                    size="sm"
                                    type="button"
                                    onClick={() => handleEditCreditCard(card)}
                                >
                                    Edit
                                </Button>
                            </div>
                        </div>
                    ))}
                    <Button
                        variant="plain"
                        icon={<TbPlus />}
                        onClick={() => {
                            setSelectedCard({
                                type: 'NEW',
                                dialogOpen: true,
                                cardInfo: {},
                            })
                        }}
                    >
                        Add payment method
                    </Button>
                </div>
            </div>
            <div className="mt-8">
                <h5>Transaction history</h5>
                <BillingHistory
                    className="mt-4"
                    data={data.transactionHistory}
                />
            </div>
            <CreditCardDialog
                title={
                    selectedCard.type === 'NEW'
                        ? 'Add credit card'
                        : 'Edit credit card'
                }
                defaultValues={selectedCard.cardInfo as CreditCard}
                dialogOpen={selectedCard.dialogOpen}
                onDialogClose={handleCreditCardDialogClose}
                onSubmit={
                    selectedCard.type === 'NEW'
                        ? (values) =>
                              handleAddCreditCardSubmit(values as CreditCard)
                        : handleEditCreditCardSubmit
                }
            />
        </div>
    )
}

export default SettingsBilling
