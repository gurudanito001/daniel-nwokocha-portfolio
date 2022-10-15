import Head from 'next/head';
import React, { useState } from 'react';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import { renderBlogPosts, carouselItems } from '../lib/renderedComponents';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/utils.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Link from 'next/link';
import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { ArrowForward } from '@material-ui/icons';
import ProjectModal from '../components/projectModal';
import { TouchApp } from '@material-ui/icons';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}


export default function Home(props) {

    const [accordionOneOpen, setAccordionOneOpen] = useState(false);
    const [accordionTwoOpen, setAccordionTwoOpen] = useState(false);

    const images = {
        smslive247: ["smslive-desktop-1.png", "smslive-desktop-2.png", "smslive-mobile-1.png", "smslive-mobile-2.png"],
        stocktaker: ["stocktaker-desktop-1.png", "stocktaker-desktop-2.png", "stocktaker-desktop-3.png", "stocktaker-desktop-4.png", "stocktaker-desktop-5.png", "stocktaker-desktop-6.png", "stocktaker-mobile-1.png", "stocktaker-mobile-2.png", "stocktaker-mobile-3.png", "stocktaker-mobile-4.png"]
    }

    const [openProjectModal, setOpenProjectModal] = useState(false)
    const [projectIndex, setProjectIndex] = useState(0);

    const handleClickProjectCard = (index) => {
        setOpenProjectModal(true)
        setProjectIndex(index)
    }

    return (
        <>
            <Layout theme={props.theme} toggleTheme={props.toggleTheme}>
                <Head>
                    <title>{siteTitle}</title>
                </Head>
                <div className={`pb-5 ${props.theme === "dark" ? 'text-light' : 'text-dark'}`} style={{ backgroundColor: `${props.theme === "dark" ? '#343a40' : '#f7f7f7'}` }}>
                    {/* Homepage Banner */}
                    <Container fluid className={`${props.theme === "dark" ? styles.bannerImageDark : styles.bannerImageLight}`} >
                        <Row className={`h-100`}>
                            <Col lg={{ span: 7 }} className={`d-flex flex-column h-100 px-md-5`}>
                                <div className='my-auto text-white'>
                                    <h3 className={`${styles.heroHeading}`}>
                                        I’m Daniel Nwokocha <br /> <span style={{ color: "#273A69" }}>Full Stack</span> Developer
                                    </h3>
                                    <p className={`mt-4 pr-md-5 mr-md-5 ${styles.heroLeadText}`}>
                                        Javascript | TypeScript | NodeJs | SQL | Python ...
                                    </p>
                                    <p style={{fontSize: "18px"}}>
                                        I also write blogs and poems in my free time.
                                        I love to automate the way things work and Yes, I love AI and Machine learning.
                                    </p>
                                    <div className='mt-4'>
                                        <button className={`btn ${styles.heroLeadBtn}`}>Hire Me <ArrowForward style={{ height: "16px" }} /></button>
                                    </div>
                                </div>


                            </Col>
                            <Col lg={{ span: 5 }} className={`d-none d-lg-flex h-100 ${props.theme === "dark" ? 'text-light' : 'text-dark'}`}>
                                <Image src="/images/big-dan.png" className="img img-fluid" />
                            </Col>
                        </Row>
                    </Container>



                    {/*SHOWCASE */}
                    <Container style={{ marginTop: "100px" }}>
                        {/*SHOWCASE INTRO SECTION */}
                        <Row className="">
                            <Col md={11} lg={10}>
                                <header>
                                    <h3>Showcase</h3>
                                </header>
                                <p style={{fontSize: "18px"}}>
                                    Below are some of my most impressive projects.
                                </p>
                                <p className='font-weight-bold text-dark'>
                                    <span style={{color: "orangered"}} >Click<TouchApp/></span> on a Card to view project details
                                </p>
                            </Col>
                        </Row>
                        <Row className="">
                            <Col md={6} lg={4} className="p-4">
                                <div className={`${styles.projectCard} border w-100`} style={{ background: "#f4a361c9" }} onClick={() => handleClickProjectCard(0)}>
                                    <Image src="/images/shareBantaLogo.png" className="img" height="50px" />
                                </div>
                            </Col>
                            <Col md={6} lg={4} className="p-4">
                                <div className={`${styles.projectCard} border text-white w-100`} style={{ background: "#14bdac" }} onClick={() => handleClickProjectCard(1)}>
                                    <h4>XANDO</h4>
                                </div>
                            </Col>
                            <Col md={6} lg={4} className="p-4">
                                <div className={`${styles.projectCard} border w-100`} style={{ background: "#d3d3d3" }} onClick={() => handleClickProjectCard(2)}>
                                    <h4><span style={{ color: "#dc3545" }}>SMS</span><span style={{ color: "#ff4500" }}>LIVE</span><span style={{ color: "#007bff" }}>247</span></h4>
                                </div>
                            </Col>
                            <Col md={6} lg={4} className="p-4">
                                <div className={`${styles.projectCard} border text-white w-100`} style={{ background: "#3a3f51" }} onClick={() => handleClickProjectCard(3)}>
                                    <h5>STOCKTAKER</h5>
                                </div>
                            </Col>
                            <Col md={6} lg={4} className="p-4">
                                <div className={`${styles.projectCard} border text-white bg-success w-100`} onClick={() => handleClickProjectCard(4)}>
                                    <h5>DELEGATES</h5>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                    <Container style={{ marginTop: "100px" }}>
                        <Row>
                            <Col xs={12}>
                                <header>
                                    <h3 className={`${props.theme === "dark" ? 'text-light' : 'text-dark'} mb-3`}>Blog</h3>
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
                </div>

                <ProjectModal
                    open={openProjectModal}
                    onClose={() => setOpenProjectModal(false)}
                    projectIndex={projectIndex}
                />
            </Layout>
        </>
    )
}