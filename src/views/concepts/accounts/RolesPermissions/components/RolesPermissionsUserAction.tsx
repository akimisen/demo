import Badge from '@/components/ui/Badge'
import Select, { Option as DefaultOption } from '@/components/ui/Select'
import DebouceInput from '@/components/shared/DebouceInput'
import { useRolePermissionsStore } from '../store/rolePermissionsStore'
import { TbSearch } from 'react-icons/tb'
import { components } from 'react-select'
import type { ControlProps, OptionProps } from 'react-select'

const { Control } = components

type StatusOption = {
    label: string
    value: string
    dotBackground: string
}

type RoleOption = {
    label: string
    value: string
}

const statusOptions = [
    { label: 'All', value: '', dotBackground: 'bg-gray-200' },
    { label: 'Active', value: 'active', dotBackground: 'bg-success' },
    { label: 'Blocked', value: 'blocked', dotBackground: 'bg-error' },
]

const roleOptions = [
    { label: 'All', value: '' },
    { label: 'Admin', value: 'admin' },
    { label: 'Supervisor', value: 'supervisor' },
    { label: 'Support', value: 'support' },
    { label: 'User', value: 'user' },
    { label: 'Auditor', value: 'auditor' },
    { label: 'Guest', value: 'guest' },
]

const StatusSelectOption = (props: OptionProps<StatusOption>) => {
    return (
        <DefaultOption<StatusOption>
            {...props}
            customLabel={(data, label) => (
                <span className="flex items-center gap-2">
                    <Badge className={data.dotBackground} />
                    <span>{label}</span>
                </span>
            )}
        />
    )
}

const RoleSelectOption = (props: OptionProps<RoleOption>) => {
    return (
        <DefaultOption<RoleOption>
            {...props}
            customLabel={(_, label) => <span>{label}</span>}
        />
    )
}

const CustomControl = ({ children, ...props }: ControlProps<StatusOption>) => {
    const selected = props.getValue()[0]
    return (
        <Control {...props}>
            {selected && (
                <div className="flex ml-3">
                    <Badge className={selected.dotBackground} />
                </div>
            )}
            {children}
        </Control>
    )
}

const RolesPermissionsUserAction = () => {
    const { tableData, filterData, setFilterData, setTableData } =
        useRolePermissionsStore()

    const handleStatusChange = (status: string) => {
        setFilterData({ ...filterData, status })
    }

    const handleRoleChange = (role: string) => {
        setFilterData({ ...filterData, role })
    }

    const handleInputChange = (query: string) => {
        setTableData({ ...tableData, query })
    }

    return (
        <div className="flex items-center justify-between">
            <DebouceInput
                className="max-w-[300px]"
                placeholder="Search..."
                type="text"
                size="sm"
                prefix={<TbSearch className="text-lg" />}
                onChange={(e) => handleInputChange(e.target.value)}
            />
            <div className="flex items-center gap-2">
                <Select<StatusOption, false>
                    className="min-w-[150px] w-full"
                    components={{
                        Control: CustomControl,
                        Option: StatusSelectOption,
                    }}
                    options={statusOptions}
                    size="sm"
                    placeholder="Status"
                    defaultValue={{
                        label: 'All',
                        value: '',
                        dotBackground: 'bg-gray-200',
                    }}
                    onChange={(option) =>
                        handleStatusChange(option?.value || '')
                    }
                />
                <Select<RoleOption>
                    className="min-w-[150px] w-full"
                    components={{
                        Option: RoleSelectOption,
                    }}
                    options={roleOptions}
                    size="sm"
                    placeholder="Role"
                    defaultValue={{ label: 'All', value: '' }}
                    onChange={(option) => handleRoleChange(option?.value || '')}
                />
            </div>
        </div>
    )
}

export default RolesPermissionsUserAction
