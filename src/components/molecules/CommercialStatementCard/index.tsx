import CommercialStatementCardHeader from '../CommercialStatementCardHeader'
import CommercialStatementCardImages from '../CommercialStatementCardImages'

import { Container } from './style'

const CommercialStatementCard = ({ item }: any) => {
  const resumeFiles: any = item.resume_files

  return (
    <Container>
      <CommercialStatementCardHeader item={item} />
      <CommercialStatementCardImages images={resumeFiles} />
    </Container>
  )
}

export default CommercialStatementCard
