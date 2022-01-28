import { useEffect, useState } from 'react'

import EventModalInvitedPeople from 'src/components/molecules/EventModalInvitedPeople'
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

/*
  No item do tipo EVENTO, ao clicar no link destacado em azul "2 pessoas confirmadas de 3",
  deve aparecer um modal listando os convidados e a resposta conforme os dados apresentados no json.
  É necessário informar o nome do convidado, a foto, o nome de usuário e informar se 
  o usuário confirmou presença ou não;
*/

const ContentCard = ({ item }: any) => {
  const { title, description, type, info } = item
  const isExistInvitedPeople = Boolean(item.invited_people)

  const [countConfirmationPeople, setCountConfirmationPeople] = useState(0)

  const [visibleModalInvitedPeople, setVisibleOpenModalInvitedPeople] =
    useState(false)

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
    <>
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
            <ConfirmationEvent
              onClick={() => setVisibleOpenModalInvitedPeople(true)}
            >
              {countConfirmationPeople} CONFIRMAÇÕES DE
              {item.invited_people.length}
            </ConfirmationEvent>
          )}
        </Container>
        <Description>{description}</Description>
      </StyledStack>
      <EventModalInvitedPeople
        open={visibleModalInvitedPeople}
        setOpen={setVisibleOpenModalInvitedPeople}
        peopleInvited={isExistInvitedPeople ? item.invited_people : []}
      />
    </>
  )
}

export default ContentCard
