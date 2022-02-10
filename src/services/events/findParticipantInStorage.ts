import { findEventInStorage } from './findEventInStorage'

export const findParticipantInStorage = (
  eventId: number,
  participantId: number
) => {
  const event = findEventInStorage(eventId)

  const filter = event.participants?.filter(
    (participant) => participant.id === participantId
  )

  return filter[0]
}
