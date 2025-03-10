export type Character = {
    id: string
    name: string
    description: string
    avatar?: string
    traits?: string[]
}

export type Location = {
    id: string
    name: string
    description: string
    map?: {id: string, name: string}[]
}

export type Plot = {
    id: string
    name: string
    description: string
    characters: Character[]
}