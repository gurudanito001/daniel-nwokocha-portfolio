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
              <header className="mb-4 px-lg-5">
                <h1 className="font-weight-bold mb-1">{props.postData.title}</h1>
                <div className="font-weight-normal small">
                  <em><Date dateString={props.postData.date} /></em>
                </div>
              </header>
              
              <figure className="px-lg-5">
                <Image src={`/images/${props.postData.image}`} className="img img-fluid"/>
              </figure>
              <div style={{fontSize: "1.2rem"}} className="px-lg-5 mb-5">
                <div dangerouslySetInnerHTML={{ __html: props.postData.contentHtml }} />
              </div>
              <div className="px-lg-5 d-flex align-items-end">
                  <Image src={`/images/daniel-thumb.jpg`} roundedCircle className="img img-fluid border p-1"/>
                  <p className="ml-2">
                    <h5>Author</h5>
                    <h4>Daniel Nwokocha</h4>
                  </p>
                  
              </div>
            </Col>
          </Row>
        </Container>
      </Layout>
    )
}