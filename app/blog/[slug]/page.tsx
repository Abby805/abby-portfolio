import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/CustomMDX'
import { formatDate, getBlogPosts } from 'app/blog/utils'
import { baseUrl } from 'app/sitemap'

import Row from 'app/components/Row'
import rowStyles from 'app/styles/row.module.css'
import blogStyles from 'app/styles/blog.module.css'

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

export default async function Blog({ params }) {
  let blogParams = await params;
  let post = getBlogPosts().find((post) => post.slug === blogParams.slug)

  if (!post) {
    notFound()
  }

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

      <Row color="blue">
        <div>
          <p className={`${blogStyles['blog_date']}`}>
            Published on <time dateTime={post.metadata.publishedAt}>{formatDate(post.metadata.publishedAt)}</time>
          </p>
        </div>
      </Row>
      <Row color="black">
      <div className={`${rowStyles['col-md-4']} ${blogStyles['blog_sidebar']}`}>
        <p className={`${blogStyles['blog_share']}`}>Sharing is caring!</p>
        
      </div>
        <div className={`${rowStyles['col-md-8']} ${blogStyles['blog_body']}`}>
          <article>
            <CustomMDX source={post.content} />
          </article>
        </div>
      </Row>  
    </>
  )
}
