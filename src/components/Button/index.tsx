import * as S from './styles'

export type ButtonProps = {
  fullWidth?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({fullWidth, children, ...props}: ButtonProps): React.ReactElement => {
  return(
    <S.Button fullWidth={fullWidth} {...props}>
      {children}
    </S.Button>
  )
}

export default Button 