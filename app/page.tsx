import Row from 'app/components/layout/Row'
import { BlogPosts } from 'app/components/posts'

import rowStyles from './styles/row.module.css'
import hpStyles from './styles/homepage.module.css'

export default function Page() {
  return (
    <>
      <Row color="black" collapsePadTop>
        <div className={`${rowStyles['col-2']} ${rowStyles['col-lg-2']}`}>
          <h1>
          Frontend Developer
          </h1>
          <p>
            {`Design engineer. Professional crafter of the series of tubes. Whatever 
            you call it, I have over a decade of experience designing and building 
            beautiful, accessible online experiences for the public and private 
            sectors.`}
          </p>
        </div>
      </Row>

      <Row color="blue" className={hpStyles['exp']}>
        <h2 className={rowStyles['col-3']}>Areas of Expertise</h2>

        <div className={rowStyles['col-1']}>
          <h3>Drupal</h3>
          <p>I specialize in theming, site-building, and custom module development for complex Drupal sites. Occasionally I get up and talk about it at places like DrupalCon North America, Drupal GovCon, and the DC Drupal Meetup.</p>
        </div>

        <div className={rowStyles['col-1']}>
          <h3>Component Libraries</h3>
          <p>Working with designers to understand the structure underlying a design system and architecting it to be flexible, robust, and accessible can make the difference between a site that grows and evolves for years, or just another retheme.</p>
        </div>

        <div className={rowStyles['col-1']}>
          <h3>JavaScript</h3>
          <p>Whether working on a full-blown React app, using vanilla JS, or leveraging libraries like GSAP to add delight, I believe that JavaScript should enhance the user experience for everyone.</p>
        </div>
      </Row>

      <Row color="black">
        <div className={rowStyles['col-2']}>
          <h2>PEBKAC<br/>
            <span>(Person exists beyond keyboard and code)</span>
          </h2>
          <p>After bouncing around between California and New York, I've been living in the greater Washington, DC area since 2011 (and working remotely with talented folks from around the globe since 2016).</p>
          <p>Outside of work, I can usually be found behind a camera, playing a board game, or being walked by my Australian Shepherds, Luna and Cosmo.</p>
        </div>
      </Row>

      <Row color="black">
        <BlogPosts />
      </Row>
    </>
  )
}
