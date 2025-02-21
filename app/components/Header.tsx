import Link from 'next/link'

import Row from './layout/Row';
import headerStyles from '../styles/header.module.css'

type NavLink = {
  href: string
  name: string
}

const navItems = [
  {
    href: '/blog',
    name: 'Blog',
  },
]

const Header = () => {
  return (
    <Row>
      <header className={headerStyles.header}>
        <Link href='/'>
          LOGO HERE
        </Link>
        <nav>
          <ul>
            {navItems.map((item: NavLink) => {
              return (
                <li key={`header${item.href}`}>
                  <Link
                    href={item.href}
                  >
                    {item.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </header>
    </Row>
  )
}

export default Header;
