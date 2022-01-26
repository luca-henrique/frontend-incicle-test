import { Stack } from '@mui/material/'
import ListEvents from '../ListEvents'
import Widget from '../WidgetManagement'

const Cards = () => {
  return (
    <Stack direction="row" style={{ marginTop: '20px' }}>
      <ListEvents />

      <Widget />
    </Stack>
  )
}

export default Cards
