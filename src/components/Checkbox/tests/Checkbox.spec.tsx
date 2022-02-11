import { renderWithTheme } from 'shared/utils/render-with-theme'

import { Checkbox } from '..'

describe('<Checkbox />', () => {
  it('render Checkbox', () => {
    renderWithTheme(<Checkbox label="test" />)
  })
})
