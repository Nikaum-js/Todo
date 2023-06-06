import { ThemeProvider } from 'styled-components'
import theme from './global/styles/theme'

import { GlobalStyle } from './global/styles/global'
import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </ThemeProvider>
  )
}
