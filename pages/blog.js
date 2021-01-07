import Head from 'next/head'
import React from 'react'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { Container } from 'react-bootstrap'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}



export default function Blog( props ) {

  const renderCategoryBlogPosts = (category, theme) =>{
    let count = 0;
    return props.allPostsData.map(postData =>{
      if(postData.category.includes(category) && count < 5 ){
        if(count === 0){
          count += 1;
          return (
            <div className="py-1" key={postData.id}>
              <figure>
                <Image src={`/images/Blogpost-thumb.jpg`} className="img img-fluid"/>
              </figure>
              <figcaption>
                <h5>
                  <Link href={`/posts/${postData.id}`}>
                    <a className={`${theme ? 'text-light' : 'text-dark'}`}>{postData.title}</a>
                  </Link>
                </h5>
              </figcaption>
            </div>
          )
        }else{
          count += 1;
          return (
            <Row key = {postData.id} >
              <Col xs={4}>
                  <figure>
                      <Image src={`/images/Blogpost-thumb.jpg`} className="img img-fluid"/>
                  </figure>
              </Col>
              <Col xs={8} className="pl-0">
                  <figcaption className="h6">
                      <Link href={`/posts/${postData.id}`}>
                          <a className={`${theme ? 'text-light' : 'text-dark'}`}>{postData.title}</a>
                      </Link>
                  </figcaption>
              </Col>
            </Row >
          )
        }
      }
    })
    
  }

 
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
                <h6 className="mb-0 font-weight-bold">Politics</h6>
              </header>
              {renderCategoryBlogPosts("politics", props.theme === "dark")}
            </Col>
            <Col xs={12} md={4}>
              <header className="card-header p-2">
                <h6 className="mb-0 font-weight-bold">Business</h6>
              </header>
              {renderCategoryBlogPosts("business", props.theme === "dark")}
            </Col>
            <Col xs={12} md={4}>
              <header className="card-header p-2">
                <h6 className="mb-0 font-weight-bold">Local News</h6>
              </header>
              {renderCategoryBlogPosts("health", props.theme === "dark")}
            </Col>
          </Row>
        </main>
      </Container>
      
    </Layout>
  )
}