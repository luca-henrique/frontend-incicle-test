import { Stack } from '@mui/material/'

import List from 'src/constants/List'
import Card from '../../atoms/Card'

const ListEvents = () => {
  return (
    <Stack direction="column" style={{ width: '100%' }}>
      {List.map(item => {
        return <Card item={item} />
      })}
    </Stack>
  )
}

export default ListEvents
