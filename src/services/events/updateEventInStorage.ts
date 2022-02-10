import { IEvent } from 'shared/types/event'

import { getParsedStorage } from './getParsedStorage'
import { setStorage } from './setStorage'

export const updateEventInStorage = (event: IEvent) => {
  const parsedStorage = getParsedStorage()

  const finalStorage = parsedStorage.map((item) => {
    if (item.id === event.id) return { ...event }

    return item
  })

  setStorage(finalStorage)
}
