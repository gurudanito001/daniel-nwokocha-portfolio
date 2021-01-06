import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel'
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
            <div className="border-bottom py-1" key={postData.id}>
              <figure>
                <Image src={`/images/Blogpost-thumb.jpg`} className="img img-fluid"/>
              </figure>
              <figcaption>
                <h5>
                  <Link href={`/posts/${postData.id}`}>
                    <a className="text-dark">{postData.title}</a>
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

  const renderTopStoryBlogPosts = () =>{
    let count = 0;
    return props.allPostsData.map(postData =>{
      if(postData.category.includes("topStory") && count < 5 ){
        count += 1;
        return(
          <Carousel.Item key={postData.id}>
            <div className="jumbotron mb-1">
              <h1>This is jumbotron {count}</h1>
            </div>
            <h4>
              <Link href={`/posts/${postData.id}`}>
                <a className="text-dark">{postData.title}</a>
              </Link>
            </h4>
          </Carousel.Item>  
        )
      }
    })
  }

  const renderTopStoryListBlogPosts = () =>{
    let count = 0;
    return props.allPostsData.map(postData =>{
      if(postData.category.includes("topStory") && count < 5 ){
        count += 1;
        return(
          <Row className="border-bottom mx-1 py-1" key={postData.id}>
            <Col xs={4} className="p-0 text-center">
              <div className="jumbotron py-3 mb-0  px-0"> img {count}</div>
            </Col>
            <Col xs={8} className="px-2">
              <h6 style={{fontSize: '.9rem'}}>
                <Link href={`/posts/${postData.id}`}>
                  <a>{postData.title}</a>
                </Link>
              </h6>
            </Col>
          </Row>
        )
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
          {/* <Row className="mb-3">
            <Col xs={12} md={8}>
              <Carousel indicators={false}>
                { }
              </Carousel>
            </Col>
            <Col xs={12} md={4}>
              { }
            </Col>
          </Row> */}

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