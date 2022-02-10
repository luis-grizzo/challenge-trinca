import { forwardRef } from 'react'

import CurrencyiInput, {
  NumberFormatProps as RNFCurrencyiInputProps
} from 'react-number-format'

import { formatAmount } from 'utils/format-amount'

type CurrencyInputProps = {
  label: string
  onChange?: (value: string) => void
} & Omit<RNFCurrencyiInputProps, 'onChange'>

import * as S from './styles'

const CurrencyInput = forwardRef<HTMLInputElement, CurrencyInputProps>(
  ({ label, onChange, ...props }, ref): React.ReactElement => {
    const linkInputLabel = label.replace(/\W/g, '').toLowerCase()

    return (
      <S.Wrapper>
        <label htmlFor={linkInputLabel} className="w__label">
          {label}
        </label>
        <CurrencyiInput
          getInputRef={ref}
          id={linkInputLabel}
          isNumericString
          allowNegative={false}
          allowLeadingZeros={false}
          format={(value) => formatAmount(parseInt(value) / 100)}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            onChange?.(
              event.target.value.replace(/[R$.]/g, '').replace(/,/g, '.')
            )
          }
          className="w__input"
          {...props}
        />
      </S.Wrapper>
    )
  }
)

export default CurrencyInput
