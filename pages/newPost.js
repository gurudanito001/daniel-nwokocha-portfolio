import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
//import 'bootstrap/dist/css/bootstrap.min.css'
import { createPost } from '../lib/createPost';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export async function getStaticProps() {
    console.log("weeeee from newPost.js")
    createPost('newFile4.md', 
    `
    ---
    title: 'This is a Style Story'
    date: '2020-12-25'
    category: ['style', 'topStory']
    ---
  
  Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.
  
  - **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
  - **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.
  
  Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.
    `
    )

    return(
        {
            props: {}
        }
    )
}

export default function NewPost( ) {
  const [title, setTitle] = useState('');
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <header>
        <h4>Create New Post</h4>
      </header>

          <Form>
            <Form.Group controlId="title">
                <Form.Label className="h6">Title</Form.Label>
                <Form.Control 
                type="text" 
                onChange={(e)=>{
                    setTitle(e.target.value);
                }}
                value={title}
                placeholder="Enter Title" />
            </Form.Group>
            <Form.Label className="h6">Category</Form.Label>
            <Row>
                <Col></Col>
            </Row>
            <Form.Group controlId="topStory">
                <Form.Check label="Top Story" />
            </Form.Group>
            <Form.Group controlId="politics">
                <Form.Check label="Politics" />
            </Form.Group>
            <Form.Group controlId="business">
                <Form.Check label="Business" />
            </Form.Group>
            <Form.Group controlId="local">
                <Form.Check label="Local News" />
            </Form.Group>
            <Form.Group controlId="health">
                <Form.Check label="Health" />
            </Form.Group>
            <Form.Group controlId="sports">
                <Form.Check label="Sports" />
            </Form.Group>
            <Form.Group controlId="entertainment">
                <Form.Check label="Entertainment" />
            </Form.Group>
            <Form.Group controlId="style">
                <Form.Check label="Style" />
            </Form.Group>
          </Form>
    </Layout>
  )
}