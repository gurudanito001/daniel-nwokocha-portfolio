import Head from 'next/head'
import React, { useState } from 'react';
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/utils.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Carousel from 'react-bootstrap/Carousel'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

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

export default function Showcase( props ) {
    const [accordionOneOpen, setAccordionOneOpen] = useState(false);
    const [accordionTwoOpen, setAccordionTwoOpen] = useState(false);
    const [accordionThreeOpen, setAccordionThreeOpen] = useState(false);
    const [accordionFourOpen, setAccordionFourOpen] = useState(false);

    const images = {
        smslive247: ["smslive-desktop-1.png", "smslive-desktop-2.png","smslive-mobile-1.png", "smslive-mobile-2.png"],
        stocktaker: ["stocktaker-desktop-1.png","stocktaker-desktop-2.png","stocktaker-desktop-3.png","stocktaker-desktop-4.png","stocktaker-desktop-5.png","stocktaker-desktop-6.png","stocktaker-mobile-1.png","stocktaker-mobile-2.png","stocktaker-mobile-3.png","stocktaker-mobile-4.png"],
        reviews: ["reviews-desktop-1.png","reviews-desktop-2.png","reviews-desktop-3.png","reviews-desktop-4.png","reviews-desktop-5.png","reviews-mobile-1.png","reviews-mobile-2.png","reviews-mobile-3.png","reviews-mobile-4.png","reviews-mobile-5.png"],
        delegates: ["delegates-desktop-1.png","delegates-desktop-2.png","delegates-desktop-3.png","delegates-desktop-4.png","delegates-mobile-1.png","delegates-mobile-2.png","delegates-mobile-3.png","delegates-mobile-4.png",]
    }

  return (
    <>
        <Layout theme={props.theme} toggleTheme={props.toggleTheme}>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <main className={`py-5 ${props.theme === "dark" ? 'text-light' : 'text-dark'}`} style={{ backgroundColor: `${props.theme === "dark" ? '#343a40' : '#f7f7f7'}` }}>
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
                    <Row className="mb-4" id="smslive247">
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
                    <Row className="mb-4" id="stocktaker">
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

                    {/* REVIEWS SHOWCASE SECTION */}
                    <Row className="mb-4" id="reviews">
                        <Col xs={12}>
                            <h5>
                                <a href="https://gurudanito001.github.io/reviews-frontend/" style={{ color: "rgb(189, 189, 189)" }}>REVIEWS </a>
                            </h5>
                        </Col>
                        <Col md={9}>
                            <header className="d-block text-center">Desktop View</header>
                            <Carousel indicators={false}>
                                {carouselItems(images, 'reviews', 'desktop')}
                            </Carousel>
                        </Col>

                        <Col md={3}>
                            <header className="d-block text-center">Mobile View</header>
                            <Carousel indicators={false}>
                                {carouselItems(images, 'reviews', 'mobile')}
                            </Carousel>
                        </Col>
                        <Col xs={12}>
                            <Accordion className="border-0">
                                <Card className="border-0 bg-transparent">
                                    <Accordion.Toggle as={Card.Header} eventKey="0" className="py-0 px-2" onClick={() => { setAccordionThreeOpen(!accordionThreeOpen) }}>
                                        <a className={`text-light btn btn-link ${props.theme === "dark" ? 'text-light' : 'text-dark'}`}>
                                            Project Details <strong className="h6">{accordionThreeOpen ? "-" : "+"}</strong>
                                        </a>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body className={`${props.theme === "dark" ? `${styles.bgDark2} text-white` : 'bg-white text-dark'}`}>
                                            <p >
                                                I built a simple review system where users can write a review and the review will be validated by an admin before the review can show in list of reviews for an organization
                                                This system was built as a solution to an interview test.
                                            </p>
                                            <h6>Contributions</h6>
                                            <p>
                                                Frontend and Backend developed by Me (Daniel Nwokocha)
                                            </p>
                                            <h6>Skills</h6>
                                            <p>MERN Stack (Mongodb, Express, Reactjs and Nodejs)</p>
                                            <h6>Project Duration</h6>
                                            <p className="small"><em>November 2020</em></p>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </Col>
                    </Row>

                    {/* DELEGATES SHOWCASE SECTION */}
                    <Row className="mb-4" id="delegates">
                        <Col xs={12}>
                            <h5>
                                <a href="https://gurudanito001.github.io/fns-delegates-frontend/" style={{ color: "rgb(189, 189, 189)" }}>DELEGATES </a>
                            </h5>
                        </Col>
                        <Col md={9}>
                            <header className="d-block text-center">Desktop View</header>
                            <Carousel indicators={false}>
                                {carouselItems(images, 'delegates', 'desktop')}
                            </Carousel>
                        </Col>

                        <Col md={3}>
                            <header className="d-block text-center">Mobile View</header>
                            <Carousel indicators={false}>
                                {carouselItems(images, 'delegates', 'mobile')}
                            </Carousel>
                        </Col>
                        <Col xs={12}>
                            <Accordion className="border-0">
                                <Card className="border-0 bg-transparent">
                                    <Accordion.Toggle as={Card.Header} eventKey="0" className="py-0 px-2" onClick={() => { setAccordionFourOpen(!accordionFourOpen) }}>
                                        <a className={`text-light btn btn-link ${props.theme === "dark" ? 'text-light' : 'text-dark'}`}>
                                            Project Details <strong className="h6">{accordionFourOpen ? "-" : "+"}</strong>
                                        </a>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body className={`${props.theme === "dark" ? `${styles.bgDark2} text-white` : 'bg-white text-dark'}`}>
                                            <div >
                                                This application does the following: 
                                                <ul>
                                                    <li>search guest list</li>
                                                    <li>view VIP guests</li>
                                                    <li>Admit guest and also </li>
                                                    <li>Remove them (unAdmit)</li>
                                                </ul>
                                            </div>
                                            <h6>Contributions</h6>
                                            <p>
                                                This application was built by myself (Daniel Nwokocha) <br/>
                                                This application was created to verify invited guests in an event held in Abuja. It was a last minute solution since physical invitations could not be sent due to the Covid 19 pandemic
                                            </p>
                                            <h6>Skills</h6>
                                            <p>MERN Stack (Mongodb, Express, Reactjs and Nodejs)</p>
                                            <h6>Project Duration</h6>
                                            <p className="small"><em>December 2020</em></p>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </Col>
                    </Row>
                </Container>
            </main>
        </Layout>
    </>
  )
}