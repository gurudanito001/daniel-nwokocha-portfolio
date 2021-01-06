import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'

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

export default function Post(props) {
    return (
      <Layout theme={props.theme} toggleTheme={props.toggleTheme}>
        <Head>
          <title>{props.postData.title}</title>
        </Head>
        <Container fluid className={`${props.theme === "dark" ? 'bg-dark text-light' : 'bg-light text-dark'} py-4`}>
          <Row>
            <Col md={{ span: 8, offset: 2 }} >
              <header className="mb-4">
                <h1 className="font-weight-bold mb-0">{props.postData.title}</h1>
                <div className="font-weight-light small">
                  <em><Date dateString={props.postData.date} /></em>
                </div>
              </header>
              
              <figure>
                <Image src={`/images/Blogpost-thumb.jpg`} className="img img-fluid"/>
              </figure>
              <div style={{fontSize: "1.2rem"}}>
                <div dangerouslySetInnerHTML={{ __html: props.postData.contentHtml }} />
              </div>
              
            </Col>
          </Row>
        </Container>
      </Layout>
    )
}