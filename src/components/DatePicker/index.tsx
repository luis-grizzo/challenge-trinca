import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker'

import * as S from './styles'
import 'react-datepicker/dist/react-datepicker.css'

type DatePickerProps = {
  label: string
} & ReactDatePickerProps

const DatePicker = ({
  label,
  onChange,
  ...props
}: DatePickerProps): React.ReactElement => {
  const linkInputLabel = label.replace(/\W/g, '').toLowerCase()

  return (
    <S.Wrapper>
      <label htmlFor={linkInputLabel} className="w__label">
        {label}
      </label>
      <ReactDatePicker
        id={linkInputLabel}
        onChange={onChange}
        isClearable
        className="w__input"
        {...props}
      />
    </S.Wrapper>
  )
}

export default DatePicker
