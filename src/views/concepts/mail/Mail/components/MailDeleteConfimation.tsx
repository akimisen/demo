import ConfirmDialog from '@/components/shared/ConfirmDialog'

type MailDeleteConfimationProps = {
    isOpen: boolean
    onClose: () => void
    onConfirmDelete: () => void
    selectedMailCount: number
}

const MailDeleteConfimation = ({
    isOpen,
    onClose,
    onConfirmDelete,
    selectedMailCount,
}: MailDeleteConfimationProps) => {
    return (
        <ConfirmDialog
            isOpen={isOpen}
            type="danger"
            title="Delete mail"
            onClose={onClose}
            onRequestClose={onClose}
            onCancel={onClose}
            onConfirm={onConfirmDelete}
        >
            <p>
                Are you sure you want to delete{' '}
                {selectedMailCount > 1
                    ? `${selectedMailCount} of these mails`
                    : 'this mail'}{' '}
                ? This action can&apos;t be undo.{' '}
            </p>
        </ConfirmDialog>
    )
}

export default MailDeleteConfimation
