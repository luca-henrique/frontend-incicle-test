import React, { useEffect, useState } from 'react'

export const EventsContext = React.createContext({})

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([])

  const filterEvents = type => {
    const userStorage = JSON.parse(localStorage.getItem('events'))

    if (type === 'default') {
      setEvents([...userStorage])
    } else {
      var eventsFilterTypes = userStorage.filter(event => event.type === type)
      setEvents([...eventsFilterTypes])
    }
  }

  const removeEvent = id => {
    var eventsFilterTypes = events.filter(event => event.id !== id)
    setEvents([...eventsFilterTypes])
  }

  useEffect(() => {
    const userStorage = localStorage.getItem('events')
    if (userStorage) {
      setEvents(JSON.parse(userStorage))
    } else {
      setEvents([])
    }
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
