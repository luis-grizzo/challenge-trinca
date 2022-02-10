import { format } from 'date-fns'

import { formatAmount } from 'utils/format-amount'

import { IEvent } from 'shared/types/event'

import icon_guests from 'assets/icon_guests.svg'
import icon_money from 'assets/icon_money.svg'
import icon_bbq from 'assets/icon_bbq.svg'

import * as S from './styles'

export type CardTypes = 'display' | 'create'

export type CardProps = {
  type?: CardTypes
  data?: IEvent
} & React.HTMLAttributes<HTMLDivElement>

const Card = ({
  type = 'display',
  data,
  ...props
}: CardProps): React.ReactElement => {
  const renderContent = {
    display: (
      <>
        <div className="c__event-date">
          {data?.date && format(new Date(data?.date), 'dd/MM')}
        </div>
        <div className="c__description">{data?.title}</div>
        <div className="c__guests-number">
          <img src={icon_guests} alt="Ícone convidados" />
          {data?.participants?.length ?? 0}
        </div>
        <div className="c__amount">
          <img src={icon_money} alt="Ícone cifrão" />
          {formatAmount((data?.value ?? 0) / 100)}
        </div>
      </>
    ),
    create: (
      <>
        <div className="c__image-wrapper">
          <img src={icon_bbq} alt="Ícone churrasco" />
        </div>
        <span className="c__description">Adicionar Churras</span>
      </>
    )
  }

  return (
    <S.Card {...props} type={type}>
      {renderContent[type]}
    </S.Card>
  )
}

export default Card
