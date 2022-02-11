import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
import { format } from 'date-fns'
import { toast } from 'react-toastify'
import { MdKeyboardReturn, MdAdd, MdCheck, MdInfo } from 'react-icons/md'

import { IEvent, IParticipant } from 'shared/types'
import { findEventInStorage } from 'services/events'
import { formatAmount } from 'shared/utils'
import { Button, Modal, Input, Checkbox, CurrencyInput } from 'components'
import icon_guests from 'assets/icon_guests.svg'
import icon_money from 'assets/icon_money.svg'

import List from './components/List'
import * as S from './styles'
import { setParticipantInStorage } from 'services/events/setParticipantInStorage'

const Details = (): React.ReactElement => {
  const params = useParams()
  const navigate = useNavigate()

  const [event, setEvent] = useState<IEvent>(
    findEventInStorage(parseInt(params.id ?? ''))
  )

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [registerParticipantForm, setRegisterParticipantForm] = useState<
    Pick<IParticipant, 'name' | 'includeDrink' | 'amount'>
  >({
    name: '',
    includeDrink: false,
    amount: 1500
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const { includeDrink, amount } = registerParticipantForm
    const newEvent = setParticipantInStorage(event.id, {
      ...registerParticipantForm,
      amount: includeDrink ? amount + 2000 : amount
    })

    setEvent(newEvent)
    setModalIsOpen(false)
    setRegisterParticipantForm({
      name: '',
      includeDrink: false,
      amount: 1500
    })

    toast.success('participante adicionado com sucesso!')
  }

  const wrapperAnimation = useSpring({
    from: { opacity: 0, y: 100 },
    to: { opacity: 1, y: 0 }
  })

  const amountAnimation = useSpring({
    val: event.value,
    from: { val: 0 }
  })

  return (
    <S.Wrapper>
      <div className="w__controls">
        <Button
          variant="outlined"
          icon={<MdKeyboardReturn />}
          onClick={() => navigate('/')}
        >
          Voltar
        </Button>
      </div>

      <animated.div style={wrapperAnimation} className="w__page">
        <div className="wp__header">
          <div className="wph__row">
            <div className="wph__column">
              <span className="wph__date">
                {format(new Date(event.date), 'dd/MM')}
              </span>

              <h1 className="wph__title">{event.title}</h1>
            </div>

            <div className="wph__column">
              <span className="wph__guests">
                <img src={icon_guests} alt="Ícone de convidados" />
                {event.participants?.length ?? 0}
              </span>

              <span className="wph__money">
                <img src={icon_money} alt="Ícone cifrão" />
                <animated.span>
                  {amountAnimation.val.to((value) =>
                    formatAmount(Math.floor(value) / 100)
                  )}
                </animated.span>
              </span>
            </div>
          </div>

          {event.additionalInfo && (
            <div className="wph__additional-information">
              {event.additionalInfo}
            </div>
          )}
        </div>

        <div className="wp__list">
          <List
            eventId={event.id}
            participants={event.participants}
            onParticipantUpdate={(newEvent) => setEvent(newEvent)}
          />
        </div>

        <Button
          variant="default"
          fullWidth
          icon={<MdAdd />}
          onClick={() => setModalIsOpen(true)}
        >
          Adicionar Participante
        </Button>
      </animated.div>

      <Modal
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        modalTitle="Adicionar participante"
      >
        <form onSubmit={handleSubmit} className="wm__form">
          <Input
            value={registerParticipantForm.name}
            onChange={(e) =>
              setRegisterParticipantForm((prevValue) => ({
                ...prevValue,
                name: e.target.value
              }))
            }
            label="Nome participante"
            placeholder="Qual o nome da fera?"
            autoFocus
          />

          <div className="wmf__money">
            <CurrencyInput
              value={registerParticipantForm.amount}
              onChange={(value) => {
                setRegisterParticipantForm((prevValue) => ({
                  ...prevValue,
                  amount: value
                }))
              }}
              label="Contribuição"
            />

            <Checkbox
              checked={registerParticipantForm.includeDrink}
              onChange={() =>
                setRegisterParticipantForm((prevValue) => ({
                  ...prevValue,
                  includeDrink: !prevValue.includeDrink
                }))
              }
              label="Incluir bebidas"
              infoIcon={{ icon: <MdInfo />, message: 'Acrécimo de R$20,00' }}
            />
          </div>

          <Button
            variant="default"
            type="submit"
            fullWidth
            icon={<MdCheck />}
            disabled={
              !registerParticipantForm.name ||
              registerParticipantForm.amount === 0
            }
          >
            Confirmar
          </Button>
        </form>
      </Modal>
    </S.Wrapper>
  )
}

export default Details
