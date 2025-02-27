import Image from 'next/image'

import Row from 'app/components/Row'

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
    logo: USAID,
    name: 'USAID',
  },
  {
    logo: NRDC,
    name: 'NRDC',
    tall: true,
  },
  {
    logo: SP,
    name: 'SunPower',
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
    logo: Pol,
    name: 'Politico',
  },
  {
    logo: Qui,
    name: 'Quicken',
  },
  {
    logo: PSH,
    name: 'Platform.sh',
  },
  {
    logo: Ben,
    name: 'Benefit Cosmetics',
  },
  {
    logo: Pru,
    name: 'Prudential',
  },
  {
    logo: Ebay,
    name: 'Ebay',
  },
  {
    logo: SH,
    name: 'StubHub',
  },
]

const ClientLogos: React.FC = () => {
  return (
    <Row color="blue">
      <h2 className={`${rowStyles['col-md-12']} ${rowStyles['h2--gap-offset']}`}>
        A Few Cool Clients
      </h2>
      {clientLogos.map((clientLogo:ClientLogo, i) => {
        return (
          <div 
            className={`
              ${rowStyles['col-6']}
              ${rowStyles['col-sm-4']}
              ${rowStyles['col-md-3']}
              ${rowStyles['col-lg-2']}
              ${logoStyles['logo']} 
            `} 
            key={`client-logo--${i}`}
          >
            <Image src={clientLogo.logo} alt={clientLogo.name} />
          </div>
        )
      })}
    </Row>
  )
}

export default ClientLogos;
