import Head from 'next/head'
import React, { useState } from 'react';
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/utils.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Link from 'next/link'

export default function Showcase( props ) {
    const [accordionOneOpen, setAccordionOneOpen] = useState(false);
    const [accordionTwoOpen, setAccordionTwoOpen] = useState(false);
    const [accordionThreeOpen, setAccordionThreeOpen] = useState(false);
    const [accordionFourOpen, setAccordionFourOpen] = useState(false);

    

  return (
    <>
        <Layout theme={props.theme} toggleTheme={props.toggleTheme}>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <Container fluid className={`${props.theme === 'dark' ? 'bg-dark' : 'bg-light'}`}>
                <Row>
                    <Col md={{ span: 10, offset: 1}} lg={{ span: 8, offset: 2}} style={{boxShadow: '-2px 2px 12px -4px rgba(0,0,0,0.75)'}}
                    className={`card py-sm-5 my-sm-4 ${props.theme === "dark" ? 'bg-dark text-light' : 'bg-white text-dark'}`}>
                        <header className="row px-lg-5">
                            <figure className="col-4 col-md-2 order-1 d-flex flex-column justify-content-top px-1 px-sm-3">
                                <img src="/images/profile.jpg" className="rounded-circle img img-fluid" style={{maxWidth: "110px", maxHeight: "110px"}}/>
                            </figure>
                            <div className="col-md-7 order-3 order-md-2 d-none d-md-flex flex-column justify-content-top px-1 px-sm-3 text-center text-md-left">
                                <h2>DANIEL NWOKOCHA</h2>
                                <h5>FULL STACK JAVASCRIPT DEVELOPER</h5>
                                <h6>Mongodb, Nodejs, Reactjs, NextJs</h6>
                            </div>

                            <div className="col-md-7 order-3 order-md-2 d-flex d-md-none flex-column justify-content-top px-1 px-sm-3">
                                <h4>DANIEL NWOKOCHA</h4>
                                <h6>FULL STACK JAVASCRIPT DEVELOPER</h6>
                                <strong className="d-block">Mongodb, Nodejs, Reactjs, NextJs</strong>
                            </div>


                            <div className="col-8 col-md-3 order-2 order-md-3 d-flex flex-column justify-content-top px-1 px-md-0">
                                <ul className="list-unstyled font-weight-bolder" style={{ fontSize: ".9rem"}}>
                                    <li className="d-flex align-items-center mb-1">
                                        <Image src={`/images/github${props.theme === "dark" ? '-light': ''}.svg`} width="15px" className="mr-1"/>
                                        <a href="https://github.com/gurudanito001" className={`${props.theme === "dark" ? 'text-light': 'text-dark'}`}>gurudanito001</a>
                                    </li>
                                    <li className="d-flex align-items-center mb-1">
                                        <Image src={`/images/twitter${props.theme === "dark" ? '-light': ''}.svg`} width="15px" className="mr-1"/>
                                        <a href="https://twitter.com/danielnwokocha9" className={`${props.theme === "dark" ? 'text-light': 'text-dark'}`}>DanielNwokocha9</a>
                                    </li>
                                    <li className="d-flex align-items-center mb-1">
                                        <Image src={`/images/gmail${props.theme === "dark" ? '-light': ''}.svg`} width="15px" className="mr-1"/>
                                        <span className={`${props.theme === "dark" ? 'text-light': 'text-dark'}`}>gurudanito001@gmail.com</span>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <Image src={`/images/phone-call${props.theme === "dark" ? '-light': ''}.svg`} width="15px" className="mr-1"/>
                                        <span className={`${props.theme === "dark" ? 'text-light': 'text-dark'}`}>+2348140715723</span>
                                    </li>
                                </ul>
                            </div>
                        </header>


                        <div className="row px-md-5 mt-4">
                            <main className={`col-md-9 py-3 ${props.theme === "dark" ? 'text-light' : 'text-dark'}`}>
                                <h5 className="mb-4 text-primary">Work History</h5>

                                <section className="mb-3">
                                    <h4 className="mb-0">Full Stack Javascript Developer</h4>
                                    <h6 className="d-inline-block">Agro Nigeria Ltd</h6> <span className="h4 px-2">.</span>
                                    <h6 className="d-inline-block font-weight-normal">Allen Ikeja, Lagos</h6>
                                    <small className={`d-block ${props.theme === "dark" ? 'text-light' : 'text-muted'} `}><em>November 2020 - Present</em></small>
                                </section>

                                <section className="mb-3">
                                    <h4 className="mb-0">Full Stack Javascript Developer</h4>
                                    <h6 className="d-inline-block">SMSLIVE247 Ltd</h6> <span className="h4 px-2">.</span>
                                    <h6 className="d-inline-block font-weight-normal">Alausa Ikeja, Lagos</h6>
                                    <small className={`d-block ${props.theme === "dark" ? 'text-light' : 'text-muted'} `}><em>November 2018 - November 2020</em></small>
                                </section>

                                <section className="mb-5">
                                    <h4 className="mb-0">Frontend Developer</h4>
                                    <h6 className="d-inline-block">Commodots Ltd</h6> <span className="h4 px-2">.</span>
                                    <h6 className="d-inline-block font-weight-normal">Opebi Ikeja, Lagos</h6>
                                    <small className={`d-block ${props.theme === "dark" ? 'text-light' : 'text-muted'} `}> <em>December 2017 - August 2018</em></small>
                                </section>

                                <h5 className="mb-4 text-primary">Projects</h5>

                                <section className="mb-3">
                                    <h4>SMSLIVE247 <a className="small" href="http://new.smslive247.com/">new.smslive247.com</a></h4>
                                    <h6 className="d-inline-block">Frontend Developer</h6>
                                    <p className="mb-2" style={{fontSize: ".9rem"}}>
                                        I improved the user experience by building a more user friendly interface using more colorful and professional designs. See difference between <a>smslive247.com</a> and <a>new.smslive247.com</a> <br/>
                                        <small className="font-weight-bolder">HTML, CSS, Bootstrap, JS, Jquery</small>
                                        <span className="h4 px-2">.</span> 
                                        <small className={`${props.theme === "dark" ? 'text-light' : 'text-muted'} `}> <em>January 2019 - December 2019</em></small>
                                    </p>
                                    <button className="btn btn-link">
                                        <Link href="/showcase#smslive247">
                                            <a>View in Showcase</a>
                                        </Link>
                                    </button>
                                </section>

                                <section className="mb-3">
                                    <h4>STOCKTAKER</h4>
                                    <h6 className="d-inline-block">Full Stack Developer</h6>
                                    <p className="mb-2" style={{fontSize: ".9rem"}}>
                                        I created this application to solve inventory and stock management problems for shipping companies.It is a personal project that I hope to sell someday <br/>
                                        <small className="font-weight-bolder">Mongodb, NodeJs, Reactjs, ExpressJs</small>
                                        <span className="h4 px-2">.</span> 
                                        <small className={`${props.theme === "dark" ? 'text-light' : 'text-muted'} `}> <em>March 2020 - Present</em></small>
                                    </p>
                                    <button className="btn btn-link">
                                        <Link href="/showcase#stocktaker">
                                            <a>View in Showcase</a>
                                        </Link>
                                    </button>
                                </section>

                                <section className="mb-5">
                                    <h4>Delegates</h4>
                                    <h6 className="d-inline-block">Full Stack Developer</h6>
                                    <p className="mb-2" style={{fontSize: ".9rem"}}>
                                        This application was created to verify invited guests in an event held in Abuja. It was a last minute solution since physical invitations could not be sent due to the Covid 19 pandemic<br/>
                                        <small className="font-weight-bolder">Mongodb, NodeJs, Reactjs, ExpressJs</small>
                                        <span className="h4 px-2">.</span> 
                                        <small className={`${props.theme === "dark" ? 'text-light' : 'text-muted'} `}> <em>November 2020 </em></small>
                                    </p>
                                    <button className="btn btn-link">
                                        <Link href="/showcase#delegates">
                                            <a>View in Showcase</a>
                                        </Link>
                                    </button>
                                </section>

                                <h5 className="mb-4 text-primary">Education</h5>
                                <section className="mb-3">
                                    <h4>UGRL Web Development Institute</h4>
                                    <h6>Certificate of Web Development</h6>
                                        <small className={`${props.theme === "dark" ? 'text-light' : 'text-muted'} `}> <em>January 2014 - December 2014</em></small>
                                </section>

                                <section className="mb-3">
                                    <h4>Havard University / Edx</h4>
                                    <h6>Havard / Edx CS50 Computer Science Course</h6>
                                        <small className={`${props.theme === "dark" ? 'text-light' : 'text-muted'} `}> <em> December 2020 - Present</em></small>
                                </section>

                                
                            </main>   

                            <aside className="col-md-3 py-3">
                                <h5 className="text-primary">Skills</h5>
                                <ul className="list-unstyled">
                                    <li className="font-weight-bolder">
                                        HTML<br/>
                                        <ProgressBar variant="primary" now={80} />
                                    </li>
                                    <li className="font-weight-bolder">
                                        CSS<br/>
                                        <ProgressBar variant="primary" now={80} />
                                    </li>
                                    <li className="font-weight-bolder">
                                        Bootstrap<br/>
                                        <ProgressBar variant="primary" now={80} />
                                    </li>
                                    <li className="font-weight-bolder">
                                        Javascript<br/>
                                        <ProgressBar variant="primary" now={60} />
                                    </li>
                                    <li className="font-weight-bolder">
                                        ReactJs<br/>
                                        <ProgressBar variant="primary" now={60} />
                                    </li>
                                    <li className="font-weight-bolder">
                                        Typescript<br/>
                                        <ProgressBar variant="primary" now={40} />
                                    </li>
                                    <li className="font-weight-bolder">
                                        NodeJs<br/>
                                        <ProgressBar variant="primary" now={60} />
                                    </li>
                                    <li className="font-weight-bolder">
                                        C#<br/>
                                        <ProgressBar variant="primary" now={40} />
                                    </li>
                                    <li className="font-weight-bolder">
                                        Mongodb<br/>
                                        <ProgressBar variant="primary" now={60} />
                                    </li>
                                </ul>
                            </aside>
                        </div>

                        
                    </Col>
                </Row>
            </Container>
        </Layout>
    </>
  )
}