import { IEvent } from 'shared/types/event'
import { generateId } from 'shared/utils'

import { getParsedEventsStorage } from '.'

export const setEventInStorage = (
  eventBaseInfos: Pick<IEvent, 'title' | 'date' | 'additionalInfo'>
) => {
  const parsedStorage = getParsedEventsStorage()

  const newStorage: IEvent[] = [
    ...parsedStorage,
    {
      ...eventBaseInfos,
      id: generateId(),
      value: 0,
      participants: []
    }
  ]

  localStorage.setItem('@churras-trinca/events', JSON.stringify(newStorage))

  return newStorage
}
