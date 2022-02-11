import { IEvent } from 'shared/types/event'

import { getParsedEventsStorage } from './getParsedEventsStorage'

export const findEventInStorage = (eventId: number): IEvent => {
  const parsedStorage = getParsedEventsStorage()

  const filter = parsedStorage.filter((event: IEvent) => event.id === eventId)

  return filter[0]
}
