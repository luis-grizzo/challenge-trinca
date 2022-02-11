import { renderWithTheme } from 'shared/utils/render-with-theme'

import { Modal } from '..'

describe('<Modal />', () => {
  it('render Modal', () => {
    renderWithTheme(<Modal isOpen={false} />)
  })
})
