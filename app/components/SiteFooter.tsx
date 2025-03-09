import React, { ReactNode } from 'react'
import Link from 'next/link'

import rowStyles from 'app/styles/row.module.css'
import footerStyles from 'app/styles/footer.module.css'

import RSS from 'app/images/icons/rss.svg'
import Bluesky from 'app/images/icons/bluesky.svg'
import LinkedIn from 'app/images/icons/linkedin.svg'
import Drupal from 'app/images/icons/drupal.svg'

type FooterLink = {
  href: string
  icon: ReactNode
}

const footerItems = [
  {
    href: 'https://www.linkedin.com/in/abigailmilberg',
    icon: <LinkedIn/>,
  },
  {
    href: 'https://bsky.app/profile/abbymilberg.com',
    icon: <Bluesky/>,
  },
  {
    href: 'https://www.drupal.org/u/abbym',
    icon: <Drupal/>,
  },
  {
    href: '/rss',
    icon: <RSS/>,
  },
]

const SiteFooter = () => {
  return (
    <footer className={`${rowStyles['row']} ${rowStyles['row--black']}`}>
      <div className={rowStyles['stage']}>
        <div className={`${footerStyles['footer']}`}>
          <ul>
            {footerItems.map((item: FooterLink) => {
              return (
                <li key={`footer-${item.href}`}>
                  <Link
                    href={item.href}
                    rel={'noopener noreferrer'}
                  >
                    {item.icon}
                  </Link>
                </li>
              )
            })}
          </ul>
          <p className="sidenote">
            © {new Date().getFullYear()} Abby Milberg
          </p>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter;
