import Link from 'next/link'

import rowStyles from 'app/styles/row.module.css'
import blogStyles from 'app/styles/blogCard.module.css'

type BlogCardProps = {
  href: string
  title: string
  date: string
}

const BlogCard: React.FC<BlogCardProps> = ({
  href,
  title,
  date,
}) => {
  return (
    <article className={`${rowStyles['col-md-4']} ${blogStyles['blog_col']}`}>
      <Link
        href={href}
      >
        <h3>{title}</h3>
        <p className="sidenote">{date}</p>
      </Link>
    </article>
  )
}

export default BlogCard;





