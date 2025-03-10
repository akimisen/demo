export type Tag = {
    label: string
    value: string
    color?: string
}

export type Note = {
    id: string
    name: string
    description: string
    createdAt?: Date
}