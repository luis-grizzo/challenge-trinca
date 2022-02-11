import { renderWithTheme } from 'shared/utils/render-with-theme'

import { DatePicker } from '..'

describe('<DatePicker />', () => {
  it('render DatePicker', () => {
    renderWithTheme(<DatePicker label="test" onChange={() => console.log()} />)
  })
})
