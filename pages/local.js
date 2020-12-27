import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import { renderCategoryBlogPosts } from '../lib/renderCategoryBlogPosts'
//import 'bootstrap/dist/css/bootstrap.min.css'
import Row from 'react-bootstrap/Row'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Local( {allPostsData} ) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <header>
        <h5>Local News</h5>
      </header>
      <Row className="mb-3">
          {renderCategoryBlogPosts("local", allPostsData)}
      </Row>
    </Layout>
  )
}