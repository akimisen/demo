import { useState } from 'react'
import Avatar from '@/components/ui/Avatar'
import Button from '@/components/ui/Button'
import Switcher from '@/components/ui/Switcher'
import Dialog from '@/components/ui/Dialog'
import classNames from '@/utils/classNames'
import isLastChild from '@/utils/isLastChild'
import useSWR from 'swr'
import {
    TbCircleCheckFilled,
    TbRosetteDiscountCheckFilled,
} from 'react-icons/tb'
import { apiGetSettingsIntergration } from '@/services/AccontsService'
import type { GetSettingsIntegrationResponse, Integration } from '../types'

const SettingIntegration = () => {
    const [selectedIntegration, setSelectedIntegration] = useState<{
        integration: Partial<Integration>
        dialogOpen: boolean
    }>({
        integration: {},
        dialogOpen: false,
    })

    const { data = [], mutate } = useSWR(
        '/api/settings/integration/',
        () => apiGetSettingsIntergration<GetSettingsIntegrationResponse>(),
        {
            revalidateOnFocus: false,
            revalidateIfStale: false,
            revalidateOnReconnect: false,
        },
    )

    const handleToggle = (bool: boolean, id: string) => {
        const newData = structuredClone(data)
        mutate(
            newData.map((app) => {
                if (app.id === id) {
                    app.active = bool
                }
                return app
            }),
            false,
        )
    }

    const handleDialogClose = () => {
        setSelectedIntegration({
            integration: {},
            dialogOpen: false,
        })
    }

    return (
        <div>
            <h4>Integration</h4>
            <p>Supercharge your workflow using these integration</p>
            <div className="mt-4">
                {data.map((app, index) => (
                    <div
                        key={app.id}
                        className={classNames(
                            'flex items-center justify-between py-6 border-gray-200 dark:border-gray-700',
                            !isLastChild(data, index) && 'border-b',
                        )}
                    >
                        <div className="flex items-center gap-4">
                            <Avatar
                                className="bg-transparent dark:bg-transparent p-2 border-2 border-gray-200 dark:border-gray-700"
                                size={50}
                                src={app.img}
                                shape="round"
                            />
                            <div>
                                <h6 className="font-bold">{app.name}</h6>
                                <span>{app.desc}</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Button
                                variant="plain"
                                onClick={() =>
                                    setSelectedIntegration({
                                        dialogOpen: true,
                                        integration: app,
                                    })
                                }
                            >
                                Learn more
                            </Button>
                            <Switcher
                                checked={app.active}
                                onChange={(val) => handleToggle(val, app.id)}
                            />
                        </div>
                    </div>
                ))}
            </div>
            <Dialog
                isOpen={selectedIntegration.dialogOpen}
                onClose={handleDialogClose}
                onRequestClose={handleDialogClose}
            >
                <div className="flex items-center gap-3">
                    <Avatar
                        className="bg-transparent dark:bg-transparent p-2 border-2 border-gray-200 dark:border-gray-600"
                        size={55}
                        src={selectedIntegration.integration.img}
                        shape="round"
                    />
                    <div>
                        <div className="flex items-center gap-1">
                            <h6 className="font-bold">
                                {selectedIntegration.integration.name}
                            </h6>
                            <TbRosetteDiscountCheckFilled className="text-primary text-lg" />
                        </div>
                        <span className="flex gap-2">
                            <span>{selectedIntegration.integration.type}</span>
                        </span>
                    </div>
                </div>
                <div className="mt-6">
                    <span className="font-bold heading-text">Overview</span>
                    <p className="mt-2">
                        Wings medium plunger pot, redeye doppio siphon froth
                        iced. Latte, and, barista cultivar fair trade grinder
                        caramelization spoon. Whipped, grinder to go brewed est
                        single shot half and half. Plunger pot blue mountain et
                        blue mountain grinder carajillo, saucer half and half
                        milk instant strong.
                    </p>
                    <div className="mt-6">
                        <span className="font-bold heading-text">
                            Key Features:
                        </span>
                        <ul className="list-disc mt-4 flex flex-col gap-3">
                            <li className="flex gap-2">
                                <TbCircleCheckFilled className="text-xl text-emerald-500" />
                                <span>
                                    Fair trade, cortado con panna, crema foam
                                    cinnamon aged.
                                </span>
                            </li>
                            <li className="flex gap-2">
                                <TbCircleCheckFilled className="text-xl text-emerald-500" />
                                <span>
                                    Mug saucer acerbic, caffeine organic
                                    kopi-luwak galão siphon.
                                </span>
                            </li>
                            <li className="flex gap-2">
                                <TbCircleCheckFilled className="text-xl text-emerald-500" />
                                <span>
                                    To go half and half cultivar single origin
                                    ut, french press.
                                </span>
                            </li>
                            <li className="flex gap-2">
                                <TbCircleCheckFilled className="text-xl text-emerald-500" />
                                <span>
                                    Mocha latte flavour cortado cup kopi-luwak.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className=" mt-6">
                    <Button block onClick={handleDialogClose}>
                        Acknowledge
                    </Button>
                </div>
            </Dialog>
        </div>
    )
}

export default SettingIntegration
