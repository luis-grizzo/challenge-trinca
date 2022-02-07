import { MdArrowLeft, MdArrowRight } from 'react-icons/md'

import Button from 'components/Button'

type ButtonDirections = 'left' | 'right'

type DatePickerButtonProps = {
  direction?: ButtonDirections
  handleClick?: () => void
  disabled?: boolean
}

const renderButtonsIcons = (direction: ButtonDirections) =>
  ({
    left: <MdArrowLeft size={30} />,
    right: <MdArrowRight size={30} />
  }[direction])

const DatePickerButton = ({
  direction,
  handleClick,
  disabled
}: DatePickerButtonProps): React.ReactElement => (
  <Button
    variant="ghost"
    onClick={handleClick}
    disabled={disabled}
    className="rmdp__button"
  >
    {direction && renderButtonsIcons(direction)}
  </Button>
)

export default DatePickerButton
