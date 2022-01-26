import { Stack, Box, IconButton } from '@mui/material/'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

const Card = ({ item }) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        marginBottom: '10px',
        height: '93px',
        backgroundColor: '#fff',
        boxShadow:
          '0px 5px 17px rgba(243, 243, 243, 0.4283),0px 1.8696px 5px rgba(24, 24, 43, 0.0526),0px 2.0543px 17.7391px rgba(0, 0, 0, 0.0526)',
        padding: '9px 11px',
      }}
    >
      <Stack direction="row">
        <img src={item.image} alt="" />

        <Box>
          <h4>{item.title}</h4>
          <Box style={{ display: 'flex', flexDirection: 'row' }}>
            <h4>{item.type}</h4>
            <h4>{item.descriptionType}</h4>
            <h4>{item.date}</h4>
            <h4>
              {item.confirmationAccepted} confirmações de
              {item.confirmationTotal}
            </h4>
          </Box>
          <h4>{item.description}</h4>
        </Box>
      </Stack>
      <IconButton>
        <MoreHorizIcon />
      </IconButton>
    </Stack>
  )
}

export default Card
