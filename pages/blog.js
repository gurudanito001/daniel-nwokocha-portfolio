import Head from 'next/head'
import React from 'react'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import 'bootstrap/dist/css/bootstrap.min.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Container } from 'react-bootstrap'
import {renderCategoryBlogPosts} from '../lib/renderedComponents'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Blog( props ) {
  return (
    <Layout theme={props.theme} toggleTheme={props.toggleTheme}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Container fluid className={`${props.theme === "dark" ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
        <main className="container py-4">
          <Row className="mb-3">
            <Col xs={12} md={4}>
              <header className="card-header p-2">
                <h6 className="mb-0 font-weight-bold">Programming</h6>
              </header>
              {renderCategoryBlogPosts("programming", props)}
            </Col>
            <Col xs={12} md={4}>
              <header className="card-header p-2">
                <h6 className="mb-0 font-weight-bold">Gadgets / Devices</h6>
              </header>
              {renderCategoryBlogPosts("gadgets", props)}
            </Col>
            <Col xs={12} md={4}>
              <header className="card-header p-2">
                <h6 className="mb-0 font-weight-bold">General Tech</h6>
              </header>
              {renderCategoryBlogPosts("general-tech", props)}
            </Col>
          </Row>
        </main>
      </Container>
      
    </Layout>
  )
}