import styled from 'styled-components'
import { Stack } from '@mui/material/'

const COLORS = {
  event: '#EE8686',
  release: '#707070',
  publication: '#3489B1',
}

interface TypeEventCardProps {
  background?: string
}

export const StyledStack = styled(Stack)`
  width: 100%;
  margin-left: 8px;
  @media (max-width: 800px) {
    width: 70%;
  }
`

export const Container = styled(Stack)`
  width: 100%;
  @media (max-width: 800px) {
    width: 88%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const Title = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #707070;

  @media (max-width: 800px) {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const TypeEventCard = styled.div<TypeEventCardProps>`
  background-color: ${({ background }) => COLORS[background] || '#fff'};
  padding: 2px;
`

export const LabelTypeEventCard = styled.h5`
  font-style: normal;
  font-weight: bold;
  font-size: 8px;
  color: #333333;
`

export const DescriptionEventLabelType = styled.h5`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 300;
  font-size: 9px;
  line-height: 12px;
  color: #707070;
`

export const ConfirmationEvent = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 300;
  font-size: 9px;
  line-height: 12px;
  color: #3489b1;

  cursor: pointer;
`
export const Description = styled.h5`
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 18px;
  color: #707070;
  @media (max-width: 800px) {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const Date = styled.h5`
  font-style: normal;
  font-weight: 300;
  font-size: 9px;
  line-height: 12px;

  color: #707070;
`
