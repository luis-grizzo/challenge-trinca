import { render, RenderResult } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import { theme } from 'styles/theme'

export const renderWithTheme = (ui: React.ReactElement): RenderResult =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)
