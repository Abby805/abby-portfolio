import Link from 'next/link'

import rowStyles from '../styles/row.module.css'
import footerStyles from '../styles/footer.module.css'

type FooterLink = {
  href: string
  name: string
}

const footerItems = [
  {
    href: 'https://www.linkedin.com/in/abigailmilberg',
    name: 'LinkedIn',
  },
  {
    href: 'https://bsky.app/profile/abbymilberg.com',
    name: 'Bluesky',
  },
  {
    href: 'https://www.drupal.org/u/abbym',
    name: 'Drupal.org',
  },
  {
    href: '/rss',
    name: 'RSS feed',
  },
]

const SiteFooter = () => {
  return (
    <footer className={`${rowStyles['row']} ${rowStyles['row--blue']}`}>
      <div className={rowStyles['stage']}>
        <div className={`${rowStyles['col-3']} ${footerStyles['footer']}`}>
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
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter;
