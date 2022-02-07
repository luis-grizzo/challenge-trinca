import RMDatePicker, {
  DatePickerProps as RMDatePickerPops,
  CalendarProps as RMDPCalendarProps,
  DateObject
} from 'react-multi-date-picker'
import { MdClose } from 'react-icons/md'

import DatePickerButton from './datepickerButton'
import { localePTBR } from './localePTBR'
import * as S from './styles'

type DatePickerProps = {
  label: string
  onChange: (date: Date) => void
  onClean: () => void
} & RMDatePickerPops &
  Omit<RMDPCalendarProps, 'onChange'>

const DatePicker = ({
  label,
  value,
  onChange,
  onClean,
  ...props
}: DatePickerProps): React.ReactElement => {
  const linkInputLabel = label.replace(/\W/g, '').toLowerCase()

  return (
    <S.Wrapper>
      <label htmlFor={linkInputLabel} className="w__label">
        {label}
      </label>
      <div className="w__input-wrapper">
        <RMDatePicker
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
          inputClass="wiw__input"
          {...props}
        />
        {value && (
          <button
            type="button"
            onClick={() => onClean()}
            className="wiw__clear-button"
            title="Limpar data"
          >
            <MdClose size={15} />
          </button>
        )}
      </div>
    </S.Wrapper>
  )
}

export default DatePicker
