import Link from 'next/link'

import ClientLogos from 'app/components/ClientLogos'
import Row from 'app/components/layout/Row'

import { formatDate, getBlogPosts } from 'app/blog/utils'

import rowStyles from 'app/styles/row.module.css'
import hpStyles from 'app/styles/homepage.module.css'

export default function Page() {
  let recentBlogPosts = getBlogPosts()
    .sort((a, b) => {
      if (
        new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
      ) {
        return -1
      }
      return 1
    })
    .slice(0,3);

  return (
    <>
      <Row color="black" collapsePadTop>
        <div className={rowStyles['col-md-8']}>
          <h1>
          Frontend Developer
          </h1>
          <p>
            {`Design engineer. Professional crafter of the series of tubes. 
            Whatever you call it, I have over a decade of experience designing 
            and building beautiful, accessible online experiences for the public
            and private sectors.`}
          </p>
        </div>
      </Row>

      <Row color="blue" className={hpStyles['exp']}>
      <h2 className={`${rowStyles['col-md-12']} ${rowStyles['h2--gap-offset']}`}>Areas of Expertise</h2>

        <div className={`${rowStyles['col-md-4']}`}>
          <h3>Component Libraries</h3>
          <p>Working with designers to understand the structure underlying a design system and architecting it to be flexible, robust, and accessible can make the difference between a site that grows and evolves for years, or just another retheme.</p>
        </div>

        <div className={`${rowStyles['col-md-4']}`}>
          <h3>JavaScript</h3>
          <p>Whether working on a full-blown React app, using vanilla JS, or leveraging libraries like GSAP to add delight, I believe that JavaScript should enhance the user experience for everyone.</p>
        </div>

        <div className={`${rowStyles['col-md-4']}`}>
          <h3>Drupal</h3>
          <p>I specialize in theming, site-building, and custom module development for complex Drupal sites. Occasionally I get up and talk about it at places like DrupalCon North America, Drupal GovCon, and the DC Drupal Meetup.</p>
        </div>
      </Row>

      <Row color="black" className={hpStyles['blog']}>
        <h2 className={`${rowStyles['col-md-12']} ${rowStyles['h2--gap-offset']}`}>Latest Blog Posts</h2>
        {recentBlogPosts.map((post, i) => (
          <article className={`${rowStyles['col-md-4']} ${hpStyles['blog_col']}`} key={`hp-blog--${i}`}>
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
            >
              <h3>{post.metadata.title}</h3>
              <p>{formatDate(post.metadata.publishedAt, false)}</p>
            </Link>
          </article>
        ))}
      </Row>

      <ClientLogos />
    </>
  )
}
