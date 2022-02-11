import { renderWithTheme } from 'shared/utils/render-with-theme'

import { Input } from '..'

describe('<Input />', () => {
  it('render Input', () => {
    renderWithTheme(<Input label="test" />)
  })
})
