import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import { Container, Row, Col } from 'react-bootstrap'

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export default function Post({ postData }) {
    return (
      <Layout>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <Container fluid>
          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <header className="mb-4">
                <h1 className="font-weight-bold mb-0">{postData.title}</h1>
                <div className="font-weight-light small">
                  <em><Date dateString={postData.date} /></em>
                </div>
              </header>
              
              <div className="jumbotron mb-3">
                <h1>This is the cover image </h1>
              </div>
              <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </Col>
          </Row>
          
        </Container>
      </Layout>
    )
}