import { renderWithTheme } from '../../../utils/render-with-theme'

import Button from '..'

describe('<Button />', () => {
  it('Should render', () => {
    renderWithTheme(<Button />)
    expect(1).toBe(1)
  })
})
