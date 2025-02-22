import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import Row from './components/layout/Row'
import Header from './components/Header'
import Footer from './components/Footer2'
// import Footer from './components/Footer'

import { baseUrl } from './sitemap'
import './styles/global.css'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Abby Milberg Portfolio',
    template: '%s | Abby Milberg',
  },
  description: 'This is my portfolio.',
  openGraph: {
    title: 'My Portfolio',
    description: 'This is my portfolio.',
    url: baseUrl,
    siteName: 'My Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
    >
      <head></head> 
      <body>
          <Header />
          <main>
            <Row color="blue">
              {children}
            </Row>
          </main>
          <Footer />
          <Analytics />
          <SpeedInsights />
      </body>
    </html>
  )
}
