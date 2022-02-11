import { renderWithTheme } from 'shared/utils/render-with-theme'

import { Button } from '..'

describe('<Button />', () => {
  it('Should render', () => {
    renderWithTheme(<Button variant="default" />)
    expect(1).toBe(1)
  })
})
