import Row from 'app/components/layout/Row'

import rowStyles from 'app/styles/row.module.css'

export const metadata = {
  title: 'About',
  // description: 'Read my blog.',
}

export default function Page() {
  return (
    <Row color="black">
      <div className={rowStyles['col-md-8']}>
        <h1>PEBKAC<br/>
          <span>(Person exists beyond keyboard and code)</span>
        </h1>
        <p>After bouncing around between California and New York, I've been living in the greater Washington, DC area since 2011 (and working remotely with talented folks from around the globe since 2016).</p>
        <p>Outside of work, I can usually be found behind a camera, playing a board game, or being walked by my Australian Shepherds, Luna and Cosmo.</p>
      </div>
    </Row>   
  )
}
