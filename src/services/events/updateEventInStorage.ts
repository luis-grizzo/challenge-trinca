import { IEvent } from 'shared/types'

import { getParsedEventsStorage } from '.'

export const updateEventInStorage = (newEvent: IEvent) => {
  const parsedStorage = getParsedEventsStorage()

  const newStorage = parsedStorage.map((event) => {
    if (event.id === newEvent.id) return { ...newEvent }

    return event
  })

  localStorage.setItem('@churras-trinca/events', JSON.stringify(newStorage))

  return newStorage
}
