export default function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="/rss"
          >
            <p>rss</p>
          </a>
        </li>
        <li>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/vercel/next.js"
          >
            <p>github</p>
          </a>
        </li>
      </ul>
      <p>
        © {new Date().getFullYear()} Abby Milberg
      </p>
    </footer>
  )
}
