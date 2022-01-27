import Stack from '@mui/material/Stack'
import MainContentPage from 'src/components/organisms/MainContentPage'
import HeaderAppBar from 'src/components/molecules/NavAppBar'

export const Home = () => {
  return (
    <Stack
      direction="column"
      style={{ backgroundColor: '#F2F3F5', height: '100vh' }}
    >
      <HeaderAppBar />
      <MainContentPage />
    </Stack>
  )
}
