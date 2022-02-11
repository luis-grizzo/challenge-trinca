import { IEvent } from 'shared/types/event'

import { findEventInStorage, updateEventInStorage } from '.'

export const updatePartcipantPaidInStorage = (
  eventId: number,
  participantId: number
) => {
  const event = findEventInStorage(eventId)

  const newEventParticipants = event.participants.map((eventParticipant) => {
    if (eventParticipant.id === participantId)
      return { ...eventParticipant, paid: !eventParticipant.paid }

    return eventParticipant
  })

  const newEvent: IEvent = {
    ...event,
    value: newEventParticipants
      .filter((participant) => participant.paid)
      .map((participant) => participant.amount)
      .reduce((total, value) => total + value, 0),
    participants: newEventParticipants
  }

  updateEventInStorage(newEvent)

  return newEvent
}
