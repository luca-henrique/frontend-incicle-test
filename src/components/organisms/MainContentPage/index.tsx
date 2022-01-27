import { Stack } from '@mui/material/'

import Header from '../../molecules/HeaderBody'
// import ListCards from '../ListEvents'
// import Widget from '../WidgetManagement'

export default function MainContantPage() {
  return (
    <Stack style={{ width: '100%', height: '100%' }}>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        style={{ width: '100%', padding: '0 8px' }}
      >
        <Stack style={{ width: '100%' }}>
          <Header />
          {/* <ListCards /> */}
        </Stack>
        {/* <Widget /> */}
      </Stack>
    </Stack>
  )
}
