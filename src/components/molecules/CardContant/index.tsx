import { useEffect, useState } from 'react'

import {
  Title,
  TypeEventCard,
  LabelTypeEventCard,
  DescriptionEventLabelType,
  ConfirmationEvent,
  Description,
  Date,
  Container,
  StyledStack,
} from './style'

const ContentCard = ({ item }) => {
  const { title, description, type, info } = item
  const isExistInvitedPeople = Boolean(item.invited_people)

  const [countConfirmationPeople, setCountConfirmationPeople] = useState(0)

  useEffect(() => {
    let value = 0
    if (isExistInvitedPeople) {
      item.invited_people.map(invited => {
        if (invited.confirmed_presence) {
          value += 1
          setCountConfirmationPeople(value)
        }
      })
    }
  }, [])

  return (
    <StyledStack direction="column" spacing={0.5}>
      <Title>{title}</Title>

      <Container direction="row" alignItems="center" spacing={0.5}>
        <TypeEventCard background={type}>
          <LabelTypeEventCard>{item.type}</LabelTypeEventCard>
        </TypeEventCard>
        <DescriptionEventLabelType>
          {type === 'event' && 'COSTELÃO CHURRASCARIA'}
        </DescriptionEventLabelType>
        <Date>{info.date}</Date>
        {isExistInvitedPeople && (
          <ConfirmationEvent>
            {countConfirmationPeople} CONFIRMAÇÕES DE
            {item.invited_people.length}
          </ConfirmationEvent>
        )}
      </Container>
      <Description>{description}</Description>
    </StyledStack>
  )
}

export default ContentCard

/*


<Stack direction="row" alignItems="center" spacing={0.5}>
        <TypeEventCard background={type}>
          <LabelTypeEventCard>{item.type}</LabelTypeEventCard>
        </TypeEventCard>
        <DescriptionEventLabelType>
          {type === 'event' && 'COSTELÃO CHURRASCARIA'}
        </DescriptionEventLabelType>
        <Date>{info.date}</Date>
        {isExistInvitedPeople && (
          <ConfirmationEvent>
            {countConfirmationPeople} CONFIRMAÇÕES DE
            {item.invited_people.length}
          </ConfirmationEvent>
        )}
      </Stack>
      <Description>{description}</Description>
      
      
      */
