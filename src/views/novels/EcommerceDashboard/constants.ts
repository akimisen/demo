import type { Period } from './types'

export const options: { value: Period; label: string }[] = [
    { value: 'thisMonth', label: 'Monthly' },
    { value: 'thisWeek', label: 'Weekly' },
    { value: 'thisYear', label: 'Annualy' },
]
