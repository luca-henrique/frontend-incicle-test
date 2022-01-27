import { Button } from '@mui/material/'
import { ContainerWidget, Title, Description } from './style'

const Index = () => {
  return (
    <ContainerWidget spacing={2}>
      <Title>Endormarketing</Title>
      <Description>
        Endomarketing está relacionado às ações de treinamento ou qualificação
        dos colaboradores da empresa visando um melhor serviço para o cliente.
        Marketing interno, devido ao nome, é usualmente confundido com
        Endomarketing mesmo sendo conceitos diferentes.
      </Description>

      <Button variant="outlined" color="inherit">
        dispensar
      </Button>
    </ContainerWidget>
  )
}

export default Index
