import * as S from './styles'

type InputProps = {
  label: string
} & React.InputHTMLAttributes<HTMLInputElement>

export const Input = ({ label, ...props }: InputProps): React.ReactElement => {
  const linkInputLabel = label.replace(/\W/g, '').toLowerCase()

  return (
    <S.Wrapper>
      <label role="label" htmlFor={linkInputLabel} className="w__label">
        {label}
      </label>
      <input role="input" id={linkInputLabel} className="w__input" {...props} />
    </S.Wrapper>
  )
}
