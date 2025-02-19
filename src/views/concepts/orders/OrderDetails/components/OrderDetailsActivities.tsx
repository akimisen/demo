import classNames from '@/utils/classNames'
import Timeline from '@/components/ui/Timeline'
import Badge from '@/components/ui/Badge'
import Card from '@/components/ui/Card'
import Tag from '@/components/ui/Tag'
import isLastChild from '@/utils/isLastChild'
import dayjs from 'dayjs'
import type { Activities } from '../types'

type OrderDetailsActivitiesProps = {
    activities: Activities
    progressStatus: number
}

const progress: Record<number, { label: string; class: string }> = {
    0: {
        label: 'Fulfilled',
        class: 'bg-success-subtle text-success',
    },
    1: {
        label: 'Unfulfilled',
        class: 'bg-error-subtle text-error',
    },
}

const OrderDetailsActivities = ({
    activities,
    progressStatus,
}: OrderDetailsActivitiesProps) => {
    return (
        <Card>
            <div className="flex items-center gap-2 mb-4">
                <h5>Activity</h5>
                <Tag
                    className={classNames(
                        'border-0 rounded-md',
                        progress[progressStatus || 0].class,
                    )}
                >
                    {progress[progressStatus || 0].label}
                </Tag>
            </div>
            {activities.map((activity, i) => (
                <div
                    key={activity.date}
                    className={!isLastChild(activities, i) ? 'mb-8' : ''}
                >
                    <div className="mb-2 font-bold heading-text uppercase">
                        {dayjs.unix(activity.date).format('dddd, DD MMMM')}
                    </div>
                    <Timeline>
                        {activity.events.map((event, j) => (
                            <Timeline.Item
                                key={event.time + j}
                                media={
                                    <div className="flex mt-1">
                                        <Badge
                                            innerClass={classNames(
                                                event.recipient
                                                    ? 'bg-emerald-500'
                                                    : 'bg-blue-500',
                                            )}
                                        />
                                    </div>
                                }
                            >
                                <div
                                    className={classNames(
                                        'font-bold mb-1 heading-text',
                                        event.recipient && 'text-emerald-500',
                                    )}
                                >
                                    {event.action}
                                </div>
                                {event.recipient && (
                                    <div className="mb-1">
                                        Recipient: {event.recipient}
                                    </div>
                                )}
                                <div>
                                    {dayjs.unix(event.time).format('hh:mm A')}
                                </div>
                            </Timeline.Item>
                        ))}
                    </Timeline>
                </div>
            ))}
        </Card>
    )
}

export default OrderDetailsActivities
