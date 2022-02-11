import { renderWithTheme } from 'shared/utils/render-with-theme'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { CurrencyInput } from '..'

describe('<CurrencyInput />', () => {
  it('Should call onChange with correct value', () => {
    const onChange = jest.fn()
    renderWithTheme(<CurrencyInput label="test" onChange={onChange} />)

    const input = screen.getByLabelText(/test/i)

    userEvent.type(input, '1000')
    expect(onChange).toHaveBeenCalledWith(1000)
  })
})
