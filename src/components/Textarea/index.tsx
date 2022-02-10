import { forwardRef } from 'react'

import * as S from './styles'

type TextareaProps = {
  label: string
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, ...props }, ref): React.ReactElement => {
    const linkTextareaLabel = label.replace(/\W/g, '').toLowerCase()

    return (
      <S.Wrapper>
        <label htmlFor={linkTextareaLabel} className="w__label">
          {label}
        </label>
        <textarea
          ref={ref}
          id={linkTextareaLabel}
          className="w__textarea"
          {...props}
        />
      </S.Wrapper>
    )
  }
)

export default Textarea
