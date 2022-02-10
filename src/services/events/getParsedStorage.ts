import { IEvent } from 'shared/types/event'

export const getParsedStorage = (): IEvent[] => {
  !localStorage.getItem('@churras-trinca/events') &&
    localStorage.setItem('@churras-trinca/events', JSON.stringify([]))

  const storage = localStorage.getItem('@churras-trinca/events')

  const parsedStorage = storage && JSON.parse(storage)

  return parsedStorage
}
