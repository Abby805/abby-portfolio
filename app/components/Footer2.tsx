import Link from 'next/link'

import Row from './layout/Row';
import footerStyles from '../styles/footer.module.css'

type FooterLink = {
  href: string
  name: string
}

const footerItems = [
  {
    href: '/rss',
    name: 'RSS',
  },
  {
    href: 'https://www.linkedin.com/in/abigailmilberg/',
    name: 'LinkedIn',
  },
  {
    href: 'https://www.drupal.org/u/abbym',
    name: 'Drupal.org',
  },
]

const Footer = () => {
  return (
    <Row>
      <footer className={footerStyles.footer}>
        <ul>
          {footerItems.map((item: FooterLink) => {
            return (
              <li key={`footer-${item.href}`}>
                <Link
                  href={item.href}
                  rel={'noopener noreferrer'}
                >
                  {item.name}
                </Link>
              </li>
            )
          })}
        </ul>
        <p>
          © {new Date().getFullYear()} Abby Milberg
        </p>
      </footer>
    </Row>
  )
}

export default Footer;
