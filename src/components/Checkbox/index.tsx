import * as S from './styles'

type CheckboxProps = {
  label: string
  wrapperClassName?: string
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'className'>

const Checkbox = ({
  label,
  wrapperClassName,
  ...props
}: CheckboxProps): React.ReactElement => {
  const linkInputLabel = label.replace(/\W/g, '').toLowerCase()

  return (
    <S.Wrapper className={wrapperClassName}>
      <input
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

export default Checkbox
