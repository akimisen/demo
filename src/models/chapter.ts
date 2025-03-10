import { Character, Location } from './novel'
import { Tag, Note } from './common'

export type Chapter = {
    novelId: string
    novelName: string
    id: string
    title: string
    summary: string
    text: string
    status: number
    plotId: string
    sequenceId: string
    characters: Character[]
    locations: Location[]
    tags: Tag[]
    notes: Note[]
}