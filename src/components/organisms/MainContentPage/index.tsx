import { Stack } from '@mui/material/'

import Header from '../../molecules/HeaderBody'
import ListCardEvents from '../ListCardEvents'
import Widget from '../WidgetManagement'

export default function MainContantPage() {
  return (
    <Stack style={{ width: '100%', height: '100%' }}>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        style={{ width: '100%', padding: '0 8px' }}
      >
        <Stack style={{ width: '100%' }} spacing={3}>
          <Header />
          <ListCardEvents />
        </Stack>
        <Widget />
      </Stack>
    </Stack>
  )
}
