import React, { useEffect, useState } from 'react'

export const EventsContext = React.createContext({})

import DATA from 'src/constants/data.json'

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([])
  const { data } = DATA

  const filterEvents = type => {
    if (type === 'default') {
      setEvents([...data])
    } else {
      var eventsFilterTypes = data.filter(event => event.type === type)
      setEvents([...eventsFilterTypes])
    }
  }

  const removeEvent = id => {
    var eventsFilterTypes = events.filter(event => event.id !== id)
    setEvents([...eventsFilterTypes])
  }

  useEffect(() => {
    setEvents(data)
  }, [])

  return (
    <EventsContext.Provider
      value={{ events, setEvents, filterEvents, removeEvent }}
    >
      {children}
    </EventsContext.Provider>
  )
}

export const useEvent = () => React.useContext(EventsContext)
