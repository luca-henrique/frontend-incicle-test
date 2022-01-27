import { Stack } from '@mui/material'
import styled from 'styled-components'

export const ContainerStack = styled(Stack)`
  background-color: #fff;

  width: 278px;

  padding: 12px 8px;

  margin-bottom: 12px;

  box-shadow: 0px 5px 17px rgba(243, 243, 243, 0.4283),
    0px 1.8696px 5px rgba(24, 24, 43, 0.0526),
    0px 2.0543px 17.7391px rgba(0, 0, 0, 0.0526);

  @media (max-width: 800px) {
    width: 100%;
  }
`

export const Title = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;

  color: #707070;
`
