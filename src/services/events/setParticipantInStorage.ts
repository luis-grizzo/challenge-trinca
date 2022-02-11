import { IEvent, IParticipant } from 'shared/types'
import { generateId } from 'shared/utils'

import { findEventInStorage, updateEventInStorage } from '.'

export const setParticipantInStorage = (
  eventId: number,
  participantBaseInfos: Pick<IParticipant, 'name' | 'includeDrink' | 'amount'>
) => {
  const event = findEventInStorage(eventId)

  const newEvent: IEvent = {
    ...event,
    participants: [
      ...event.participants,
      {
        ...participantBaseInfos,
        id: generateId(),
        paid: false
      }
    ]
  }

  updateEventInStorage(newEvent)

  return newEvent
}
