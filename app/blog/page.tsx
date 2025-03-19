import { formatDate, getBlogPosts } from 'app/blog/utils'

import BlogCard from 'app/components/BlogCard'
import Row from 'app/components/Row'

import rowStyles from 'app/styles/row.module.css'

export const metadata = {
  title: 'Blog',
  description: 'Thoughts on frontend development, accessibility, and more.',
}

export default function Page() {
  let allPosts = getBlogPosts().sort((a, b) => {
    if (
      new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
    ) {
      return -1
    }
    return 1
  })

  return (
    <Row color="black" collapsePadTop>
      <h1 className={`${rowStyles['col-md-12']}`}>Blog</h1>
      {allPosts.map((post, i) => (
        <BlogCard
          href={`/blog/${post.slug}`}
          title={post.metadata.title}
          date={formatDate(post.metadata.publishedAt, false)}
          key={`hp-blog--${i}`}
        />
      ))}
    </Row>
  )
}
