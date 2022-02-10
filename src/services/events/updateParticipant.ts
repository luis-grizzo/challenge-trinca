import { IEvent, IParticipant } from 'shared/types/event'

import { findEventInStorage } from './findEventInStorage'

export const updatePartcipant = (
  eventId: number,
  participant: IParticipant
) => {
  const event = findEventInStorage(eventId)

  const finalEventParticipants = event.participants.map((eventParticipant) => {
    if (eventParticipant.id === participant.id) return { ...participant }

    return eventParticipant
  })

  return {
    ...event,
    value: finalEventParticipants
      .filter((participant) => participant.paid)
      .map((participant) => participant.amount)
      .reduce((total, value) => total + value, 0),
    participants: finalEventParticipants
  } as IEvent
}
