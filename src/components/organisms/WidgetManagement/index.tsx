import { Stack } from '@mui/material/'

import EndormarketingWidget from 'src/components/molecules/EndormarketingWidget'
import VisualManagementBoards from 'src/components/organisms/VisualManagementBoards'

const Widget = () => {
  return (
    <Stack direction="column">
      <EndormarketingWidget />
      <VisualManagementBoards />
    </Stack>
  )
}

export default Widget

/* 



 <Box style={{ backgroundColor: '#FFF2DE', width: '279px' }}>
        <h5>Quadros de Gestão à Vista</h5>
        <Stack direction="row">
          {Images.map(img => {
            return (
              <>
                <img src={img} alt="" />
              </>
            )
          })}
        </Stack>
      </Box>

      <Stack direction="row">
        {Images.map(img => {
          return (
            <>
              <img src={img} alt="" />
            </>
          )
        })}
      </Stack>

      <Stack direction="row">
        {Images.map(img => {
          return (
            <>
              <img src={img} alt="" />
            </>
          )
        })}
      </Stack>


*/
