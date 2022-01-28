import { BrowserRouter as Router } from 'react-router-dom'
import { Routes } from './routes/Routes'
import GlobalStyle from './styles/global'

import { EventProvider } from './providers/events.js'

export const App = () => {
  return (
    <EventProvider>
      <Router>
        <GlobalStyle />
        <Routes />
      </Router>
    </EventProvider>
  )
}
