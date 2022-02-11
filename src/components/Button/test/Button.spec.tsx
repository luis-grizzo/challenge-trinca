import '@testing-library/jest-dom/extend-expect'

import { screen } from '@testing-library/react'

import { renderWithTheme } from 'shared/utils/render-with-theme'
import { theme } from 'styles/theme'

import { Button } from '..'

describe('<Button />', () => {
  it('Should render Button with correct text content', () => {
    const textContent = 'test'

    renderWithTheme(<Button variant="default">{textContent}</Button>)

    const button = screen.getByRole('button')

    expect(button).toHaveTextContent(textContent)
  })

  it('Should render Button with correct styles when has fullWidth prop', () => {
    renderWithTheme(
      <Button variant="outlined" fullWidth>
        test
      </Button>
    )

    const button = screen.getByRole('button')

    expect(button).toHaveStyle({
      width: '100%'
    })
  })

  it('Should render Button with correct styles when has ghost variant', () => {
    renderWithTheme(
      <Button variant="ghost" fullWidth>
        test
      </Button>
    )

    const button = screen.getByRole('button')

    expect(button).toHaveStyle({
      backgroundColor: 'transparent',
      color: theme.colors.black
    })
  })
})
