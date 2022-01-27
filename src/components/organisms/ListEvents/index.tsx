import { Stack } from '@mui/material/'

import DATA from 'src/constants/data.json'
import Card from '../Card'

const ListEvents = () => {
  const { data } = DATA

  return (
    <Stack direction="column" style={{ width: '100%' }}>
      {data.map(item => {
        return <Card item={item} />
      })}
    </Stack>
  )
}

export default ListEvents
