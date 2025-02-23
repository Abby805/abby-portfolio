import Link from 'next/link'

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
        <div className={rowStyles['col-2']}>
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

      <Row color="blue" noRowGap className={hpStyles['exp']}>
        <h2 className={rowStyles['col-3']}>Areas of Expertise</h2>

        <div className={`${rowStyles['col-1']} ${hpStyles['exp_col']}`}>
          <h3>Component Libraries</h3>
          <p>Working with designers to understand the structure underlying a design system and architecting it to be flexible, robust, and accessible can make the difference between a site that grows and evolves for years, or just another retheme.</p>
        </div>

        <div className={`${rowStyles['col-1']} ${hpStyles['exp_col']}`}>
          <h3>JavaScript</h3>
          <p>Whether working on a full-blown React app, using vanilla JS, or leveraging libraries like GSAP to add delight, I believe that JavaScript should enhance the user experience for everyone.</p>
        </div>

        <div className={`${rowStyles['col-1']} ${hpStyles['exp_col']}`}>
          <h3>Drupal</h3>
          <p>I specialize in theming, site-building, and custom module development for complex Drupal sites. Occasionally I get up and talk about it at places like DrupalCon North America, Drupal GovCon, and the DC Drupal Meetup.</p>
        </div>
      </Row>

      <Row color="black" noRowGap className={hpStyles['blog']}>
        <h2 className={rowStyles['col-3']}>Latest Blog Posts</h2>
        {recentBlogPosts.map((post, i) => (
          <article className={`${rowStyles['col-1']} ${hpStyles['blog_col']}`} key={`hp-blog--${i}`}>
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

      <Row color="blue">
        <h2 className={rowStyles['col-3']}>A Few Happy Clients</h2>

        <div className={`${rowStyles['col-3']} ${hpStyles['logos']}`}>
          <div className={hpStyles['logo']}>
            <svg viewBox="0 0 150 67.9" width="150" height="68" xmlns="http://www.w3.org/2000/svg"><title>Stubhub</title><path d="M136.7,67.6c-9.8-0.6-19.6-1.2-29.3-1.9c-9.6-0.6-19.2-1.2-28.8-1.9c-10.5-0.7-21-1.3-31.5-2 c-9.6-0.6-19.2-1.2-28.8-1.9c-1.6-0.1-3.1,0.1-4.6,0.7c-3.4,1.5-6.9,2.9-10.3,4.3C3,65.1,2.6,65,2.2,65c0-0.3-0.1-0.7,0-1 c0.5-1.8,1.1-3.7,1.7-5.5c0.6-1.8,0.7-3.5,0.5-5.3c-0.9-8-1.7-16-2.5-23.9C1.2,23.4,0.6,17.5,0,11.7c-0.1-1.1,0.4-1.7,1.5-1.8 c5.8-0.4,11.6-0.8,17.4-1.2c7.3-0.5,14.6-1,21.9-1.5c8-0.5,16-1.1,23.9-1.6C74.1,5,83.3,4.4,92.6,3.8c9.4-0.6,18.7-1.2,28.1-1.9 c9.1-0.6,18.3-1.2,27.4-1.8c0.1,0,0.3,0,0.4,0c1.1-0.1,1.6,0.5,1.5,1.5c-0.2,2-0.3,4.1-0.5,6.1c-0.6,6.5-1.2,12.9-1.8,19.3 c-0.7,7.2-1.3,14.5-2,21.8c-0.5,5.7-1,11.4-1.6,17.1c0,0.2,0,0.4-0.1,0.5c-0.1,1.2-0.7,1.6-1.8,1.6 C140.4,67.8,138.6,67.7,136.7,67.6L136.7,67.6z M36.5,28.8c0.1-2.2-1-4.2-3.2-5c-3-1.2-6.2-1.2-9.2-0.1c-2.5,0.8-3.5,2.7-3.4,5.8 c0,2,1.3,3.6,3.5,4.4c1.4,0.5,2.8,0.9,4.1,1.4c1.3,0.5,2.6,0.9,3.9,1.4c1.2,0.4,1.6,1.1,1.6,2.3c0,1.3-0.6,2.1-2,2.6 c-1.9,0.7-3.9,0.7-5.8,0.2c-1.5-0.4-2.8-1.1-2.7-3c-1.1,0-2.1,0-3.2,0c-0.1,2.6,1.2,4.6,3.6,5.5c3.3,1.3,6.6,1.3,9.9,0 c4.5-1.9,4.3-7.6,1.8-9.5c-0.8-0.6-1.8-1.1-2.8-1.5c-2.3-0.8-4.7-1.6-7-2.4c-1.4-0.5-1.8-1.2-1.5-2.5c0.2-1,0.8-1.5,1.7-1.8 c1.6-0.5,3.2-0.5,4.8-0.3c1.5,0.2,2.8,0.7,3,2.5C34.5,28.8,35.5,28.8,36.5,28.8z M96.5,23.6c-1.1,0-2.2,0-3.2,0c0,3,0,6,0,8.9 c-3.3,0-6.6,0-9.9,0c0-0.3,0-0.6,0-0.9c0-2.5,0-5,0-7.5c0-0.5-0.2-0.7-0.7-0.7c-0.6,0-1.2,0.1-1.8,0c-0.6-0.1-0.8,0.2-0.8,0.8 c0,6.7,0,13.4,0,20.1c0,0.2,0,0.5,0,0.7c1.1,0,2.1,0,3.2,0c0-3.2,0-6.3,0-9.4c3.3,0,6.6,0,9.9,0c0,0.3,0,0.5,0,0.8c0,2.7,0,5.3,0,8 c0,0.3-0.2,0.7,0.4,0.7c0.9,0,1.9,0,2.9,0C96.5,37.9,96.5,30.8,96.5,23.6z M114.1,23.6c0,0.2-0.1,0.2-0.1,0.3c0,4.8,0,9.5,0,14.3 c0,1.9,0.5,3.6,1.8,5c1.6,1.7,3.6,2.2,5.8,2.1c3.3-0.1,5.9-2.1,6.4-5.4c0.3-1.8,0.2-3.7,0.1-5.5c-0.3-2.5-1.6-4.3-4.1-5 c-2.4-0.7-4.7-0.8-6.9,1.1c0-2.4,0-4.7,0-7C116,23.6,115.1,23.6,114.1,23.6z M63.5,23.6c0,0.2,0,0.3,0,0.4c0,4.8-0.1,9.7,0,14.6 c0,1.2,0.4,2.4,0.9,3.4c1.4,2.6,3.8,3.5,6.6,3.4c3.4-0.1,6.1-2.3,6.5-5.6c0.2-1.9,0.2-3.9-0.1-5.8c-0.4-2.6-2.1-4.2-4.7-4.7 c-2.2-0.4-4.2-0.4-6.1,1.3c0-2.4,0-4.7,0-7C65.5,23.6,64.6,23.6,63.5,23.6z M99.1,29.5c0,0.2-0.1,0.3-0.1,0.5c0,2.8,0,5.7,0,8.5 c0,1,0.2,2.1,0.4,3.1c0.5,2.1,1.9,3.3,4,3.6c1.1,0.2,2.3,0.2,3.4,0c2.5-0.3,3.9-1.6,4.4-4c0.2-0.8,0.3-1.7,0.3-2.6 c0-2.8,0-5.6,0-8.5c0-0.2,0-0.4,0-0.6c-1,0-2,0-3,0c0,0.3,0,0.5,0,0.8c0,2.6,0,5.3,0,7.9c0,0.7-0.1,1.3-0.2,2c-0.2,1-0.7,1.8-1.8,2 c-0.8,0.1-1.6,0.1-2.3,0c-0.8-0.1-1.4-0.6-1.6-1.5c-0.2-0.8-0.4-1.7-0.4-2.6c-0.1-2.6,0-5.3,0-7.9c0-0.2,0-0.5,0-0.8 C101,29.5,100.1,29.5,99.1,29.5z M48.6,29.5c0,0.2-0.1,0.3-0.1,0.4c0,2.8-0.1,5.5,0,8.2c0.1,1.4,0.3,2.8,0.7,4.1 c0.4,1.4,1.5,2.4,2.9,2.7c1.2,0.2,2.5,0.4,3.7,0.3c2.9-0.2,4.3-1.5,4.9-4.1c0.1-0.4,0.2-0.8,0.2-1.2c0.1-2.8,0.1-5.6,0.1-8.5 c0-0.7,0-1.4,0-2.1c-1,0-2,0-3.1,0c0,0.3,0,0.5,0,0.8c0,2.4,0,4.8,0,7.3c0,0.8-0.1,1.7-0.2,2.5c-0.2,1-0.7,1.9-1.8,2.1 c-0.8,0.1-1.7,0.1-2.5,0c-0.7-0.1-1.3-0.6-1.4-1.3c-0.2-0.9-0.4-1.9-0.4-2.9c-0.1-2.6,0-5.1,0-7.7c0-0.2,0-0.5,0-0.7 C50.5,29.5,49.5,29.5,48.6,29.5z M46,29.4c-1.1,0-2.2,0-3.3,0c0-2,0-3.9,0-5.8c-1.1,0-2.1,0-3.1,0c0,0.2,0,0.2,0,0.3 c0,4.9,0,9.8,0,14.6c0,1.6,0.5,3.1,1.5,4.4c1.2,1.6,2.9,2.3,5,2.4c0-0.9,0-1.6,0-2.4c0-0.4-0.1-0.6-0.5-0.7 c-1.5-0.3-2.5-1.3-2.6-2.8c-0.2-2.2-0.2-4.5-0.2-6.8c1.2,0,2.3,0,3.4,0C46,31.5,46,30.5,46,29.4z"></path><path d="M117.2,37.1c0-0.5,0-1,0-1.5c0.2-2.8,1.9-3.6,4.2-3.5c2.6,0.1,3.7,1.4,3.7,4c0,1.1,0,2.2-0.1,3.2 c-0.3,2.1-1.8,3.1-4.2,3c-1.9-0.1-3.3-1.3-3.5-3.2C117.1,38.4,117.1,37.8,117.2,37.1C117.1,37.1,117.1,37.1,117.2,37.1z"></path><path d="M74.6,37.2c-0.1,0.7-0.1,1.5-0.2,2.2c-0.4,1.9-1.8,3-4.1,2.9c-1.9,0-3.4-1.2-3.6-3.1c-0.2-1.4-0.2-2.9,0-4.3 c0.2-2,1.9-3.1,4.1-2.9c2.4,0.2,3.4,1.2,3.7,3.5C74.6,36.1,74.5,36.6,74.6,37.2C74.5,37.2,74.6,37.2,74.6,37.2z"></path></svg>
          </div>

          <div className={hpStyles['logo']}>
            <svg height="61" viewBox="0 0 150 60.1" width="150" xmlns="http://www.w3.org/2000/svg"><title>ebay</title><path d="M95,31.9c-6.8,0.2-11.1,1.5-11.1,5.9c0,2.9,2.3,6.1,8.2,6.1c7.9,0,12.1-4.3,12.1-11.3l0-0.8C101.4,31.8,98,31.8,95,31.9z M111.7,41.2c0,2.2,0.1,4.3,0.3,6.3h-7c-0.2-1.6-0.3-3.2-0.3-4.7c-3.8,4.6-8.3,6-14.5,6C81,48.7,76,43.8,76,38.2 c0-8.2,6.7-11.1,18.4-11.3c3.2-0.1,6.8-0.1,9.8-0.1l0-0.8c0-5.5-3.5-7.7-9.6-7.7c-4.5,0-7.9,1.9-8.2,5.1h-7.9 c0.8-8.1,9.3-10.1,16.8-10.1c8.9,0,16.5,3.2,16.5,12.6V41.2z"></path><path d="M29.9,27.9c-0.3-7-5.4-9.7-10.8-9.7c-5.8,0-10.5,3-11.3,9.7H29.9z M7.7,32.9c0.4,6.8,5.1,10.9,11.6,10.9 c4.5,0,8.5-1.8,9.8-5.8h7.8C35.3,46,26.7,48.7,19.3,48.7C5.9,48.7,0,41.4,0,31.4c0-11,6.1-18.2,19.5-18.2 c10.6,0,18.4,5.5,18.4,17.7v2H7.7z"></path><path d="M57.1,43.6c7,0,11.8-5,11.8-12.6c0-7.6-4.8-12.6-11.8-12.6c-6.9,0-11.8,5-11.8,12.6C45.4,38.6,50.2,43.6,57.1,43.6z M37.8,0h7.5l0,18.9c3.7-4.4,8.8-5.7,13.8-5.7c8.4,0,17.7,5.7,17.7,17.9c0,10.2-7.4,17.7-17.8,17.7c-5.5,0-10.6-2-13.8-5.8 c0,1.5-0.1,3.1-0.3,4.6h-7.4c0.1-2.4,0.3-5.4,0.3-7.8V0z"></path><path d="M150,14.5l-23.2,45.6h-8.4l6.7-12.7l-17.5-33h8.8l12.9,25.8L142,14.5H150z"></path></svg>
          </div>

          <div className={hpStyles['logo']}>
            <svg height="34" viewBox="0 0 150 33.7" width="150" xmlns="http://www.w3.org/2000/svg"><title>Quicken</title><path d="M12.4,22.6c-4.4,0-3.2-5.1-2.6-8.2c0.6-3,1.4-8.1,5.7-8.1c2.1,0,2.9,1.3,3,3.1 c0.1,1.7-0.2,4-0.6,5.7C17.3,18.1,16.4,22.6,12.4,22.6 M0.3,14.6C-1.1,22.2,2.1,29,10.3,29c1.2,0,2.4-0.1,3.7-0.5 c0.2,3.8,2.2,5.1,6,5.1l3.4-0.2l1.2-6.4c-0.8,0.2-1.5,0.3-2.3,0.3c-1,0-2.5-0.2-2.4-1.4c4.1-2.4,6.5-7.1,7.4-11.3 C28.8,6.4,25.4,0,16.7,0C12.6,0,9.1,1.1,5.8,4.3C2.8,7.2,1.1,10.9,0.3,14.6"></path><path d="M39,28.5l0.7-3.4h-0.1c-1.4,2.7-4.4,3.8-7.1,3.8c-1.7,0-3.3-0.4-4.4-1.6c-1.2-1.5-1-3.3-0.6-5.3 l2.8-14.5h8.1l-2.5,12.7c-0.3,1.4-0.6,2.8,1.3,2.8c0.8,0,1.7-0.5,2.2-1.2c0.5-0.7,0.7-1.4,0.8-2.2l2.3-12h8.1l-4.1,20.9H39"></path><path d="M57.1,28.5h-8.1L53,7.6h8.1L57.1,28.5z M61.5,5.6h-8.1L54.5,0h8.1L61.5,5.6L61.5,5.6z"></path><path d="M81,20.7c-1.8,5.4-6.2,8.3-11.5,8.3c-3,0-5.3-0.7-7.1-2.9c-1.7-2.1-2.1-5-1.6-8 C62,11.8,67.2,7.2,73.6,7.2c5.2,0,8.7,3,8.3,8.3l-7.3,0.6l0-0.2c0-1.4,0-3.1-1.8-3.1c-2.6,0-3.2,3.4-3.6,5.2c-0.4,2-1,5.2,1.7,5.2 c1.8,0,2.7-1.6,3.2-3.1L81,20.7"></path><polyline points="99.3,14.8 103.7,28.5 95.2,28.5 92.9,20.2 90.3,22.8 89.2,28.5 81.1,28.5 86.6,0.4 94.7,0.4 91.7,15.6 93.9,13.3 99.9,7.6 107,7.6 99.3,14.8"></polyline><path d="M113.1,15.6c0.3-1.9,1.5-3.6,3.6-3.6c2.3,0,2.7,1.5,2.3,3.6H113.1z M118.4,21 c-0.7,1.8-1.8,2.5-3.7,2.5c-2.5,0-3-1.6-2.4-3.9h14l0.2-1.1c1.3-6.9-2.1-11.4-9-11.4c-3,0-6.4,1-8.9,3.2c-2.4,2-4.1,5.1-4.6,7.9 c-0.6,3,0.1,5.9,1.9,7.9c2,2.1,4.8,2.8,7.9,2.8c5,0,9.9-2.3,12.2-7.4L118.4,21L118.4,21z"></path><path d="M138.3,7.6l-0.6,2.9h0.1c1.5-2.4,4.1-3.3,6.6-3.3c2,0,4.1,0.6,5,2.2c1,1.7,0.5,4.1,0.1,6.3 L147,28.5h-8.1l2.5-12.7c0.2-1.3,0.6-3-1.2-3c-2.3,0-2.8,1.9-3.2,3.6l-2.3,12.1h-8.1l4.1-20.9H138.3"></path></svg>
          </div>

          <div className={hpStyles['logo']}>
            <svg height="49" viewBox="0 0 150 49" width="150" xmlns="http://www.w3.org/2000/svg"><title>Benefit Cosmetics</title><path d="M22.2,26.4c-0.1-2.1-0.2-3.8-0.3-5.5c-0.1-1.2-0.3-2.5-0.8-3.6c-0.5-1.3-1.4-2.3-2.8-2.7 c-1.7-0.4-3.3-0.4-4.9,0.5c-3.1,1.6-4.6,4.2-4.8,7.6c-0.1,1.6,0,3.1,0,4.6c0,1.1,0,2.2,0.1,3.2c0.2,2,1,3.7,2.5,4.9 c1.9,1.6,4.1,2.1,6.6,1.7c1.8-0.3,2.9-1.3,3.5-3c0.2-0.6,0.4-1.3,0.5-1.9C22,30.2,22,28.1,22.2,26.4z M0,1.5c1.6,0,3.1,0,4.7,0 C5.3,1.5,6,1.4,6.6,1.2c0.8-0.2,1.4-0.5,1.9-1.1c0,6.4,0,12.6,0,18.9h0.1c0.1-0.1,0.1-0.2,0.2-0.3c1-2.2,2.6-4,5-4.9 c2.5-0.9,4.9-0.5,7.1,0.7c2.8,1.5,4.6,3.9,5.7,6.8c1.7,4.9,1,9.3-2.4,13.2c-2.4,2.8-5.6,4-9.3,3.5c-2.8-0.3-4.8-2-6.1-4.3 c-0.1-0.1-0.1-0.2-0.2-0.3c0,1.3,0,2.7,0,4.1c-2.8,0-5.7,0-8.5,0c0-0.3,0-0.6,0-0.9c1.3,0,2.5,0,3.8,0c0-11.4,0-22.8,0-34.2 c-1.3,0-2.5,0-3.8,0C0,2.1,0,1.8,0,1.5L0,1.5z M126.4,0c0.4,0.1,0.7,0.2,1,0.4c1.4,0.6,2.2,1.8,2,3.1c-0.1,1.1-0.5,1.9-1.5,2.2 c-1,0.4-2,0.4-2.8-0.4c-0.8-0.8-1.1-1.7-0.8-2.7c0.1-0.4,0.4-0.7,0.6-1c0.1-0.1,0.2-0.4,0.2-0.5c-0.1-0.1-0.3-0.2-0.5-0.3 c-0.6-0.1-1.1,0.2-1.6,0.5C121.8,1.9,121,3,120.4,4c-1.5,2.2-2.5,4.7-3.4,7.3c-0.3,1-0.7,2-1,3.1c0,0.1-0.1,0.2-0.1,0.4 c1.6,0,3.1,0,4.7,0c0,0.3,0,0.6,0,0.9c-1.7,0-3.3,0-5,0c-0.5,1.2-0.8,2.5-1.3,3.7c-1.6,4.9-3.3,9.9-5,14.8c-1,3.2-2.3,6.2-4.2,8.9 c-1,1.4-2,2.8-3.3,4c-1.1,1-2.4,1.6-3.9,1.7c-0.1,0-0.1,0-0.2,0.1c-0.4,0-0.8,0-1.2,0c-0.3-0.1-0.6-0.1-0.9-0.3 c-1-0.5-1.7-1.1-2-2.2c-0.2-1,0.2-2.1,1.2-2.6c0.9-0.5,2.2-0.4,2.9,0.2c0.8,0.7,0.9,2,0.2,2.8c-0.1,0.2-0.3,0.2-0.4,0.4 s-0.2,0.4-0.2,0.5c0.1,0.1,0.3,0.4,0.5,0.4c0.4,0,0.8,0,1.2-0.2c0.8-0.3,1.4-0.9,1.9-1.6c1-1.2,1.6-2.6,2-4.1 c1-3.6,2.2-7.3,3.1-10.9c1.4-4.8,2.6-9.7,4.2-14.5c0.2-0.4,0.3-0.8,0.5-1.3c-1.7,0-3.5,0-5.1,0c0-0.3,0-0.6,0-0.9c0.1,0,0.2,0,0.4,0 c1.6,0,3.1,0,4.7,0c0.3,0,0.4-0.1,0.5-0.4c1.3-3.7,3.2-7,5.9-9.8c1.5-1.6,3.1-3,5.1-3.9c0.7-0.3,1.5-0.4,2.2-0.7 c0.1,0,0.1-0.1,0.2-0.1C125.3,0,125.8,0,126.4,0 M150,34.2c-0.4,0.9-0.8,1.7-1.6,2.3c-1.4,1.3-3.1,1.8-5,1.7 c-0.9-0.1-1.9-0.2-2.8-0.5c-2-0.6-3.1-2-3.2-4.2c0-2,0-4,0-6c0-3.8,0-7.6,0-11.5c0-0.2,0-0.3,0-0.4c-1.7,0-3.2,0-4.8,0 c0-0.3,0-0.6,0-0.9c0.6,0,1.2-0.1,1.8-0.1c1.6-0.2,3.2-0.6,4.5-1.8c1-0.9,1.5-2.1,1.9-3.4c0.2-0.8,0.5-1.6,0.7-2.5 c0.1,0,0.4,0,0.6,0c0,2.5,0,5.2,0,7.7c2.6,0,5.1,0,7.7,0c0,0.3,0,0.6,0,0.9c-2.6,0-5.1,0-7.7,0c0,0.2,0,0.3,0,0.4 c0,6.2,0,12.3,0,18.4c0,0.3,0.1,0.7,0.1,1c0.2,1.1,1,1.7,2.1,1.8c2.1,0.2,3.4-0.8,4.4-2.6c0.1-0.1,0.1-0.3,0.2-0.4 c0.1-0.2,0.1-0.3,0.2-0.5c0.3,0.1,0.5,0.1,0.8,0.2C150,34,150,34.1,150,34.2 M77.4,36.6c1.5,0,2.9,0,4.3,0c0,0.3,0,0.6,0,0.9 c-4.5,0-8.9,0-13.4,0c0-0.3,0-0.6,0-0.9c1.4,0,2.8,0,4.3,0c0-0.2,0-0.3,0-0.4c0-5.9,0-11.9,0-17.7c0-0.5-0.1-1-0.1-1.6 c-0.4-1.7-1.7-2.6-3.5-2.5c-2.3,0.2-4,1.3-5.5,3.1c-0.8,1-1.5,2.2-2.1,3.3c-0.1,0.1-0.1,0.2-0.1,0.4c0,5.1,0,10.1,0,15.2 c0,0.1,0,0.2,0,0.2c1.4,0,2.8,0,4.2,0c0,0.3,0,0.6,0,0.9c-4.4,0-8.8,0-13.3,0c0-0.3,0-0.5,0-0.9c0.1,0,0.2,0,0.4,0 c1.2,0,2.5,0,3.7,0c0.2,0,0.3-0.1,0.3-0.3c0-6.8,0-13.6,0-20.4c0-0.1,0-0.2,0-0.3c-1.4,0-2.9,0-4.4,0c0-0.3,0-0.6,0-0.9 c0.1,0,0.2,0,0.4,0c1.8,0,3.6,0,5.4,0c0.4,0,0.8,0,1.2-0.1c0.9-0.2,1.2-0.3,2.1-1.1c0,1.9,0,3.7,0,5.6h0.1c0.1-0.1,0.1-0.2,0.1-0.3 c0.8-1.3,1.6-2.4,2.8-3.4c1.9-1.6,4.1-2.2,6.5-1.9c1.2,0.1,2.3,0.3,3.4,0.8c1.9,0.9,2.8,2.4,3,4.4c0.1,0.5,0.1,0.9,0.1,1.4 c0,5.3,0,10.6,0,16C77.4,36.3,77.4,36.4,77.4,36.6 M87,22.8c0.2,0,0.3,0,0.4,0c0.8,0,1.7,0,2.5,0c2,0,4.1,0,6.1,0 c0.5,0,0.6-0.1,0.6-0.6c0-0.7,0-1.4-0.1-2.1c-0.1-1-0.2-2.2-0.7-3.1c-0.5-1.1-1.3-2-2.5-2.3c-2.1-0.6-4.8-0.1-5.8,3 C87,19.3,87,21,87,22.8z M101.6,29.6c0.3,0,0.6,0,0.9,0c0,0.2-0.1,0.4-0.1,0.6c-0.7,2.9-2.2,5.3-4.9,6.8c-1.7,0.9-3.5,1.3-5.4,1.2 c-2.6-0.2-4.9-1-6.8-2.8c-1.7-1.7-2.7-3.6-3.2-5.8c-1.1-4.9,0.2-9.3,3.6-13c1.4-1.5,3.2-2.5,5.3-2.8c2.2-0.3,4.1,0.2,5.9,1.5 c2.6,1.9,4.3,4.4,5,7.5c0.3,1.2-0.1,1.1-0.9,1.1c-4.5,0-9.1,0-13.6,0c-0.2,0-0.3,0-0.4,0c0,0.2,0,0.3,0,0.4c0,1.9,0,4,0,5.9 c0,1.3,0.1,2.6,0.6,3.8c0.7,2.1,2.2,3.2,4.4,3.4c2.7,0.2,5-0.5,7-2.4c1.3-1.3,2.2-2.9,2.5-4.8C101.5,30,101.5,29.8,101.6,29.6 L101.6,29.6z M36.1,22.8c0.2,0,0.2,0,0.3,0c2.9,0,5.8,0,8.7,0c0.1,0,0.1,0,0.2,0c0.2,0,0.4-0.1,0.4-0.4c0-1.5,0-3-0.4-4.5 c-0.6-2.2-1.8-3.3-3.9-3.4c-2-0.2-3.7,0.7-4.6,2.6c-0.5,1-0.7,2.2-0.8,3.4C36.1,21.3,36.1,22,36.1,22.8z M36.1,23.7 c0,0.7,0,1.5,0,2.2c0,1.7,0,3.4,0.1,5.1c0.1,1.4,0.3,2.8,1.1,4c0.8,1.4,2.1,2,3.7,2.2c2.9,0.2,5.5-0.6,7.4-2.8 c1.2-1.3,1.9-2.9,2.2-4.6c0-0.1,0-0.1,0-0.1c0,0,0,0,0-0.1c0.2,0,0.5,0,0.9,0c-0.1,0.6-0.2,1.1-0.4,1.6c-1.1,3.4-3.3,5.7-6.8,6.6 c-5,1.3-10.6-0.9-12.7-6.7c-1.9-5.3-0.9-10.1,2.8-14.4c1.3-1.6,3.1-2.7,5.2-3.1c2.3-0.4,4.5,0,6.4,1.3c2.5,1.8,4.1,4.2,5,7.2 c0.1,0.3,0.1,0.7,0.1,1c0,0.3-0.1,0.5-0.4,0.5c-0.1,0-0.2,0-0.3,0c-4.6,0-9.1,0-13.7,0C36.4,23.7,36.3,23.7,36.1,23.7L36.1,23.7z M54.1,47.6c0-1.4,0-2.8,0-4.2c0.1,0,0.3,0,0.5,0c0,1.7,0,3.4,0,5c-0.2,0.1-0.4,0-0.5-0.1c-1.1-1.3-2.2-2.5-3.3-3.8 c-0.1-0.1-0.1-0.2-0.3-0.3c0,1.5,0,2.8,0,4.3c-0.1,0-0.3,0-0.4,0c0-1.7,0-3.4,0-5.1c0.2-0.1,0.4,0,0.6,0.2c1.1,1.3,2.2,2.5,3.2,3.7 C53.8,47.4,53.9,47.4,54.1,47.6C54,47.6,54.1,47.6,54.1,47.6 M21.7,47.7c0-1.5,0-2.9,0-4.3c0.2,0,0.3,0,0.5,0c0,1.7,0,3.4,0,5 c-0.2,0.1-0.4,0-0.5-0.1c-1.1-1.3-2.2-2.5-3.3-3.8c-0.1-0.1-0.2-0.2-0.2-0.3c0,1.4,0,2.8,0,4.3c-0.1,0-0.3,0-0.5,0 c0-1.6,0-3.4,0-5.1c0.2-0.1,0.4,0,0.6,0.2C19.3,45,20.4,46.2,21.7,47.7 M87.6,45.9c0-1.3-1-2.2-2.2-2.2c-1.2,0-2.2,1-2.2,2.2 c0,1.3,1,2.2,2.2,2.3C86.6,48.1,87.6,47.1,87.6,45.9z M85.3,48.6c-1.6-0.1-2.7-1.2-2.6-2.7c0.1-1.5,1.3-2.6,2.9-2.6 c1.4,0.1,2.6,1.2,2.5,2.8C88,47.4,86.8,48.6,85.3,48.6L85.3,48.6z M36.4,43.8c0,0.7,0,1.3,0,1.9c0.5,0,0.9,0,1.3-0.1 c0.5-0.1,0.7-0.5,0.8-0.8c0-0.4-0.2-0.8-0.7-0.9C37.3,43.8,36.8,43.8,36.4,43.8z M36.3,46.1c0,0.8,0,1.6,0,2.3c-0.2,0-0.3,0-0.5,0 c0-1.7,0-3.4,0-5.1c0.6,0,1.1,0,1.7,0c0.7,0.1,1.2,0.5,1.3,1c0.2,0.7-0.1,1.1-0.8,1.6c0.3,0.5,0.6,0.8,0.8,1.3 c0.3,0.4,0.5,0.8,0.8,1.3c-0.3,0.1-0.5,0.1-0.8-0.3c-0.2-0.5-0.6-0.8-0.8-1.3C37.8,46.1,37.1,45.9,36.3,46.1L36.3,46.1z M43.4,46.3 c0.7,0,1.3,0,2,0c-0.4-0.8-0.7-1.5-1-2.2C44.1,44.8,43.8,45.6,43.4,46.3z M46.9,48.4c-0.3,0.1-0.5,0-0.6-0.3 c-0.1-0.4-0.4-0.8-0.5-1.2c-0.1-0.1-0.2-0.2-0.4-0.2c-0.6,0-1.3,0-1.9,0c-0.2,0-0.3,0.1-0.4,0.3c-0.2,0.4-0.4,0.8-0.5,1.1 c-0.2,0.3-0.3,0.4-0.6,0.3c0.1-0.3,0.2-0.5,0.4-0.8c0.6-1.3,1.3-2.7,1.9-4c0.1-0.1,0.1-0.2,0.2-0.3c0.1,0.1,0.2,0.2,0.2,0.2 c0.8,1.6,1.4,3.2,2.2,4.7C46.9,48.3,46.9,48.4,46.9,48.4L46.9,48.4z M12,44.1c-0.4,0.8-0.7,1.5-1,2.2c0.7,0,1.4,0,2,0 C12.7,45.6,12.4,44.9,12,44.1z M14.5,48.4c-0.3,0.1-0.5,0-0.6-0.3c-0.2-0.4-0.4-0.8-0.5-1.2c-0.1-0.1-0.2-0.2-0.3-0.2 c-0.7,0-1.3,0-2,0c-0.1,0-0.2,0.1-0.3,0.2c-0.2,0.4-0.4,0.8-0.5,1.2c-0.2,0.4-0.2,0.4-0.6,0.3c0-0.1,0-0.1,0.1-0.2 c0.8-1.6,1.4-3.1,2.2-4.6c0.1-0.1,0.2-0.2,0.2-0.3c0.1,0.1,0.2,0.2,0.2,0.3c0.7,1.6,1.4,3.1,2.1,4.6C14.5,48.3,14.5,48.3,14.5,48.4 L14.5,48.4z M79.7,47.6c0.1,0.4,0,0.5-0.3,0.6c-0.8,0.3-1.7,0.4-2.6,0.1c-1.2-0.4-1.8-1.6-1.6-2.9c0.2-1.1,1.3-2.1,2.5-2.1 c0.5,0,1.1,0.2,1.7,0.3c0.4,0.1,0.4,0.3,0.3,0.5c-0.5-0.2-1-0.3-1.5-0.4c-1.3-0.2-2.3,0.8-2.5,2C75.6,47,76.5,48,77.8,48 c0.6,0,1.1-0.2,1.6-0.4C79.5,47.7,79.6,47.7,79.7,47.6 M62.3,44.1c-0.5-0.2-1-0.3-1.4-0.4c-0.9-0.2-1.7,0.1-2.2,1 c-0.5,0.8-0.5,1.7,0,2.5s1.4,1,2.2,0.9c0.5-0.1,0.9-0.3,1.4-0.4c0.1,0.4,0.1,0.4-0.2,0.5c-1.2,0.4-2.3,0.5-3.4-0.3 c-0.8-0.7-1.1-1.9-0.8-2.8c0.4-1,1.4-1.7,2.4-1.7c0.5,0,1.1,0.2,1.6,0.3C62.4,43.7,62.4,43.7,62.3,44.1 M6.6,44.1 C6.3,44,6,43.8,5.7,43.8c-0.2-0.1-0.4,0-0.7,0.1c-0.4,0.2-0.5,0.4-0.5,0.8s0.2,0.6,0.4,0.8c0.4,0.2,0.8,0.3,1.2,0.5 c0.8,0.4,1,1.3,0.5,1.9c-0.4,0.5-1.1,0.8-1.7,0.6c-0.2-0.1-0.3-0.1-0.4-0.1c-0.3-0.1-0.5-0.3-0.4-0.8c0.1,0.1,0.3,0.2,0.4,0.3 C4.9,48,5.3,48.2,5.7,48c0.4-0.2,0.6-0.5,0.7-0.8c0-0.4-0.1-0.7-0.4-0.8C5.6,46.2,5.3,46.2,5,46c-0.9-0.4-1.2-0.9-1-1.7s1-1.1,1.8-1 c0.2,0,0.3,0.1,0.4,0.2C6.7,43.6,6.7,43.6,6.6,44.1 M69.4,47.6c0.3,0.2,0.7,0.4,1,0.4c0.8,0.2,1.3-0.3,1.3-1c0-0.3-0.1-0.6-0.4-0.7 c-0.3-0.2-0.6-0.3-0.9-0.4c-0.9-0.4-1.2-0.9-1.1-1.7c0.1-0.7,0.9-1.1,1.7-1c0.2,0,0.4,0.1,0.5,0.1c0.3,0.1,0.5,0.2,0.4,0.7 c-0.2-0.1-0.3-0.2-0.4-0.2c-0.4-0.2-0.7-0.2-1.1-0.1s-0.6,0.4-0.7,0.8s0.1,0.7,0.4,0.9c0.3,0.2,0.6,0.2,0.9,0.4c0.9,0.4,1.2,1,1,1.8 c-0.2,0.8-1,1.1-1.9,0.9c-0.1-0.1-0.3-0.1-0.4-0.1C69.4,48.2,69.2,48,69.4,47.6 M32.8,43.4c0,0.1,0,0.2,0,0.4c-0.8,0-1.4,0-2.2,0 c0,0.6,0,1.2,0,1.9c0.7,0,1.3,0,1.9,0c0,0.1,0,0.2,0,0.4c-0.7,0-1.3,0-1.9,0c0,0.8,0,1.6,0,2.5c-0.1,0-0.3,0-0.4,0 c0-1.7,0-3.4,0-5.1C31,43.4,31.9,43.4,32.8,43.4 M65.5,43.4c0.2,0,0.3,0,0.4,0c0,1.7,0,3.4,0,5.1c-0.1,0-0.3,0-0.4,0 C65.5,46.8,65.5,45.1,65.5,43.4 M129.5,36.6c1.5,0,3,0,4.4,0c0,0.3,0,0.6,0,0.9c-4.5,0-9,0-13.5,0c0-0.3,0-0.6,0-0.9 c1.4,0,2.9,0,4.4,0c0-7,0-14,0-21c-0.6,0-1.2,0-1.8,0c0-0.3,0-0.6,0-0.9c0.1,0,0.2,0,0.4,0c1.1,0,2.3-0.1,3.5-0.2 c1-0.1,1.9-0.4,2.6-1.1C129.5,21.3,129.5,28.9,129.5,36.6"></path></svg>
          </div>

          <div className={hpStyles['logo']}>
            <svg height="75" viewBox="0 0 150 67" width="150" xmlns="http://www.w3.org/2000/svg"><title>The Empire State Building</title><path d="M0.1,65.2H150V67H0.1L0.1,65.2z M31.5,46c1.5-0.5,2.3-1.7,2.3-3.6c0-2.1-1.4-3.9-4.3-3.9h-6.8v16.4h7.8 c3.1,0,4.7-2,4.7-4.7C35.2,47.8,33.7,46.3,31.5,46z M30.1,53c0,0.7-0.1,0.8-0.5,0.8h-2.2v-7.4h2.2c0.3,0,0.5,0.2,0.5,1V53z M30.1,44.7c0,0.8-0.1,1-0.5,1h-2.2v-6.4h2.2c0.3,0,0.5,0.1,0.5,0.8V44.7z M83,38.4h-8v16.4h8c3.9,0,7.4-2.3,7.4-8.1 S86.9,38.4,83,38.4L83,38.4z M84.8,50.1c0,2.9-0.2,3.7-1.8,3.7h-3.2V39.4H83c1.6,0,1.8,0.6,1.8,3.7V50.1z M48.9,38.4v12.3 c0,2.6-1.9,3.3-4.2,3.3c-1.5,0-2-0.3-2.3-0.6c-0.2-0.2-0.2-0.5-0.2-0.8V38.4h-4.7v11.3c0,3.8,2.8,5.5,7.2,5.5c3.7,0,5.7-1.8,5.7-4.5 V38.4L48.9,38.4L48.9,38.4z M53.6,38.4h4.7v16.4h-4.7V38.4z M62.2,38.4v16.4h10.6v-3.7h-0.3L68.2,54h-1.4V38.4H62.2z M92.6,38.4h4.7 v16.4h-4.7V38.4z M112.1,38.4v9.6l-10-9.6h-1.4v16.4h1.5v-9.5l9.6,9.5h1.7V38.4L112.1,38.4z M115.7,46.6c0,5.8,4,8.3,8.3,8.3 c2.9,0,5.2-0.1,6.2-0.4v-7.2h-6.2v1.2h3.7l-1.9,5.5h-2.1c-1.5,0-2.2-1-2.2-3.7v-7.4c0-2.6,1-3.7,2.5-3.7h1.1l4,3.3h0.3v-3.8 c-1.7-0.3-3.5-0.4-5.3-0.4C119.7,38.3,115.7,40.8,115.7,46.6 M0,16.6V33h11.5v-3.5h-0.3l-5.2,2.7H4.7v-8.8L8,24.5h0.3v-2.9H8 l-3.3,1.2v-5.5h1.1l4.5,2.2h0.3v-3H0z M29.3,16.6L22.7,27L15,16.6h-1.1V33h1.5v-8.3l5.2,7.6h0.5l4.6-7.6V33h4.7V16.6L29.3,16.6z M39.9,16.5h-6.7V33h4.7v-7.9h2c3,0,4.5-1.7,4.5-4.3C44.4,18.7,42.9,16.5,39.9,16.5L39.9,16.5z M40.3,23.1c0,0.8-0.1,1-0.5,1h-1.9 v-6.5h1.9c0.3,0,0.5,0.1,0.5,0.8V23.1z M46.3,16.6h4.7V33h-4.7V16.6z M62.5,24.6c1.7-0.6,2.8-1.9,2.8-3.8c0-2.1-1.5-4.2-4.5-4.2H54 V33h4.7v-8h0.1l4,8h5v-0.5L62.5,24.6z M61.2,23c0,0.8-0.1,1-0.5,1h-2.1v-6.4h2.1c0.3,0,0.5,0.1,0.5,0.8V23z M69.4,16.6V33h11.5v-3.5 h-0.3l-5.2,2.7h-1.2v-8.8l3.3,1.2h0.3v-2.9h-0.3l-3.3,1.2v-5.5h1.1l4.4,2.2H80v-3H69.4z M99.3,16.6v3h0.3l3.7-2.4V33h4.7V17.2 l3.7,2.4h0.3v-3L99.3,16.6z M118.4,16.5h-1.2l-7,16.4h2c0.3-1.5,0.7-2.9,1.3-4.4h5.3l1.8,4.4h4.8L118.4,16.5z M113.9,27.4 c0.2-0.5,0.4-1.1,0.7-1.7l1.6-3.7l2.2,5.3L113.9,27.4z M124,16.6v3h0.3l3.7-2.4V33h4.7V17.2l3.7,2.4h0.3v-3L124,16.6z M138.5,16.6 V33H150v-3.5h-0.3l-5.2,2.7h-1.2v-8.8l3.3,1.2h0.3v-2.9h-0.3l-3.3,1.2v-5.5h1.1l4.4,2.2h0.4v-3H138.5z M87.5,21.4 c0,1.2,0.4,2.4,1.7,3.7l5,4.7v1.1c0,0.8-0.7,1.3-1.9,1.3h-0.6l-3.9-3.5h-0.3v4c1,0.2,2.9,0.4,4.9,0.4c4.4,0,5.8-2.9,5.8-4.6 c0-1.4-0.4-2.5-1.7-3.7l-5.9-5.5v-0.2c0-1,0.6-1.8,2.4-1.8h0.5l3.6,3.4h0.3v-3.9c-1.4-0.3-2.9-0.4-4.4-0.4 C90.1,16.5,87.5,18.3,87.5,21.4 M0.1,4.3h54.8v1.9H0.1L0.1,4.3z M96,4.3H150v1.9H96L96,4.3z M61.3,0v1.1h3.2v9.1h1.3V1.1H69V0 L61.3,0z M78.6,0v4.4h-6V0h-1.3v10.2h1.3V5.5h6v4.7h1.3V0H78.6z M82.8,0v10.2h6.7V9.1h-5.4V5.6h5.3V4.4h-5.3V1.1h5.4V0L82.8,0z"></path></svg>
          </div>

          <div className={hpStyles['logo']}>
            <svg height="32" viewBox="0 0 150 31.5" width="150" xmlns="http://www.w3.org/2000/svg"><title>Prudential</title><path d="M143.7,25.1c0.6,0,0.9-0.1,1.1-0.3c0.2-0.2,0.2-0.6,0.2-1.2V10.4c0-0.7-0.1-1.1-0.2-1.3 c-0.2-0.3-0.6-0.4-1.2-0.4h-0.5v-1l5.3-0.4v16.4c0,0.8,0.2,1.3,0.7,1.4c0.2,0,0.4,0.1,0.8,0.1v1h-6.3V25.1L143.7,25.1z M135.4,20.3 c0.5-0.4,1.4-0.7,2.6-1v1.9c0,1.1-0.2,1.9-0.5,2.4c-0.4,0.7-0.9,1.1-1.6,1.1c-0.4,0-0.7-0.2-1-0.5c-0.3-0.4-0.4-0.9-0.4-1.5 C134.5,21.6,134.8,20.8,135.4,20.3 M133.1,15.3c0.1-0.3,0.4-0.5,0.8-0.8c0.5-0.3,1.1-0.4,1.7-0.4c1.6,0,2.4,0.7,2.4,2.2v2 c-2.4,0.5-4.1,1-5.1,1.6c-1.3,0.8-2,1.9-2,3.3c0,0.8,0.3,1.5,0.8,2.2c0.7,0.8,1.6,1.2,3,1.2c0.7,0,1.5-0.2,2.1-0.6 c0.6-0.4,1.1-0.9,1.4-1.5V25c0,0.5,0,0.9,0,1.1h4.6v-1h-0.2c-0.7,0-1.1-0.5-1.1-1.5v-6.1c0-3-1.7-4.4-5-4.4c-1.4,0-2.5,0.3-3.4,0.9 c-0.9,0.6-1.4,1.3-1.4,2.2c0,0.6,0.2,1.1,0.6,1.5c0.4,0.3,0.8,0.5,1.3,0.5c0.5,0,1-0.2,1.3-0.5c0.4-0.3,0.5-0.7,0.5-1.1 c0-1-0.5-1.5-1.6-1.5c-0.4,0-0.7,0.1-1,0.4L133.1,15.3C133.1,15.3,133.1,15.3,133.1,15.3 M44.1,18.2c2.1,0,3.8-0.4,5-1.2 c1.4-0.9,2.1-2.3,2.1-4c0-1.9-0.7-3.2-2.2-4.1c-1.2-0.8-2.9-1.2-5-1.2h-7v1c0.8,0,1.3,0.1,1.5,0.2c0.3,0.2,0.5,0.7,0.5,1.6v13.1 c0,0.6-0.1,1.1-0.4,1.3c-0.2,0.2-0.7,0.3-1.3,0.3h-0.3v1h8.3v-1h-0.9c-0.7,0-1.1-0.1-1.4-0.3c-0.2-0.2-0.4-0.6-0.4-1.3v-5.3H44.1z M47.5,13c0,2.7-1.1,4.1-3.3,4.1H43V8.7h1.2C46.4,8.7,47.5,10.1,47.5,13 M56.6,15.8c0.5-1.9,1.5-2.8,3.1-2.8c0.6,0,1,0.2,1.4,0.5 c0.3,0.3,0.5,0.7,0.5,1.2c0,0.5-0.1,0.9-0.4,1.2c-0.3,0.4-0.8,0.6-1.3,0.6c-0.5,0-0.9-0.1-1.1-0.4c-0.3-0.3-0.4-0.6-0.4-1 c0,0,0-0.1,0.1-0.3c-0.5,0.6-0.8,1.6-1.1,3.1c-0.2,1.2-0.3,2.2-0.3,3.2v2.5c0,0.6,0.1,1,0.2,1.2c0.2,0.2,0.6,0.3,1.3,0.3h0.4v1h-7 v-1h0.3c0.5,0,0.8-0.1,1-0.3c0.2-0.2,0.3-0.6,0.3-1.2v-5.5c0-1.9-0.1-3-0.2-3.2c-0.1-0.3-0.4-0.5-0.9-0.5h-0.4v-1h4.4L56.6,15.8z M71,24.1c-0.1,0-0.1,0.1-0.2,0.1L71,24.1c-0.2,0.6-0.6,1.2-1.2,1.6c-0.7,0.5-1.5,0.8-2.4,0.8c-1.5,0-2.5-0.4-3.1-1.2 c-0.5-0.6-0.7-1.6-0.7-3v-5.4c0-1.2-0.1-1.9-0.2-2.1c-0.1-0.3-0.5-0.4-1-0.4h-0.1v-1.1h4.8v9.4c0,1.2,0.5,1.9,1.6,1.9 c0.9,0,1.4-0.6,1.7-1.8c0.1-0.5,0.2-1.1,0.2-2v-3.9c0-1.3-0.1-2.1-0.2-2.2c-0.2-0.2-0.6-0.3-1.2-0.3h-0.4v-1.1h5.3v9.6 c0,1,0.1,1.7,0.2,1.8c0.2,0.2,0.5,0.3,0.9,0.3h0.3v1h-4.7l-0.1-2.1l0.1,0.1L71,24.1L71,24.1z M81.4,13c-1.7,0-3.1,0.7-4.2,2.2 c-0.9,1.3-1.4,2.8-1.4,4.5c0,1.8,0.3,3.4,1,4.5c0.9,1.5,2.3,2.2,4.1,2.2c1,0,1.8-0.3,2.5-0.9c0.6-0.5,0.9-1,1.1-1.6l-0.1,0.1 L84.4,24l0.1,2.1h4.6v-1h-0.2c-0.5,0-0.9-0.1-1-0.4c-0.1-0.2-0.2-0.6-0.2-1.1V7.2l-5.4,0.4v1h0.3c0.7,0,1.1,0.2,1.3,0.5 c0.1,0.2,0.2,0.7,0.2,1.5c0,2.1,0,3.3,0.1,3.6C83.7,13.4,82.8,13,81.4,13 M84.1,18.4V21c0,0.7-0.1,1.3-0.2,1.8c-0.3,1.4-1,2.1-2,2.1 c-1.4,0-2.2-1.7-2.2-5.1c0-1.5,0.1-2.6,0.2-3.3c0.3-1.4,1-2.1,2-2.1C83.4,14.3,84.1,15.7,84.1,18.4 M93,19.4h7.8 c0-1.9-0.4-3.4-1.3-4.5c-1-1.3-2.4-1.9-4.2-1.9c-1.7,0-3.1,0.6-4.3,1.9c-1.1,1.3-1.7,2.9-1.7,4.9c0,2,0.5,3.6,1.5,4.8 c1.1,1.3,2.6,2,4.6,2c1.5,0,2.8-0.6,3.9-1.7c0.9-1,1.4-2,1.4-3.2h-1.3c0,0.8-0.3,1.6-1,2.4c-0.7,0.8-1.6,1.3-2.5,1.3 c-1.4,0-2.3-1-2.7-3C93,21.6,93,20.6,93,19.4 M95.2,14c1.3,0,2,1.5,2,4.4H93c0-0.5,0-0.8,0.1-1.1C93.2,15.1,93.9,14,95.2,14 M105.8,15c0.3-0.6,0.8-1.1,1.4-1.4c0.6-0.4,1.3-0.6,2.1-0.6c2.6,0,3.8,1.4,3.8,4.2V23c0,0.6,0,1,0,1.2c0,0.6,0.4,0.9,1.2,0.9h0.3v1 h-5v-9.4c0-0.6-0.1-1.1-0.2-1.4c-0.2-0.4-0.6-0.6-1.3-0.6c-0.6,0-1.1,0.3-1.4,0.9c-0.4,0.6-0.5,1.4-0.5,2.6v4.8 c0,1.1,0.1,1.7,0.2,1.8c0.2,0.2,0.6,0.3,1.1,0.3h0.2v1h-6.5v-1h0.3c0.7,0,1-0.3,1.1-0.9c0-0.1,0-0.6,0-1.3v-6.4c0-1-0.1-1.6-0.2-1.8 c-0.1-0.2-0.5-0.3-0.9-0.3h-0.3v-1h4.6V15z M119.4,26.5c-2.1,0-3.2-1.2-3.2-3.6v-8.5H114v-1h0.3c1.3,0,2.3-0.7,3.2-2.1 c0.7-1.2,1.1-2.4,1.2-3.6h1.1v5.8h2.4v1h-2.4v8.9c0,1.1,0.3,1.6,1,1.6c0.6,0,0.9-0.5,1.1-1.5c0.1-0.4,0.1-1.1,0.1-2.1h1.2 c0,1.8-0.2,3-0.5,3.6C122.1,26,121,26.5,119.4,26.5 M16,1C7,1,1.1,8.4,1.1,15.3c0,4,1,5.9,2,7.8c1.3-3.6,4-10.7,4-10.7 s1.2-0.6,1.2-0.5l1.8-4.5l1.2-0.6l1.4-3l3.1,0.5l6.3,3.5l7.1,2C27.5,5,22.3,1,16,1 M15.9,31.5c-3.9,0-8.7-1.4-12.1-5.6H28 C25.2,29.5,20.4,31.5,15.9,31.5 M20.7,25.2h-2.2l4.1-5.1l0.4,0.8L20.7,25.2z M22.8,9l-7-4.1l-2.6-0.5v1.9l2,1.8l-2.8-0.2 c0,0,0.1,0.1,2.4,2.6l10.5,1.7l1.8,1.2l-4.8,0.2l-2,7.2l-6.5,4.3H9.7l1.4-2.8l-0.2-0.1l-3.8,2.9H6.2l3.9-5.5 c0.2-1.6,0.1-0.9,0.3-3.7l-0.6-0.8l-1.6,6.1L5,25.2H4.1l1.9-2.7l2.7-8.3l-0.7,0.3l-1.2,3.3l-0.8,0.5c0,0-1.9,4.7-2.9,7 c-1.5-2.1-3.1-5-3.1-9.9C0,7.9,6.4,0,16,0c9.2,0,14.2,7.4,15,11.2L22.8,9z M27.4,19.7L26,20.9l-2.7,4.3h-1.7l1.7-3.1l1.4-1.1l2-5.6 l2.1,0.9L27.4,19.7z M28.6,25.2h-3.5l3.4-5.3l1-3.4l2.1,0.7C31.4,19.8,30.5,22.6,28.6,25.2 M24.3,18.8L23.2,19l0.3-2.1l-0.3-0.4 l0.3-2.4l2.7,1.1L24.3,18.8z M123.9,25.1h0.3c0.5,0,0.8-0.2,1-0.5c0.1-0.2,0.1-0.8,0.1-1.7v-6.7c0-0.9-0.1-1.4-0.3-1.6 c-0.2-0.2-0.4-0.2-0.8-0.2h-0.3v-1h4.9v9.5c0,1.1,0.1,1.7,0.2,1.8c0.2,0.2,0.5,0.3,0.9,0.3h0.3v1h-6.3L123.9,25.1L123.9,25.1z M124.9,9.8c0-0.6,0.2-1.1,0.6-1.5c0.4-0.4,0.9-0.6,1.5-0.6c0.6,0,1.1,0.2,1.5,0.6c0.4,0.4,0.6,0.9,0.6,1.5c0,0.6-0.2,1.1-0.6,1.5 c-0.4,0.4-0.9,0.6-1.5,0.6c-0.6,0-1.1-0.2-1.5-0.6C125.1,10.9,124.9,10.4,124.9,9.8"></path></svg>
          </div>

          <div className={hpStyles['logo']}>
            <svg height="48" viewBox="0 0 150 47.3" width="150" xmlns="http://www.w3.org/2000/svg"><title>USAID</title><path d="M32.1,0.4v18.2c0,10.6-7.3,14.3-16.1,14.3C6.7,33,0,28.6,0,18.7V0.4h8v18.5c0,4.6,3.3,7.4,8,7.4c4.2,0,8.1-2.2,8.1-8V0.4 H32.1z M60.2,8.8C55.5,6.7,52.7,5.9,50,5.9c-2.9,0-4.7,1-4.7,2.6c0,4.9,16.3,3.5,16.3,14.7c0,6.2-5.2,9.8-12.3,9.8 c-5.6,0-8.4-1.5-11.6-3.1v-6.9c4.6,3.1,7.4,4.1,11,4.1c3.1,0,4.7-1.1,4.7-3c0-5.3-16.3-3.3-16.3-14.9C37,3.7,41.8,0,49.3,0 c3.6,0,6.8,0.8,10.9,2.5V8.8z M99.6,32.6H91l-2.6-6.4H74l-2.4,6.4h-8.5l13-32.1h9.3L99.6,32.6z M80.8,8.1l-4.7,12.5H86L80.8,8.1z M111.2,32.6h-8V0.4h8V32.6z M132.2,0.4C144,0.4,150,7.7,150,16.5c0,9.2-5.8,16-18.7,16h-13.3V0.4H132.2z M126.1,26.7h5.2 c8.1,0,10.5-5.5,10.5-10.2c0-5.5-3-10.2-10.6-10.2h-5.1V26.7z M4.1,40.5h-3v2.1h3v1h-3v3.6H0v-7.7h4.1V40.5z M7.2,39.5 c1.6,0,2.5,0.8,2.5,2.2c0,0.9-0.5,1.6-1.3,1.9c0.7,0.5,1.1,1.2,1.7,2.1c0.3,0.5,0.5,0.8,1,1.5H9.9l-1-1.6c-1-1.6-1.5-1.8-2-1.8H6.4 v3.3H5.3v-7.7H7.2z M6.4,42.8h0.7c1.2,0,1.5-0.6,1.5-1.2c0-0.7-0.4-1.2-1.5-1.2H6.4V42.8z M15.1,39.4c2.5,0,4.1,1.8,4.1,3.9 c0,2.1-1.6,3.9-4.2,3.9c-2.5,0-4.1-1.9-4.1-3.9C10.9,41.2,12.6,39.4,15.1,39.4z M15.1,46.3c1.7,0,3-1.2,3-2.9c0-1.7-1.3-2.9-3-2.9 c-1.7,0-3,1.2-3,2.9C12.1,45,13.4,46.3,15.1,46.3z M27.5,47.2h-1.1v-6h0l-2.4,3h-0.2l-2.4-3h0v6h-1.1v-7.7h1l2.5,3.2l2.6-3.2h1V47.2 z M37.7,40.5H35v6.7h-1.1v-6.7h-2.7v-1h6.4V40.5z M45.1,47.2H44v-3.3h-4.3v3.3h-1.1v-7.7h1.1v3.3H44v-3.3h1.1V47.2z M51.1,40.5h-3.3 v2.3H51v1h-3.1v2.4h3.4v1h-4.5v-7.7h4.4V40.5z M62,47.2h-1.1l-1-2.3h-3.3l-1,2.3h-1.1l3.3-7.7h0.8L62,47.2z M57,43.9h2.4l-1.2-2.8 L57,43.9z M69.9,47.2h-1.1v-6h0l-2.4,3h-0.2l-2.4-3h0v6h-1.1v-7.7h1l2.5,3.2l2.6-3.2h1V47.2z M75.9,40.5h-3.3v2.3h3.1v1h-3.1v2.4H76 v1h-4.5v-7.7h4.4V40.5z M79.1,39.5c1.6,0,2.5,0.8,2.5,2.2c0,0.9-0.5,1.6-1.3,1.9c0.7,0.5,1.1,1.2,1.7,2.1c0.3,0.5,0.5,0.8,1,1.5 h-1.3l-1-1.6c-1-1.6-1.5-1.8-2-1.8h-0.5v3.3h-1.1v-7.7H79.1z M78.3,42.8H79c1.2,0,1.5-0.6,1.5-1.2c0-0.7-0.4-1.2-1.5-1.2h-0.7V42.8z M84.7,47.2h-1.1v-7.7h1.1V47.2z M92.7,41.2c-0.9-0.6-1.8-0.8-2.6-0.8c-1.8,0-3.1,1.2-3.1,2.9c0,1.7,1.3,2.9,3.1,2.9 c0.9,0,1.8-0.3,2.7-0.9v1.2C92,47,91.2,47.3,90,47.3c-2.9,0-4.1-2.2-4.1-3.8c0-2.3,1.8-4.1,4.2-4.1c0.8,0,1.6,0.2,2.6,0.6V41.2z M100.7,47.2h-1.1l-1-2.3h-3.3l-1,2.3h-1.1l3.3-7.7h0.8L100.7,47.2z M95.7,43.9h2.4l-1.2-2.8L95.7,43.9z M108.5,47.2h-0.9l-5.1-5.9 v5.9h-1v-7.7h0.9l5.2,5.9v-5.9h1V47.2z M115.9,39.5c1.7,0,2.4,1,2.4,2.2c0,1.2-0.8,2.1-2.6,2.1h-1.1v3.3h-1.1v-7.7H115.9z M114.6,42.9h1.2c0.8,0,1.4-0.4,1.4-1.2c0-0.6-0.3-1.2-1.3-1.2h-1.3V42.9z M123.7,40.5h-3.3v2.3h3.1v1h-3.1v2.4h3.4v1h-4.5v-7.7h4.4 V40.5z M128.7,39.4c2.5,0,4.1,1.8,4.1,3.9c0,2.1-1.6,3.9-4.2,3.9c-2.5,0-4.1-1.9-4.1-3.9C124.6,41.2,126.3,39.4,128.7,39.4z M128.7,46.3c1.7,0,3-1.2,3-2.9c0-1.7-1.3-2.9-3-2.9c-1.7,0-3,1.2-3,2.9C125.8,45,127,46.3,128.7,46.3z M136.3,39.5 c1.7,0,2.4,1,2.4,2.2c0,1.2-0.8,2.1-2.6,2.1H135v3.3h-1.1v-7.7H136.3z M135,42.9h1.2c0.8,0,1.4-0.4,1.4-1.2c0-0.6-0.3-1.2-1.3-1.2 H135V42.9z M140.8,46.2h3.5v1h-4.6v-7.7h1.1V46.2z M149.5,40.5h-3.3v2.3h3.1v1h-3.1v2.4h3.4v1h-4.5v-7.7h4.4V40.5z"></path></svg>
          </div>

          <div className={hpStyles['logo']}>
            <svg height="29" viewBox="0 0 150 28.5" width="150" xmlns="http://www.w3.org/2000/svg"><title>Politico</title><path  d="M4.2,17.1v11.4H0v-28h4.8c2.3,0,4.1,0.2,5.3,0.5c1.2,0.3,2.3,0.9,3.2,1.8c1.6,1.6,2.4,3.5,2.4,5.9 c0,2.6-0.9,4.6-2.6,6.1s-4,2.2-6.9,2.2C6.2,17.1,4.2,17.1,4.2,17.1z M4.2,13.2h1.6c3.9,0,5.8-1.5,5.8-4.5c0-2.9-2-4.3-6-4.3H4.2 C4.2,4.4,4.2,13.2,4.2,13.2z M17,14.4c0-3.9,1.4-7.3,4.3-10.1C24.2,1.4,27.7,0,31.7,0c4,0,7.4,1.4,10.2,4.3 c2.9,2.8,4.3,6.3,4.3,10.3c0,4-1.4,7.4-4.3,10.2C39,27.6,35.6,29,31.5,29c-3.6,0-6.8-1.3-9.7-3.7C18.6,22.5,17,18.9,17,14.4z M21.3,14.4c0,3.1,1,5.6,3.1,7.6c2.1,2,4.4,3,7.2,3c2.9,0,5.4-1,7.4-3c2-2.1,3-4.5,3-7.5c0-3-1-5.5-3-7.5c-2-2-4.4-3-7.3-3 c-2.9,0-5.4,1-7.4,3C22.3,9,21.3,11.5,21.3,14.4z M52.8,0.5v24H61v4H48.6v-28C48.6,0.5,52.8,0.5,52.8,0.5z M68.2,0.5v28H64v-28 C64,0.5,68.2,0.5,68.2,0.5z M81.9,4.5v24h-4.2v-24h-6.4v-4h17.1v4L81.9,4.5L81.9,4.5z M95.5,0.5v28h-4.2v-28 C91.3,0.5,95.5,0.5,95.5,0.5z M120.1,2v5c-2.4-2-5-3.1-7.6-3.1c-2.9,0-5.3,1-7.3,3.1c-2,2.1-3,4.6-3,7.5c0,2.9,1,5.4,3,7.4 c2,2,4.4,3,7.3,3c1.5,0,2.7-0.2,3.8-0.7c0.6-0.2,1.2-0.6,1.8-1c0.6-0.4,1.3-0.9,2-1.5v5.1c-2.4,1.4-4.9,2.1-7.6,2.1 c-4,0-7.4-1.4-10.2-4.2c-2.8-2.8-4.2-6.2-4.2-10.2c0-3.6,1.2-6.7,3.5-9.5c2.9-3.4,6.6-5.1,11.2-5.1C115.4,0,117.8,0.7,120.1,2z M120.8,14.4c0-3.9,1.4-7.3,4.3-10.1C128,1.4,131.4,0,135.4,0c4,0,7.4,1.4,10.2,4.3c2.9,2.8,4.3,6.3,4.3,10.3c0,4-1.4,7.4-4.3,10.2 c-2.9,2.8-6.4,4.2-10.4,4.2c-3.6,0-6.8-1.3-9.7-3.7C122.3,22.5,120.8,18.9,120.8,14.4L120.8,14.4z M125,14.4c0,3.1,1,5.6,3.1,7.6 c2.1,2,4.4,3,7.2,3c2.9,0,5.4-1,7.4-3c2-2.1,3-4.5,3-7.5c0-3-1-5.5-3-7.5c-2-2-4.4-3-7.3-3c-2.9,0-5.4,1-7.4,3 C126,9,125,11.5,125,14.4z"></path></svg>
          </div>
        </div>
      </Row>
    </>
  )
}
