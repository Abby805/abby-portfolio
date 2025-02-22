import Row from 'app/components/layout/Row'
import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <>
      <Row color="black">
        <h1>
        Frontend Developer
        </h1>
        <p>
          {`Design engineer. Professional crafter of the series of tubes. Whatever 
          you call it, I have over a decade of experience designing and building 
          beautiful, accessible online experiences for the public and private 
          sectors.`}
        </p>
      </Row>

      <Row color="blue">
        <BlogPosts />
      </Row>
    </>
  )
}
