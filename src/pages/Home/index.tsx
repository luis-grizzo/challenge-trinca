import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Card from 'components/Card'
import Modal from 'components/Modal'
import DatePicker from 'components/DatePicker'
import Input from 'components/Input'
import Textarea from 'components/Textarea'
import Button from 'components/Button'

import * as S from './styles'

const Home = (): React.ReactElement => {
  const navigate = useNavigate()

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [calendarDate, setCalendarDate] = useState<Date | null>(null)

  return (
    <S.Wrapper>
      <div className="w__grid">
        <Card
          mode="display"
          onClick={() => navigate('/details/1')}
          eventDate={new Date()}
          description="descrição"
          guestsNumber={20}
          amount={200}
        />
        <Card mode="link" onClick={() => setModalIsOpen(true)} />
      </div>
      <Modal
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        modalTitle="Adicionar um novo churras"
      >
        <form action="" className="wm__form">
          <Input
            label="Titulo"
            placeholder="Qual o motivo da festa?"
            autoFocus
          />
          <DatePicker
            value={calendarDate}
            onChange={(date) => setCalendarDate(date)}
            onClean={() => setCalendarDate(null)}
            label="Selecione uma data"
            placeholder="Escolha uma boa data para celebrar!"
          />
          <Textarea
            label="Informações adicionais"
            placeholder="O que o pessoal não pode esquecer?"
          />
          <Button fullWidth>Adicionar</Button>
        </form>
      </Modal>
    </S.Wrapper>
  )
}

export default Home
