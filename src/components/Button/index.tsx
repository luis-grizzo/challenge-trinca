import * as S from './styles'

export type ButtonVariants = 'default' | 'ghost'

export type ButtonProps = {
  fullWidth?: boolean
  variant?: ButtonVariants
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
  fullWidth,
  variant = 'default',
  children,
  ...props
}: ButtonProps): React.ReactElement => {
  return (
    <S.Button fullWidth={fullWidth} variant={variant} type="button" {...props}>
      {children}
    </S.Button>
  )
}

export default Button
