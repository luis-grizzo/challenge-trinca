import { format } from 'date-fns'

import { formatAmount } from 'utils/format-amount'

import icon_guests from 'assets/icon_guests.svg'
import icon_money from 'assets/icon_money.svg'
import icon_bbq from 'assets/icon_bbq.svg'

import * as S from './styles'

export type CardModes = 'display' | 'link'

type CardProps = {
  mode: CardModes
  eventDate?: Date
  description?: string
  guestsNumber?: number
  amount?: number
} & React.HTMLAttributes<HTMLDivElement>

const Card = ({
  mode,
  eventDate,
  description,
  guestsNumber,
  amount,
  ...props
}: CardProps): React.ReactElement => {
  const renderContent = (option: CardModes): React.ReactNode =>
    ({
      display: (
        <>
          <div className="c__event-date">{format(eventDate ?? 0, 'dd/MM')}</div>
          <div className="c__description">{description}</div>
          <div className="c__guests-number">
            <img src={icon_guests} alt="Ícone convidados" />
            {guestsNumber}
          </div>
          <div className="c__amount">
            <img src={icon_money} alt="Ícone cifrão" />
            {formatAmount(amount ?? 0)}
          </div>
        </>
      ),
      link: (
        <>
          <div className="c__image-wrapper">
            <img src={icon_bbq} alt="Ícone churrasco" />
          </div>
          <span className="c__description">Adicionar Churras</span>
        </>
      )
    }[option])

  return (
    <S.Card {...props} mode={mode}>
      {renderContent(mode)}
    </S.Card>
  )
}

export default Card
