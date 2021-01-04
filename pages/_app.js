import Layout from '../components/layout'
//const darkTheme = React.createContext(false);
import React, { useState, useEffect } from 'react'
import useDarkMode from 'use-dark-mode'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import Link from 'next/link'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'

export const siteTitle = 'Daniel Nwokocha'

//import { lightTheme, darkTheme } from '../theme'


/* export default function MyApp({ Component, pageProps }) {
    //const [darkTheme, setDarkTheme] = useState(false);
    return (
        <Layout>
            <Component  {...pageProps} dan="meeeeee"/>
        </Layout>
    )
}  */


/* const light = {
    bg: 'white',
    fontColor: 'purple'
}

const dark = {
    bg: 'black',
    fontColor: 'white'
}

const darkThemeStyle = { ...dark }
const lightThemeStyle = { ...light } */

const MyApp = ({ Component, pageProps }) => {
    const [isMounted, setIsMounted] = useState(false)
    const [darkTheme, toggleDarkTheme] = useState(false);
    /* const darkMode = useDarkMode(true)
    const theme = darkMode.value ? darkThemeStyle : lightThemeStyle */


    useEffect(() => {
        setIsMounted(true)
    }, [])

    /* const toggleDarkMode = ()=>{
        darkMode.value ? darkMode.disable() : darkMode.enable()
    } */

    return (
            /* <div>
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



                <Navbar collapseOnSelect expand="lg" className={`sticky-top bg-dark`} variant="dark">
                    <Link href="/">
                        <a><Navbar.Brand> &lt;Daniel Nwokocha/&gt; {darkMode.value}</Navbar.Brand></a>
                    </Link>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link href="/politics">
                                <a className={`text-light nav-link`} style={{ fontSize: "16px" }}>My Story</a>
                            </Link>
                            <Link href="/politics">
                                <a className={`text-light nav-link`} style={{ fontSize: "16px" }}>My Resume</a>
                            </Link>
                            <Link href="/business">
                                <a className={`text-light nav-link`} style={{ fontSize: "16px" }}>Showcase</a>
                            </Link>
                            <Link href="/blog">
                                <a className={`text-light nav-link`} style={{ fontSize: "16px" }}>Blog</a>
                            </Link>
                        </Nav>
                        <Nav>
                            <Form>
                                <Form.Check
                                    className={`text-light nav-link`}
                                    style={{ fontSize: "16px" }}
                                    type="switch"
                                    id="custom-switch"
                                    label="Dark Mode"
                                    onClick={()=>{toggleDarkMode()}}
                                />
                            </Form>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar> */
                    <Layout darkTheme={darkTheme} toggleDarkTheme={toggleDarkTheme}>
                        {isMounted && <Component {...pageProps} darkTheme={darkTheme} />}
                    </Layout>
                    

               /*  <footer className="bg-dark text-light mb-0 py-2">
                    <Nav className="justify-content-center">
                        <Nav.Item>
                            <Nav.Link href="/home" className="small text-light">My Story</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/home" className="small text-light">My Resume</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/home" className="small text-light">Blog</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/home" className="small text-light">Showcase</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="" className="small text-light">&copy;{new Date().getFullYear()} Daniel Nwokocha</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </footer>
            </div> */
    )
}

export default MyApp























//import React from 'react'
//import App from 'next/app'

/* class MyApp extends App {
    constructor(props){
        super(props);
        this.state = {
            darkTheme: false
        }
    }

    toggleDarkTheme = ()=>{
        this.setState({darkTheme: !this.state.darkTheme})
    }

  render() {
    const { Component, appProps } = this.props
    // Workaround for https://github.com/zeit/next.js/issues/8592
    const { err } = this.props
    const darkTheme = this.state.darkTheme
    const toggleDarkTheme = this.toggleDarkTheme
    const modifiedPageProps = { ...appProps, err,  darkTheme: darkTheme, toggleDarkTheme: toggleDarkTheme }
    return (
        <div id="comp-wrapp">
          <Component {...modifiedPageProps} />
        </div>
    )
  }
}

export default MyApp */