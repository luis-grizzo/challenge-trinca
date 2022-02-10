import { forwardRef } from 'react'

import * as S from './styles'

type CheckboxProps = {
  label: string
  wrapperClassName?: string
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'className'>

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, wrapperClassName, ...props }, ref): React.ReactElement => {
    const linkInputLabel = label.replace(/\W/g, '').toLowerCase()

    return (
      <S.Wrapper className={wrapperClassName}>
        <input
          ref={ref}
          id={linkInputLabel}
          type="checkbox"
          className="w__checkbox"
          {...props}
        />
        <label htmlFor={linkInputLabel} className="w__label">
          {label}
        </label>
      </S.Wrapper>
    )
  }
)

export default Checkbox
