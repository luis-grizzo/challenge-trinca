import '@testing-library/jest-dom/extend-expect'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithTheme } from 'shared/utils/render-with-theme'

import { Input } from '..'

describe('<Input />', () => {
  it('Should focus input when click in label', () => {
    renderWithTheme(<Input label="test" />)

    const label = screen.getByRole('label')
    const input = screen.getByRole('input')

    userEvent.click(label)

    expect(input).toHaveFocus()
  })
})
