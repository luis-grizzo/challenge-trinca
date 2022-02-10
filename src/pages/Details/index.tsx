import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { format } from 'date-fns'
import { toast } from 'react-toastify'
import { MdKeyboardReturn, MdAdd, MdCheck } from 'react-icons/md'

import { IEvent } from 'shared/types/event'

import { findEventInStorage } from 'services/events/findEventInStorage'
import { updateEventInStorage } from 'services/events/updateEventInStorage'

import { formatAmount } from 'utils/format-amount'

import Button from 'components/Button'
import Modal from 'components/Modal'
import Input from 'components/Input'
import Checkbox from 'components/Checkbox'
import CurrencyInput from 'components/CurrencyInput'

import List from './components/List'

import icon_guests from 'assets/icon_guests.svg'
import icon_money from 'assets/icon_money.svg'

import * as S from './styles'

type RegisterParticipantInputs = {
  name: string
}

const Details = (): React.ReactElement => {
  const params = useParams()
  const navigate = useNavigate()

  const [event, setEvent] = useState<IEvent>(
    findEventInStorage(parseInt(params.id ?? ''))
  )

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [currencyValue, setCurrencyValue] = useState(0)
  const [includeDrink, setIncludeDrink] = useState(false)

  useEffect(() => {
    updateEventInStorage(event)
  }, [event])

  const {
    handleSubmit,
    control,
    formState: { isDirty }
  } = useForm<RegisterParticipantInputs>({
    defaultValues: {
      name: ''
    }
  })

  const onSubmit: SubmitHandler<RegisterParticipantInputs> = ({ name }) => {
    const participantValue = includeDrink
      ? (currencyValue + 20) * 100
      : currencyValue * 100

    setEvent({
      ...event,
      participants: [
        ...event.participants,
        {
          id: Math.round(Math.random() * 10000),
          name,
          amount: participantValue,
          includeDrink: includeDrink,
          paid: false
        }
      ]
    })

    setModalIsOpen(false)
    toast.success('participante adicionado com sucesso!')
  }

  return (
    <S.Wrapper>
      <div className="w__controls">
        <Button icon={<MdKeyboardReturn />} onClick={() => navigate('/')}>
          Voltar
        </Button>
      </div>

      <div className="w__page">
        <div className="wp__header">
          <span className="wph__date">
            {format(new Date(event.date), 'dd/MM')}
          </span>

          <span className="wph__guests">
            <img src={icon_guests} alt="Ícone de convidados" />

            {event.participants?.length ?? 0}
          </span>

          <h1 className="wph__title">{event.title}</h1>

          <span className="wph__money">
            <img src={icon_money} alt="Ícone cifrão" />
            {formatAmount(event.value / 100)}
          </span>

          <div className="wph__additional-information">
            {event.additionalInfo}
          </div>
        </div>

        <div className="wp__list">
          <List
            eventId={event.id}
            participants={event.participants}
            onParticipantUpdate={(eventObject) => setEvent(eventObject)}
          />
        </div>

        <Button fullWidth icon={<MdAdd />} onClick={() => setModalIsOpen(true)}>
          Adicionar Participante
        </Button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        modalTitle="Adicionar participante"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="wm__form">
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Nome participante"
                placeholder="Qual o nome da fera?"
                autoFocus
              />
            )}
          />

          <div className="wmf__money">
            <Checkbox
              checked={includeDrink}
              onChange={() => setIncludeDrink((prevValue) => !prevValue)}
              label="Incluir bebidas"
            />

            <CurrencyInput
              value={currencyValue * 100}
              onChange={(value) => setCurrencyValue(parseFloat(value))}
              label="Contribuição"
              placeholder="Com quanto podemos contar?"
            />
          </div>

          <Button
            type="submit"
            fullWidth
            icon={<MdCheck />}
            disabled={!isDirty}
          >
            Confirmar
          </Button>
        </form>
      </Modal>
    </S.Wrapper>
  )
}

export default Details
