import styled from 'styled-components'
import { Typography } from '@mui/material/'
import { COLORS } from 'src/constants/colors'

export const Title = styled(Typography)`
  font-weight: 300;
  font-size: 36px;
  color: ${COLORS.primaryGray};

  @media (max-width: 800px) {
    font-size: 28px !important;
  }
`
