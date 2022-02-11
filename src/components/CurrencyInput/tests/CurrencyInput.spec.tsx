import { renderWithTheme } from 'shared/utils/render-with-theme'

import { CurrencyInput } from '..'

describe('<CurrencyInput />', () => {
  it('render CurrencyInput', () => {
    renderWithTheme(<CurrencyInput label="test" value={0} />)
  })
})
