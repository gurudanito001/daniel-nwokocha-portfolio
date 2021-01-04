import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'

export const siteTitle = 'Daniel Nwokocha'

export default function Layout( props ) {
  //const [darkTheme, setDarkTheme] = useState(false);

    return (
      <div>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Daniel Nwokocha Portfolio website"
          />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" 
          integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossOrigin="anonymous"></link>
          <meta
            property="og:image"
            content={`https://og-image.now.sh/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>



        <Navbar collapseOnSelect expand="md" className={`sticky-top`} style={{ backgroundColor: `${props.darkTheme ? '#343a40' : '#f3f3f3'}`}} variant={`${props.darkTheme ? 'dark' : 'light'}`}>
          <Link href="/">
            <a><Navbar.Brand className={`${props.darkTheme ? 'text-light' : 'text-dark'} font-weight-bold`}> &lt;Daniel Nwokocha/&gt;</Navbar.Brand></a>
          </Link>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              {/* <Link href="/politics">
                <a className={`${props.darkTheme ? 'text-light' : 'text-dark'} nav-link font-weight-bolder`} style={{fontSize: "16px"}}>My Story</a>
              </Link> */}
              <Link href="/politics">
                <a className={`${props.darkTheme ? 'text-light' : 'text-dark'} nav-link font-weight-bolder`} style={{fontSize: "16px"}}>My Resume</a>
              </Link>
              <Link href="/business">
                <a className={`${props.darkTheme ? 'text-light' : 'text-dark'} nav-link font-weight-bolder`} style={{fontSize: "16px"}}>Showcase</a>
              </Link>
              <Link href="/blog">
                <a className={`${props.darkTheme ? 'text-light' : 'text-dark'} nav-link font-weight-bolder`} style={{fontSize: "16px"}}>Blog</a>
              </Link>
            </Nav>
            <Nav className="ml-4 pl-2 ml-md-0 pl-md-0">
              <Form>
                <Form.Check
                  className={`${props.darkTheme ? 'text-light' : 'text-dark'} nav-link font-weight-bolder`}
                  style={{fontSize: "16px"}}
                  type="switch"
                  id="custom-switch"
                  label="Dark Mode"
                  onClick={()=>{props.toggleDarkTheme(!props.darkTheme)}}
                />
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

            {props.children}

        <footer style={{ backgroundColor: `${props.darkTheme ? '#343a40' : '#f3f3f3'}` }} className={`${props.darkTheme ? 'text-light' : 'text-dark'} mb-0 py-2 border-top`}>
          <Nav className="justify-content-center">
            <Nav.Item>
              <Nav.Link href="/home" className={`small ${props.darkTheme ? 'text-light' : 'text-dark'}`}>My Story</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/home" className={`small ${props.darkTheme ? 'text-light' : 'text-dark'}`}>My Resume</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/home" className={`small ${props.darkTheme ? 'text-light' : 'text-dark'}`}>Blog</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/home" className={`small ${props.darkTheme ? 'text-light' : 'text-dark'}`}>Showcase</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="" className={`small ${props.darkTheme ? 'text-light' : 'text-dark'}`}>&copy;{new Date().getFullYear()} Daniel Nwokocha</Nav.Link>
            </Nav.Item>
          </Nav>
        </footer>
      </div>
    )
}