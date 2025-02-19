import ActionButton from './ActionButton'
import { useMailStore } from '../store/mailStore'
import { TbArrowLeft } from 'react-icons/tb'
import { useSearchParams } from 'react-router-dom'

const MailDetailTitle = () => {
    const { mail, setMail } = useMailStore()

    const [searchParams, setSearchParams] = useSearchParams()

    const handleBackButtonClick = () => {
        if (searchParams.has('mail')) {
            searchParams.delete('mail')
            setSearchParams(searchParams)
        }
        setMail({})
    }

    return (
        <div className="flex items-center gap-2">
            <ActionButton onClick={handleBackButtonClick}>
                <TbArrowLeft />
            </ActionButton>
            <h4>{mail?.title}</h4>
        </div>
    )
}

export default MailDetailTitle
