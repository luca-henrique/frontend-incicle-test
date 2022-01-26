import Stack from '@mui/material/Stack'
import BodyPage from 'src/components/organisms/BodyPage'
import HeaderAppBar from '../../components/organisms/HeaderAppBar'

export const Home = () => {
  return (
    <Stack style={{ backgroundColor: '#F2F3F5', height: '100vh' }}>
      <HeaderAppBar />
      <BodyPage />
    </Stack>
  )
}
