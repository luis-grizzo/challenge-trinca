import '@testing-library/jest-dom/extend-expect'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithTheme } from 'shared/utils/render-with-theme'

import { Textarea } from '..'

describe('<Textarea />', () => {
  it('Should focus textarea when click in label', () => {
    renderWithTheme(<Textarea label="test" />)

    const label = screen.getByRole('label')
    const textarea = screen.getByRole('textarea')

    userEvent.click(label)

    expect(textarea).toHaveFocus()
  })
})
