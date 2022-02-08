import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { format } from 'date-fns'
import { MdKeyboardReturn, MdAdd, MdCheck } from 'react-icons/md'

import Button from 'components/Button'
import Modal from 'components/Modal'
import Input from 'components/Input'
import Checkbox from 'components/Checkbox'
import CurrencyInput from 'components/CurrencyInput'

import { formatAmount } from 'utils/format-amount'

import icon_guests from 'assets/icon_guests.svg'
import icon_money from 'assets/icon_money.svg'

import * as S from './styles'

const Details = (): React.ReactElement => {
  const navigate = useNavigate()

  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <div className="w__controls">
        <Button icon={<MdKeyboardReturn />} onClick={() => navigate('/')}>
          Voltar
        </Button>

        <Button icon={<MdAdd />} onClick={() => setModalIsOpen(true)}>
          Adicionar Participante
        </Button>
      </div>

      <div className="w__page">
        <div className="wp__header">
          <span className="wph__date">{format(new Date(), 'dd/MM')}</span>

          <span className="wph__guests">
            <img src={icon_guests} alt="Ícone de convidados" />
            15
          </span>

          <h1 className="wph__title">Descrição</h1>

          <span className="wph__money">
            <img src={icon_money} alt="Ícone cifrão" />
            {formatAmount(280)}
          </span>

          <div className="wph__additional-information">
            Informações adicionais
          </div>
        </div>

        <div className="wp__list">
          <div className="wpl__row">
            <Checkbox label="Luís" wrapperClassName="wplr__checkbox" />
            <span className="wplr__amount">{formatAmount(22.22)}</span>
          </div>
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
        <form action="" className="wm__form">
          <Input
            label="Nome participante"
            placeholder="Qual o nome da fera?"
            autoFocus
          />
          <div className="wmf__money">
            <Checkbox label="Incluir bebidas" />
            <CurrencyInput
              label="Contribuição"
              placeholder="Com quanto podemos contar?"
              onChange={(value) => console.log(value)}
            />
          </div>
          <Button fullWidth icon={<MdCheck />}>
            Confirmar
          </Button>
        </form>
      </Modal>
    </S.Wrapper>
  )
}

export default Details
