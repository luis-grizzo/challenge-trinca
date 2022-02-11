import CurrencyiInput, {
  NumberFormatProps as RNFCurrencyiInputProps
} from 'react-number-format'

import { formatAmount } from 'shared/utils'

type CurrencyInputProps = {
  label: string
  onChange?: (value: number) => void
} & Omit<RNFCurrencyiInputProps, 'onChange'>

import * as S from './styles'

export const CurrencyInput = ({
  label,
  onChange,
  ...props
}: CurrencyInputProps): React.ReactElement => {
  const linkInputLabel = label.replace(/\W/g, '').toLowerCase()

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value =
      e.target.value.replace(/[-R$.,]/g, '') === ''
        ? 0
        : parseInt(e.target.value.replace(/[-R$.,]/g, ''))

    return onChange?.(value)
  }

  return (
    <S.Wrapper>
      <label htmlFor={linkInputLabel} className="w__label">
        {label}
      </label>
      <CurrencyiInput
        type="tel"
        id={linkInputLabel}
        defaultValue={0}
        isNumericString
        allowNegative={false}
        allowLeadingZeros={false}
        format={(value) => formatAmount(parseInt(value) / 100)}
        onChange={handleOnChange}
        className="w__input"
        {...props}
      />
    </S.Wrapper>
  )
}
