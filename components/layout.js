import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'

//const name = 'Daniel'
export const siteTitle = 'Niger Delta News Blog'

export default function Layout({ children }) {
    return (
      <div>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Niger Delta News Blog"
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



          <Navbar collapseOnSelect expand="lg" className="border-bottom sticky-top mb-4" bg="dark" variant="dark">
            <Link href="/">
              <a><Navbar.Brand>News Blog</Navbar.Brand></a>
            </Link>
            
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Link href="/politics">
                  <a className={`${styles.navLink} text-light nav-link`}>Politics</a>
                </Link>
                <Link href="/business">
                  <a className={`${styles.navLink} text-light nav-link`}>Business</a>
                </Link>
                <Link href="/local">
                  <a className={`${styles.navLink} text-light nav-link`}>Local News</a>
                </Link>
                <Link href="/health">
                  <a className={`${styles.navLink} text-light nav-link`}>Health</a>
                </Link>
                <Link href="/sports">
                  <a className={`${styles.navLink} text-light nav-link`}>Sports</a>
                </Link>
                <Link href="/entertainment">
                  <a className={`${styles.navLink} text-light nav-link`}>Entertainment</a>
                </Link>
                <Link href="/style">
                  <a className={`${styles.navLink} text-light nav-link`}>Style</a>
                </Link>
              </Nav>
              <Nav>
                <button className="btn btn-sm btn-secondary mr-2">
                  <Link href="/newPost">
                    <a className="text-light small">New Post</a>
                  </Link>
                </button>
                <Form>
                  <Form.Check
                    className={`${styles.navLink} text-secondary mt-1`}
                    type="switch"
                    id="custom-switch"
                    label="Dark Mode"
                  />
                </Form>
              </Nav>
            </Navbar.Collapse>
          </Navbar>


        <main>
          <Container>
            {children}
          </Container>
        </main>



        
        <footer className="bg-dark text-light mb-0 py-2">
          <Nav className="justify-content-center">
            <Nav.Item>
              <Nav.Link href="/home" className="small text-light">Politics</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/home" className="small text-light">Business</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/home" className="small text-light">Local News</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/home" className="small text-light">Health</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/home" className="small text-light">Sports</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/home" className="small text-light">Entertainment</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/home" className="small text-light">Style</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link href="" className="small text-light">&copy;{new Date().getFullYear()} Niger Delta News Blog</Nav.Link>
            </Nav.Item>
          </Nav>
        </footer>
      </div>
    )
}