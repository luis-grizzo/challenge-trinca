import RMDatePicker, {
  DatePickerProps as RMDatePickerPops,
  CalendarProps as RMDPCalendarProps,
  DateObject
} from 'react-multi-date-picker'

import DatePickerButton from './datepickerButton'
import { localePTBR } from './localePTBR'
import * as S from './styles'

type DatePickerProps = {
  label: string
  onChange: (date: Date) => void
} & RMDatePickerPops &
  Omit<RMDPCalendarProps, 'onChange'>

export const DatePicker = ({
  label,
  value,
  onChange,
  ...props
}: DatePickerProps): React.ReactElement => {
  const linkInputLabel = label.replace(/\W/g, '').toLowerCase()

  return (
    <S.Wrapper>
      <label htmlFor={linkInputLabel} className="w__label">
        {label}
      </label>
      <RMDatePicker
        title="Selecione uma data"
        id={linkInputLabel}
        value={value}
        onChange={(date: DateObject) =>
          onChange(new Date(date?.format('MM/DD/YYYY')))
        }
        weekDays={localePTBR.weekDays}
        months={localePTBR.months}
        format="DD/MM/YYYY"
        renderButton={<DatePickerButton />}
        minDate={new Date()}
        onOpenPickNewDate={false}
        editable={false}
        arrow={false}
        inputClass="w__input"
        {...props}
      />
    </S.Wrapper>
  )
}
