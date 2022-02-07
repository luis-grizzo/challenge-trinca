import { useState } from 'react'

import Card from 'components/Card'
import Modal from 'components/Modal'
import DatePicker from 'components/DatePicker'
import Input from 'components/Input'
import Textarea from 'components/Textarea'
import Button from 'components/Button'

import * as S from './styles'

const Home = (): React.ReactElement => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [calendarDate, setCalendarDate] = useState<Date | null>(new Date())

  return (
    <S.Wrapper>
      <div className="w__grid">
        <Card
          mode="display"
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
            selected={calendarDate}
            onChange={(date) => setCalendarDate(date)}
            label="Selecione uma data"
            placeholderText="Escolha uma boa data para celebrar!"
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
