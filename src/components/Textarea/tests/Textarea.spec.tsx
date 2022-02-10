import { renderWithTheme } from 'utils/render-with-theme'

import { Textarea } from '..'

describe('<Textarea />', () => {
  it('render Textarea', () => {
    renderWithTheme(<Textarea label="test" />)
  })
})
