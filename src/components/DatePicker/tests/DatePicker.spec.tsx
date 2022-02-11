import '@testing-library/jest-dom/extend-expect'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import sinon, { SinonFakeTimers } from 'sinon'
import { startOfDay, setDate, setYear, setMonth } from 'date-fns'

import { useState } from 'react'

import { renderWithTheme } from 'shared/utils/render-with-theme'

import { DatePicker } from '..'

const Template = (): React.ReactElement => {
  const [date, setDate] = useState(new Date())

  return (
    <DatePicker
      value={date}
      label="test"
      onChange={(newDate) => setDate(newDate)}
    />
  )
}

describe('<DatePicker />', () => {
  let clock: SinonFakeTimers
  beforeAll(() => {
    const fakeDate = startOfDay(
      setDate(setYear(setMonth(new Date(), 0), 2022), 1)
    )
    clock = sinon.useFakeTimers(fakeDate)
  })

  afterAll(() => {
    clock.restore()
  })

  it('Should update state when onChnage', () => {
    renderWithTheme(<Template />)

    const input = screen.getByTitle(/selecione uma data/i)

    userEvent.click(input)

    userEvent.click(screen.getByText('19'))

    expect(input).toHaveValue('19/01/2022')
  })
})
