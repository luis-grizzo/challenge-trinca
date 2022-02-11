import '@testing-library/jest-dom/extend-expect'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { useState } from 'react'

import { renderWithTheme } from 'shared/utils/render-with-theme'

import { Modal } from '..'

const Template = (): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Modal title="test" isOpen={isOpen} onClose={() => setIsOpen(false)}>
        content
      </Modal>
      <button onClick={() => setIsOpen(true)}>open</button>
    </>
  )
}

describe('<Modal />', () => {
  it('Should open Modal when state is true', () => {
    renderWithTheme(<Template />)

    const button = screen.getByRole('button', { name: /open/i })

    userEvent.click(button)

    expect(screen.getByText(/content/i)).toBeInTheDocument()
  })

  it('Should close Modal when click on close button', async () => {
    renderWithTheme(<Template />)

    const openButton = screen.getByRole('button', { name: /open/i })

    userEvent.click(openButton)

    const modal = screen.getByRole(/modal/i)

    await waitFor(() => expect(modal).toBeInTheDocument())

    const closeButton = screen.getByTitle(/fechar/i)

    userEvent.click(closeButton)

    await waitFor(() => expect(modal).not.toBeInTheDocument())
  })

  it('Should close Modal when click on overlay', async () => {
    renderWithTheme(<Template />)

    const openButton = screen.getByRole('button', { name: /open/i })

    userEvent.click(openButton)

    const modal = screen.getByRole(/modal/i)

    await waitFor(() => expect(modal).toBeInTheDocument())

    const closeButton = screen.getByRole(/overlay/i)

    userEvent.click(closeButton)

    await waitFor(() => expect(modal).not.toBeInTheDocument())
  })
})
