import { MdLocalDrink } from 'react-icons/md'

import { IEvent, IParticipant } from 'shared/types/event'

import { updatePartcipant } from 'services/events/updateParticipant'

import { formatAmount } from 'utils/format-amount'

import Checkbox from 'components/Checkbox'

import * as S from 'pages/Details/styles'

interface IListProps {
  eventId: number
  participants?: IParticipant[]
  onParticipantUpdate: (event: IEvent) => void
}

const List = ({
  eventId,
  participants,
  onParticipantUpdate
}: IListProps): React.ReactElement => {
  return (
    <S.List>
      {!participants || participants.length === 0 ? (
        <span>Nenhum participante adicionado ainda :(</span>
      ) : (
        participants.map((participant) => (
          <div
            key={participant.id}
            className={`l__row ${participant.paid ? 'l__row--checked' : ''}`}
            onClick={() => {
              onParticipantUpdate(
                updatePartcipant(eventId, {
                  ...participant,
                  paid: !participant.paid
                })
              )
            }}
          >
            <div className="lr__left">
              <Checkbox
                label={participant.name}
                checked={participant.paid}
                readOnly
              />
              {participant.includeDrink && <MdLocalDrink />}
            </div>

            <span className="lr__right">
              {formatAmount(participant.amount / 100)}
            </span>
          </div>
        ))
      )}
    </S.List>
  )
}

export default List
