import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import styles from '../styles/utils.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Link from 'next/link'
import Carousel from 'react-bootstrap/Carousel'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export async function getStaticProps(props) {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

const carouselItems = (images, projectName, screenSize)=>{
    return images[projectName].map(imageUrl =>{
        if(imageUrl.includes(screenSize)){
            return(
                <Carousel.Item key={imageUrl}>
                    <Image src={`/images/${imageUrl}`} className="img img-fluid" style={{ maxHeight: "500px" }} />
                </Carousel.Item>
            )
        }
    })
}

const renderBlogPosts = (allPostsData, startNum, theme) => {
    let count = startNum;
    return allPostsData.map(postData =>{
        count += 1
        if(count - startNum <= 5 ){
            return(
                <Row key={allPostsData[count-1].id}>
                    <Col xs={3}>
                        <figure>
                            <Image src={`/images/Blogpost-thumb.jpg`} className="img img-fluid"/>
                        </figure>
                    </Col>
                    <Col xs={9}>
                        <figcaption className="h6">
                            <Link href={`/posts/${allPostsData[count-1].id}`}>
                                <a className={`${theme ? 'text-light' : 'text-dark'}`}>{allPostsData[count-1].title}</a>
                            </Link>
                        </figcaption>
                    </Col>
                </Row>
            )
        }
    })
}


export default function Home( props ) {
    
    const [accordionOneOpen, setAccordionOneOpen] = useState(false);
    const [accordionTwoOpen, setAccordionTwoOpen] = useState(false);
    
    const images = {
        smslive247: ["smslive-desktop-1.png", "smslive-desktop-2.png","smslive-mobile-1.png", "smslive-mobile-2.png"],
        stocktaker: ["stocktaker-desktop-1.png","stocktaker-desktop-2.png","stocktaker-desktop-3.png","stocktaker-desktop-4.png","stocktaker-desktop-5.png","stocktaker-desktop-6.png","stocktaker-mobile-1.png","stocktaker-mobile-2.png","stocktaker-mobile-3.png","stocktaker-mobile-4.png"]
    }

  return (
    <>
        <Layout theme={props.theme} toggleTheme={props.toggleTheme}>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <main className={`pb-5 ${props.theme === "dark" ? 'text-light' : 'text-dark'}`} style={{ backgroundColor: `${props.theme === "dark" ? '#343a40' : '#f7f7f7'}` }}>
                {/* Homepage Banner */}
                <Container fluid className={`${props.theme === "dark" ? styles.bannerImageDark : styles.bannerImageLight} mb-5`}>
                    <Row className="h-100">
                        <Col sm={{ span: 8, offset: 4 }} lg={{ span: 6, offset: 5 }} className={`d-none d-sm-flex align-items-center ${props.theme === "dark" ? 'text-light' : 'text-dark'}`}>
                            <Image src="/images/daniel-slim.png" className="ml-auto img img-fluid"  style={{ maxHeight: "500px" }} />
                            <p className={styles.bannerText} style={{marginLeft: "-3px"}}>
                                <span style={{ fontSize: "50px" }}>Hi</span> <br />
                                I<span style={{ fontSize: "45px" }}>'m Daniel</span><br />
                                I<span style={{ fontSize: "40px" }}>'m a Writer</span><br />
                                I <span style={{ fontSize: "35px" }}>Write Code</span><br />
                                I<span style={{ fontSize: "30px" }}>'m a JS Developer</span><br />
                                N<span style={{ fontSize: "28px" }}>odeJs, ReactJs, NextJs</span><br />
                                I <span style={{ fontSize: "25px" }}>Write Blogs</span><br />
                                I <span style={{ fontSize: "20px" }}>Write Poems</span><br />
                            </p>
                        </Col>
                        <Col xs={12} sm={{ span: 9, offset: 3 }} className={`d-flex d-sm-none align-items-center ${props.theme === "dark" ? 'text-light' : 'text-dark'}`}>
                            <Image src="/images/daniel-slim.png" className="ml-auto" style={{ maxWidth: "100px" }} />
                            <p className={styles.bannerText} style={{ fontSize: "40px" }}>
                                <span style={{ fontSize: "40px" }}>Hi</span> <br />
                                I<span style={{ fontSize: "35px" }}>'m Daniel</span><br />
                                I<span style={{ fontSize: "30px" }}>'m a Writer</span><br />
                                I <span style={{ fontSize: "25px" }}>Write Code</span><br />
                                I<span style={{ fontSize: "20px" }}>'m a JS Developer</span><br />
                                N<span style={{ fontSize: "18px" }}>odeJs, ReactJs, NextJs</span><br />
                                I <span style={{ fontSize: "16px" }}>Write Blogs</span><br />
                                I <span style={{ fontSize: "15px" }}>Write Poems</span><br />
                            </p>
                        </Col>
                    </Row>
                </Container>

                {/*MY STORY */}
                <Container className="mb-5">
                    <Row>
                        <Col xs={12}>
                            <header>
                                <h3>My Story</h3>
                            </header>
                        </Col>
                        <Col md={12} className={`pt-2 ${props.theme === "dark" ? 'bg-dark' : 'bg-light'}`}>
                            <article className="row">
                                <p className="col-md-11 col-lg-10">
                                    This is my Story. I'm about to tell how I got into programming and my journey ever since.
                            </p>
                                <h6 className="col-md-11 col-lg-10">First contact with Programming</h6>
                                <p className="col-md-11 col-lg-10">
                                    I was in secondary school at that time about to write my final year exams. It was a time where everyone
                                    talked about their big dreams, their career choices (doctors, lawyers, pilots), everyone seemed to know
                                how they would be spending the next five to six years, everyone except me. <br />
                                    I didn't exactly know of any career that interested me except I wanted to be a poet. But I didn't tell anyone.
                                Nobody wanted to hear that. I loved education, I loved to learn, but I didn't like the school system in Nigeria. It
                                was turture for me so I didn't want to go to the university
                            </p>
                                <p className="col-md-11 col-lg-10">
                                    <a>Read More</a>
                                </p>
                            </article>
                        </Col>
                    </Row>
                </Container>

                {/*SHOWCASE */}
                <Container className="mb-5">
                    {/*SHOWCASE INTRO SECTION */}
                    <Row className="">
                        <Col md={11} lg={10}>
                            <header>
                                <h3>Showcase</h3>
                            </header>
                            <p className="lead">
                                The following is a list of some of the public projects I've built or made major contributions to during the course of my career.
                        </p>
                        </Col>
                    </Row>

                    {/* SMSLIVE247 SHOWCASE SECTION */}
                    <Row className="mb-4">
                        <Col xs={12}>
                            <h5 style={{ color: "rgb(189, 189, 189)" }}>SMSLIVE247 (<a href="http://new.smslive247.com" className="small">new.smslive247.com</a>)</h5>
                        </Col>
                        <Col md={9}>
                            <header className="d-block text-center">Desktop View</header>
                            <Carousel indicators={false}>
                                {carouselItems(images, 'smslive247', 'desktop')}
                            </Carousel>
                        </Col>

                        <Col md={3}>
                            <header className="d-block text-center">Mobile View</header>
                            <Carousel indicators={false}>
                                {carouselItems(images, 'smslive247', 'mobile')}
                            </Carousel>
                        </Col>
                        <Col xs={12}>
                            <Accordion className="border-0">
                                <Card className="border-0 bg-transparent">
                                    <Accordion.Toggle as={Card.Header} eventKey="0" className="py-0 px-2" onClick={() => { setAccordionOneOpen(!accordionOneOpen) }}>
                                        <a className={`btn btn-link bg-transparent ${props.theme === "dark" ? 'text-light' : 'text-dark'}`}>
                                            Project Details <strong className="h6">{accordionOneOpen ? "-" : "+"}</strong>
                                        </a>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body className={`${props.theme === "dark" ? `${styles.bgDark2} text-white` : 'bg-white text-dark'}`}>
                                            <p ><a href="http://new.smslive247.com">new.smslive247.com</a> is a reconstruction of <a href="http://smslive247.com">smslive247.com</a>. It is a bulk SMS wholesale and retail
                                        platform.
                                        </p>
                                            <h6>Contributions</h6>
                                            <p>
                                                I was responsible for developing a more user-friendly Interface, making the platform responsive on
                                        all devices.<br />
                                        It is a dotnet application and the backend code was restructured by Nathan Omonmowo a colleague of mine
                                        </p>
                                            <h6>Skills</h6>
                                            <p>HTML, CSS, Bootstrap and Javascript.</p>
                                            <h6>Project Duration</h6>
                                            <p><em>Feb 2019 - Dec 2019</em></p>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </Col>
                    </Row>

                    {/* STOCKTAKER SHOWCASE SECTION */}
                    <Row className="mb-2">
                        <Col xs={12}>
                            <h5>
                                <a href="https://gurudanito001.github.io/Stocktaker-Frontend/" style={{ color: "rgb(189, 189, 189)" }}>STOCKTAKER </a>
                            </h5>
                        </Col>
                        <Col md={9}>
                            <header className="d-block text-center">Desktop View</header>
                            <Carousel indicators={false}>
                                {carouselItems(images, 'stocktaker', 'desktop')}
                            </Carousel>
                        </Col>

                        <Col md={3}>
                            <header className="d-block text-center">Mobile View</header>
                            <Carousel indicators={false}>
                                {carouselItems(images, 'stocktaker', 'mobile')}
                            </Carousel>
                        </Col>
                        <Col xs={12}>
                            <Accordion className="border-0">
                                <Card className="border-0 bg-transparent">
                                    <Accordion.Toggle as={Card.Header} eventKey="0" className="py-0 px-2" onClick={() => { setAccordionTwoOpen(!accordionTwoOpen) }}>
                                        <a className={`text-light btn btn-link ${props.theme === "dark" ? 'text-light' : 'text-dark'}`}>
                                            Project Details <strong className="h6">{accordionTwoOpen ? "-" : "+"}</strong>
                                        </a>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body className={`${props.theme === "dark" ? `${styles.bgDark2} text-white` : 'bg-white text-dark'}`}>
                                            <p >Stocktaker is an inventory and vehicle management software.<br />
                                    It is a personal project. It was originally developed for a shipping company but it is currently undergoing major adaptations to suit a wide variety of businesses <br />
                                    Frontend is currently hosted on gitub pages while backend is hosted on heroku
                                    </p>
                                            <h6>Contributions</h6>
                                            <p>
                                                Stocktaker's backend and API was initially built with C# by Nathan Omonmowo before a rewrite was done by myself.
                                        I rewrote the API with Nodejs, Express and mongodb as the database cloud service provider<br />
                                        Frontend was built with React by me.
                                    </p>
                                            <h6>Skills</h6>
                                            <p>MERN Stack (Mongodb, Express, Reactjs and Nodejs)</p>
                                            <h6>Project Duration</h6>
                                            <p className="small"><em>Feb 2020 - Present (Still Undergoing Incremental construction)</em></p>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </Col>
                    </Row>

                    {/* VIEW MORE PROJECTS SECTION */}
                    <Row>
                        <Col>
                            <Button variant="link outline-secondary" size="md">
                                <Link href="/showcase">
                                    <a>View More Projects &gt;</a>
                                </Link>
                            </Button>
                        </Col>
                    </Row>
                </Container>

                <Container className="mb-5">
                    <Row>
                        <Col xs={12}>
                            <header>
                                <h3 className={`${props.theme === "dark" ? 'text-light' : 'text-dark'}`}>Blog</h3>
                            </header>
                        </Col>
                        <Col sm={6}>
                            {renderBlogPosts(props.allPostsData, 0, props.theme === "dark")}
                        </Col>
                        <Col sm={6}>
                            {renderBlogPosts(props.allPostsData, 5, props.theme === "dark")}
                        </Col>
                    </Row>
                </Container>
            </main>
        </Layout>
    </>
  )
}