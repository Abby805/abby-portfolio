import Image from 'next/image'

import Row from 'app/components/layout/Row'

import rowStyles from 'app/styles/row.module.css'
import logoStyles from 'app/styles/clientLogos.module.css'

import Ben from 'app/images/client-logos/benefit.svg?url'
import Ebay from 'app/images/client-logos/ebay.svg?url'
import ESB from 'app/images/client-logos/esb.svg?url'
import KAB from 'app/images/client-logos/kab.svg?url'
import NRDC from 'app/images/client-logos/nrdc.svg?url'
import Pol from 'app/images/client-logos/politico.svg?url'
import Pru from 'app/images/client-logos/prudential.svg?url'
import PSH from 'app/images/client-logos/psh.svg?url'
import Qui from 'app/images/client-logos/quicken.svg?url'
import SH from 'app/images/client-logos/stubhub.svg?url'
import SP from 'app/images/client-logos/sunpower.svg?url'
import USAID from 'app/images/client-logos/usaid.svg?url'

type ClientLogo = {
  name: string
  logo: string
  tall?: boolean
}

const clientLogos = [
  {
    logo: Ben,
    name: 'Benefit Cosmetics',
  },
  {
    logo: Ebay,
    name: 'Ebay',
  },
  {
    logo: ESB,
    name: 'Empire State Building',
  },
  {
    logo: KAB,
    name: 'King Arthur Baking Company',
    tall: true,
  },
  {
    logo: NRDC,
    name: 'NRDC',
    tall: true,
  },
  {
    logo: Pol,
    name: 'Politico',
  },
  {
    logo: Pru,
    name: 'Prudential',
  },
  {
    logo: PSH,
    name: 'Platform.sh',
  },
  {
    logo: Qui,
    name: 'Quicken',
  },
  {
    logo: SH,
    name: 'StubHub',
  },
  {
    logo: SP,
    name: 'SunPower',
  },
  {
    logo: USAID,
    name: 'USAID',
  },
]

const ClientLogos: React.FC = () => {
  return (
    <Row color="blue">
      <h2 className={rowStyles['col-12']}>A Few Happy Clients</h2>
      {/* <div className={`${rowStyles['col-12']} ${logoStyles['logos']}`}> */}
        {clientLogos.map((clientLogo:ClientLogo, i) => {
          return (
            <div 
              className={`
                // ${rowStyles['col-12']}
                ${logoStyles['logo']} 
                ${clientLogo.tall ? logoStyles['logo--tall'] : ''}
              `} 
              key={`client-logo--${i}`}
            >
              <Image src={clientLogo.logo} alt={clientLogo.name} />
            </div>
          )
        })}
      {/* </div> */}
    </Row>
  )
}

export default ClientLogos;
