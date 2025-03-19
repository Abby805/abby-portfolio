import Row from 'app/components/Row'
import rowStyles from 'app/styles/row.module.css'

export default function NotFound() {
  return (
    <Row color="black" collapsePadTop>
      <div className={rowStyles['col-md-8']}>
        <h1>404: Page not found</h1>
        <p>Not <em>all</em> who wander are lost... 😛</p>
      </div>
    </Row>
  )
}
