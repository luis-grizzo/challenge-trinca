import '@testing-library/jest-dom/extend-expect'
import { screen } from '@testing-library/react'

import { renderWithTheme } from 'shared/utils/render-with-theme'

import { Checkbox } from '..'

describe('<Checkbox />', () => {
  it('Should render correct label', () => {
    const textContent = 'test'

    renderWithTheme(<Checkbox label={textContent} />)

    const label = screen.getByRole('label')

    expect(label).toHaveTextContent(textContent)
  })

  it('Should render iconInfo', () => {
    const iconContent = <span>test</span>

    renderWithTheme(
      <Checkbox
        label="test"
        infoIcon={{ icon: iconContent, message: 'test icon' }}
      />
    )

    const icon = screen.getByRole('icon')

    expect(icon).toBeInTheDocument()
  })
})
