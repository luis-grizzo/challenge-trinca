import * as S from './styles'

type TextareaProps = {
  label: string
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>

export const Textarea = ({
  label,
  ...props
}: TextareaProps): React.ReactElement => {
  const linkTextareaLabel = label.replace(/\W/g, '').toLowerCase()

  return (
    <S.Wrapper>
      <label role="label" htmlFor={linkTextareaLabel} className="w__label">
        {label}
      </label>
      <textarea
        role="textarea"
        id={linkTextareaLabel}
        className="w__textarea"
        {...props}
      />
    </S.Wrapper>
  )
}
