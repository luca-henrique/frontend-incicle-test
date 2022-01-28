import { Stack } from '@mui/material/'
import { useEffect, useState } from 'react'

import CircularProgress from '@mui/material/CircularProgress'
import { useEvent } from 'src/providers/events.js'
import EventCard from '../../molecules/EventCard'

const ListEvents = () => {
  const [loading, setLoading] = useState(true)

  const { events } = useEvent()

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  if (loading) {
    return (
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ width: '100%', height: '60vh' }}
      >
        <CircularProgress />
      </Stack>
    )
  }

  return (
    <Stack direction="column" style={{ width: '100%' }} spacing={1.5}>
      {events.map(item => {
        return <EventCard item={item} />
      })}
    </Stack>
  )
}

export default ListEvents
