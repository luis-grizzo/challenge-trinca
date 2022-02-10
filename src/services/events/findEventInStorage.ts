import { IEvent } from 'shared/types/event'

import { getParsedStorage } from './getParsedStorage'

export const findEventInStorage = (id: number): IEvent => {
  const parsedStorage = getParsedStorage()

  const filter = parsedStorage.filter((item: IEvent) => item.id === id)

  return filter[0]
}
