import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { MdCheck, MdLogout } from 'react-icons/md'

import { useAuth } from 'shared/hooks/auth'
import { IEvent } from 'shared/types'

import { setStorage, getParsedStorage } from 'services/events'

import { Card, Modal, DatePicker, Input, Textarea, Button } from 'components'

import * as S from './styles'

type RegisterEventInputs = {
  title: string
  additionalInfo: string
}

const Home = (): React.ReactElement => {
  const navigate = useNavigate()
  const { logout } = useAuth()

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [calendarDate, setCalendarDate] = useState<Date>(new Date())
  const [events, setEvents] = useState<IEvent[]>(getParsedStorage())

  useEffect(() => {
    setStorage(events)
  }, [events])

  const {
    handleSubmit,
    control,
    formState: { isDirty }
  } = useForm<RegisterEventInputs>({
    defaultValues: {
      title: '',
      additionalInfo: ''
    }
  })

  const onSubmit: SubmitHandler<RegisterEventInputs> = ({
    title,
    additionalInfo
  }) => {
    const parsedStorage = getParsedStorage()

    setEvents([
      ...parsedStorage,
      {
        id: Math.round(Math.random() * 10000),
        title,
        additionalInfo,
        date: calendarDate,
        value: 0,
        participants: []
      }
    ])

    setModalIsOpen(false)
    toast.success('Churras adicionado com sucesso!')
  }

  return (
    <S.Wrapper>
      <div className="w__controls">
        <Button icon={<MdLogout />} onClick={() => logout()}>
          Sair
        </Button>
      </div>

      <div className="w__grid">
        {events?.map((item: IEvent) => (
          <Card
            key={item.id}
            data={item}
            onClick={() => navigate(`/details/${item.id}`)}
          />
        ))}

        <Card type="create" onClick={() => setModalIsOpen(true)} />
      </div>

      <Modal
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        modalTitle="Adicionar um novo churras"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="wm__form">
          <Controller
            name="title"
            control={control}
            render={({ field }) => (
              <Input
                label="Titulo"
                type="text"
                placeholder="Qual o motivo da festa?"
                {...field}
              />
            )}
          />

          <DatePicker
            value={calendarDate}
            onChange={(date) => setCalendarDate(date)}
            label="Selecione uma data"
            placeholder="Escolha uma boa data para celebrar!"
          />

          <Controller
            name="additionalInfo"
            control={control}
            render={({ field }) => (
              <Textarea
                label="Informações adicionais"
                placeholder="O que o pessoal não pode esquecer?"
                {...field}
              />
            )}
          />

          <Button
            type="submit"
            fullWidth
            icon={<MdCheck />}
            disabled={!isDirty}
          >
            Adicionar
          </Button>
        </form>
      </Modal>
    </S.Wrapper>
  )
}

export default Home
