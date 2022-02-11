import { IoIosBeer } from 'react-icons/io'

import { IEvent, IParticipant } from 'shared/types'
import { updatePartcipantPaidInStorage } from 'services/events'
import { formatAmount } from 'shared/utils'
import { Checkbox } from 'components'

import * as S from 'pages/Details/styles'

interface IListProps {
  eventId: number
  participants: IParticipant[]
  onParticipantUpdate: (event: IEvent) => void
}

const List = ({
  eventId,
  participants,
  onParticipantUpdate
}: IListProps): React.ReactElement => {
  return (
    <S.List>
      {participants.length === 0 ? (
        <span>Nenhum participante adicionado ainda :(</span>
      ) : (
        participants.map((participant) => (
          <div
            key={participant.id}
            className={`l__row ${participant.paid ? 'l__row--checked' : ''}`}
            onClick={() => {
              onParticipantUpdate(
                updatePartcipantPaidInStorage(eventId, participant.id)
              )
            }}
          >
            <div className="lr__left">
              <Checkbox
                label={participant.name}
                checked={participant.paid}
                infoIcon={
                  participant.includeDrink
                    ? {
                        icon: <IoIosBeer />,
                        message: 'Bebida inclusa'
                      }
                    : undefined
                }
                readOnly
                labelClassName="lrl__disabled-checkbox"
              />
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
