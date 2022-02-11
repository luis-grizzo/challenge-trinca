import * as S from './styles'

export type ButtonVariants = 'default' | 'ghost' | 'outlined'

export type ButtonProps = {
  fullWidth?: boolean
  variant: ButtonVariants
  icon?: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({
  fullWidth,
  variant,
  icon,
  children,
  ...props
}: ButtonProps): React.ReactElement => {
  return (
    <S.Button fullWidth={fullWidth} variant={variant} type="button" {...props}>
      {icon}
      {children}
    </S.Button>
  )
}
