import { useState } from 'react'

import { Stack } from '@mui/material/'
import AddIcon from '@mui/icons-material/Add'

import Select from 'src/components/atoms/Select'
import Button from 'src/components/atoms/Button'

import { isMobile } from 'react-device-detect'
import { Title } from './style'

/*
  Ao clicar no botão Filtro, deve aparecer uma lista com os tipos de publicações: 
  evento, publicação e comunicado. 
  Em cada item, um checkbox onde o usuário pode selecionar quais deseja filtrar. 
  A renderização dos itens deve ocorrer conforme selecionado pelo usuário.
*/

const Header = () => {
  const [filter, setFilter] = useState('')

  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      justifyContent="space-between"
      spacing={2}
      style={{ marginTop: '20px' }}
    >
      <Title variant="h4">Endomarketing</Title>
      <Stack direction="row" spacing={2}>
        <Select
          value={filter}
          setValue={setFilter}
          fullWidth={isMobile}
          options={[
            { value: 'event', label: 'Evento' },
            { value: 'release', label: 'Lançamento' },
            { value: 'publication', label: 'Publicação' },
          ]}
        />
        <Button EndIcon={!isMobile && AddIcon}>Criar</Button>
      </Stack>
    </Stack>
  )
}

export default Header
