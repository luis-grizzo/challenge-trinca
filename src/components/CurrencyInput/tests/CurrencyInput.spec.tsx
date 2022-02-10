import { renderWithTheme } from 'utils/render-with-theme'

import { CurrencyInput } from '..'

describe('<CurrencyInput />', () => {
  it('render CurrencyInput', () => {
    renderWithTheme(<CurrencyInput label="test" />)
  })
})
