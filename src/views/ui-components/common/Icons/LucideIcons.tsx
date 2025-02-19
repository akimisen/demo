import IconWrapper from './IconWrapper'
import {
    LuAccessibility,
    LuActivity,
    LuSquareActivity,
    LuAirVent,
    LuAirplay,
    LuAlarmClockCheck,
    LuAlarmClock,
    LuAlarmClockOff,
    LuAlarmClockMinus,
} from 'react-icons/lu'

const renderIcon = [
    { render: () => <LuAccessibility /> },
    { render: () => <LuActivity /> },
    { render: () => <LuSquareActivity /> },
    { render: () => <LuAirVent /> },
    { render: () => <LuAirplay /> },
    { render: () => <LuAlarmClockCheck /> },
    { render: () => <LuAlarmClock /> },
    { render: () => <LuAlarmClockOff /> },
    { render: () => <LuAlarmClockMinus /> },
]

const LucideIcons = () => {
    return (
        <div className="grid grid-cols-3 gap-y-6 text-4xl text-center heading-text">
            {renderIcon.map((icon, index) => (
                <IconWrapper key={`icoMoonFree-${index}`}>
                    {icon.render()}
                </IconWrapper>
            ))}
        </div>
    )
}

export default LucideIcons
