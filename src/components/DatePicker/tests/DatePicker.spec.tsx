import { renderWithTheme } from 'utils/render-with-theme'

import DatePicker from '..'

describe('<DatePicker />', () => {
  it('render DatePicker', () => {
    renderWithTheme(
      <DatePicker
        label="test"
        onChange={() => console.log()}
        onClean={() => console.log(null)}
      />
    )
  })
})
