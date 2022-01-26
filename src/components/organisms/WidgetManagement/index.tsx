import { Stack, Box, Button } from '@mui/material/'
import Img7 from '../../../assets/images/image7.png'
import Img8 from '../../../assets/images/image8.png'
import Img9 from '../../../assets/images/image9.png'
import Img10 from '../../../assets/images/image10.png'

const Images = [Img7, Img8, Img9, Img10]

const Widget = () => {
  return (
    <Stack direction="column" spacing={1}>
      <Box style={{ backgroundColor: '#FFF2DE', width: '279px' }}>
        <h5>Endormarketing</h5>
        <h6>
          Endomarketing está relacionado às ações de treinamento ou qualificação
          dos colaboradores da empresa visando um melhor serviço para o cliente.
          Marketing interno, devido ao nome, é usualmente confundido com
          Endomarketing mesmo sendo conceitos diferentes.
        </h6>

        <Button variant="outlined" color="inherit">
          dispensar
        </Button>
      </Box>

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
    </Stack>
  )
}

export default Widget
