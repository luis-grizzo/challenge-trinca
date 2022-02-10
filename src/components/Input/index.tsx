import { forwardRef } from 'react'

import * as S from './styles'

type InputProps = {
  label: string
} & React.InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, ...props }, ref): React.ReactElement => {
    const linkInputLabel = label.replace(/\W/g, '').toLowerCase()

    return (
      <S.Wrapper>
        <label htmlFor={linkInputLabel} className="w__label">
          {label}
        </label>
        <input ref={ref} id={linkInputLabel} className="w__input" {...props} />
      </S.Wrapper>
    )
  }
)
