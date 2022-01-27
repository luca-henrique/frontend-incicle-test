import { Stack } from '@mui/material/'

import Header from '../../molecules/HeaderBody'
import ListCardEvents from '../ListCardEvents'
import Widget from '../WidgetManagement'

import { NavContainer } from './style'

export default function MainContantPage() {
  return (
    <Stack
      style={{ width: '100%', height: '100%', marginTop: '34px' }}
      alignItems="center"
    >
      <NavContainer direction={{ xs: 'column', sm: 'row' }} spacing={3}>
        <Stack style={{ width: '100%' }} spacing={3}>
          <Header />
          <ListCardEvents />
        </Stack>
        <Widget />
      </NavContainer>
    </Stack>
  )
}
