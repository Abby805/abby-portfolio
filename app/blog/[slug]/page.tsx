import React, { ReactNode } from 'react'
import Link from 'next/link'

import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/CustomMDX'
import { formatDate, getBlogPosts } from 'app/blog/utils'
import { baseUrl } from 'app/sitemap'

import Row from 'app/components/Row'
import rowStyles from 'app/styles/row.module.css'
import blogStyles from 'app/styles/blog.module.css'

import Bluesky from 'app/images/icons/bluesky.svg'
import LinkedIn from 'app/images/icons/linkedin.svg'

type ShareLink = {
  name: string
  href: string
  icon: ReactNode
}

export async function generateStaticParams() {
  let posts = getBlogPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }) {
  let blogParams = await params;
  let post = getBlogPosts().find((post) => post.slug === blogParams.slug)

  if (!post) {
    return
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata

  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default async function Blog ({ params }) {
  let blogParams = await params;
  let post = getBlogPosts().find((post) => post.slug === blogParams.slug)

  if (!post) {
    notFound()
  }

  const shareLinks = [
    {
      name: 'Bluesky',
      href: `https://bsky.app/intent/compose?text=${encodeURI(`${post.metadata.title} ${baseUrl}/blog/${post.slug}`)}`,
      icon: <Bluesky/>,
    },
    {
      name: 'LinkedIn',
      href: `https://www.linkedin.com/shareArticle?mini=true&amp;url=${baseUrl}/blog/${post.slug}`,
      icon: <LinkedIn/>,
    },
  ]

  const tags = post.metadata.tags ? 
    ` under ${
      post.metadata.tags.split(',')
        .map(tag => `<strong>${tag.trim()}</strong>`)
        .join(`, `)
    }`
    :
    null;

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'Abby Milberg',
            },
          }),
        }}
      />

      <Row color="black" collapsePadTop>
        <div>
          <h1>
            {post.metadata.title}
          </h1>
        </div>
      </Row>

      <Row color="blue" thin>
        <div>
          <p className={`sidenote ${blogStyles['blog_date']}`}>
            Published on&nbsp;
            <time dateTime={post.metadata.publishedAt}>
              {formatDate(post.metadata.publishedAt)}
            </time>
            {tags && 
              <span dangerouslySetInnerHTML={{__html: tags}} />
            }
          </p>
        </div>
      </Row>
      <Row color="black">
        <div className={`${rowStyles['col-md-8']} ${blogStyles['blog_body']}`}>
          <article>
            <CustomMDX source={post.content} />
          </article>
        </div>
        <div className={`${rowStyles['col-md-4']} ${blogStyles['blog_sidebar']}`}>
          <div className={`${blogStyles['blog_share']}`}>
            <p className={`sidenote`}>Sharing is caring!</p>
            <ul className={`${blogStyles['blog_share-items']}`}>
              {shareLinks.map((item: ShareLink) => {
                return (
                  <li key={`share-${item.href}`}>
                    <Link
                      href={item.href}
                      rel={'noopener noreferrer'}
                      target="_blank"
                      title={`Share on ${item.name}`}
                    >
                      {item.icon}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Row>  
    </>
  )
}
