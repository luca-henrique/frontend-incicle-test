import { Stack } from '@mui/material/'
import { useEffect, useState } from 'react'

import DATA from 'src/constants/data.json'
import CircularProgress from '@mui/material/CircularProgress'
import EventCard from '../../molecules/EventCard'

const ListEvents = () => {
  const { data } = DATA

  const [loading, setLoading] = useState(true)

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
      {data.map(item => {
        return <EventCard item={item} />
      })}
    </Stack>
  )
}

export default ListEvents
