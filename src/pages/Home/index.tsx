import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTrail, animated } from 'react-spring'
import { format } from 'date-fns'
import { toast } from 'react-toastify'
import { MdCheck, MdLogout, MdOutdoorGrill } from 'react-icons/md'
import { RiEmotionSadLine } from 'react-icons/ri'

import { IEvent } from 'shared/types'
import { getParsedEventsStorage, setEventInStorage } from 'services/events'
import { useAuth } from 'shared/hooks/auth'
import { formatAmount } from 'shared/utils'
import { Modal, DatePicker, Input, Textarea, Button } from 'components'
import icon_guests from 'assets/icon_guests.svg'
import icon_money from 'assets/icon_money.svg'

import * as S from './styles'

const Home = (): React.ReactElement => {
  const navigate = useNavigate()
  const { logout } = useAuth()

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [events, setEvents] = useState<IEvent[]>(getParsedEventsStorage())
  const [registerEventForm, setRegisterEventForm] = useState<
    Pick<IEvent, 'title' | 'date' | 'additionalInfo'>
  >({
    title: '',
    date: new Date(),
    additionalInfo: ''
  })

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    const newState = setEventInStorage(registerEventForm)

    setEvents(newState)
    setModalIsOpen(false)
    setRegisterEventForm({
      title: '',
      date: new Date(),
      additionalInfo: ''
    })

    toast.success('Churras adicionado com sucesso!')
  }

  const trail = useTrail(events.length, {
    from: { opacity: 0, y: 100 },
    to: { opacity: 1, y: 1 }
  })

  return (
    <S.Wrapper>
      <div className="w__controls">
        <Button variant="outlined" icon={<MdLogout />} onClick={() => logout()}>
          Sair
        </Button>

        <Button
          variant="default"
          icon={<MdOutdoorGrill />}
          onClick={() => setModalIsOpen(true)}
        >
          Adicionar churras
        </Button>
      </div>

      <div className="w__grid">
        {trail.length === 0 ? (
          <div
            onClick={() => setModalIsOpen(true)}
            className="wg__no-event-card"
          >
            <RiEmotionSadLine size={80} />
            <span className="wgcec__description">
              Nenhum churras adicionado
            </span>
          </div>
        ) : (
          trail.map((style, index) => (
            <animated.div
              key={events[index].id}
              style={style}
              onClick={() => navigate(`/details/${events[index].id}`)}
              className="wg__event-card"
              tabIndex={1}
            >
              <div className="wgec__event-date">
                {format(new Date(events[index].date), 'dd/MM')}
              </div>

              <div className="wgec__description">{events[index].title}</div>

              <div className="wgec__guests-number">
                <img src={icon_guests} alt="Ícone convidados" />
                {events[index].participants.length}
              </div>

              <div className="wgec__amount">
                <img src={icon_money} alt="Ícone cifrão" />
                {formatAmount(events[index].value / 100)}
              </div>
            </animated.div>
          ))
        )}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        modalTitle="Adicionar churras"
      >
        <form onSubmit={onSubmit} className="wm__form">
          <Input
            value={registerEventForm.title}
            onChange={(event) =>
              setRegisterEventForm((prevValue) => ({
                ...prevValue,
                title: event.target.value
              }))
            }
            label="Titulo"
            type="text"
            placeholder="Qual o motivo da festa?"
            autoFocus
          />

          <DatePicker
            value={registerEventForm.date}
            onChange={(date) =>
              setRegisterEventForm((prevValue) => ({
                ...prevValue,
                date
              }))
            }
            label="Selecione uma data"
            placeholder="Escolha uma boa data para celebrar!"
          />

          <Textarea
            value={registerEventForm.additionalInfo}
            onChange={(event) =>
              setRegisterEventForm((prevValue) => ({
                ...prevValue,
                additionalInfo: event.target.value
              }))
            }
            label="Informações adicionais"
            placeholder="O que o pessoal não pode esquecer? (Opcional)"
          />

          <Button
            variant="default"
            type="submit"
            fullWidth
            icon={<MdCheck />}
            disabled={!registerEventForm.title}
          >
            Adicionar
          </Button>
        </form>
      </Modal>
    </S.Wrapper>
  )
}

export default Home
