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

export default function Resume( props ) {
  return (
    <>
        <Layout theme={props.theme} toggleTheme={props.toggleTheme}>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <Container fluid className={`${props.theme === 'dark' ? 'bg-dark' : 'bg-light'}`}>
                <Row>
                    <Col md={{ span: 12,}} lg={{ span: 10, offset: 1}} style={{boxShadow: '-2px 2px 12px -4px rgba(0,0,0,0.75)'}}
                    className={`card my-sm-4`}>
                        <header className="row p-lg-5 text-white" style={{background: "#5EA1DF"}}>
                            <div className='col-7 d-flex align-items-center'>
                                <img src="/images/logo.svg" width="150px" />
                                <div className='ml-3'>
                                    <h2 className='mb-0'>DANIEL</h2>
                                    <h2>NWOKOCHA</h2>
                                    <h5>Full Stack Developer</h5>
                                </div>
                            </div>
                              <div className='col-5 d-flex align-items-end'>
                                  <ul className="list-unstyled font-weight-bolder text-white" style={{ fontSize: ".9rem" }}>
                                      <li className="d-flex align-items-center mb-1">
                                          <Image src={`/images/github${props.theme === "dark" ? '-light' : ''}.svg`} width="15px" className="mr-1" />
                                          <a href="https://github.com/gurudanito001" className={`text-white`}>gurudanito001</a>
                                      </li>
                                      <li className="d-flex align-items-center mb-1">
                                          <Image src={`/images/twitter${props.theme === "dark" ? '-light' : ''}.svg`} width="15px" className="mr-1" />
                                          <a href="https://twitter.com/danielnwokocha9" className={`text-white`}>DanielNwokocha9</a>
                                      </li>
                                      <li className="d-flex align-items-center mb-1">
                                          <Image src={`/images/gmail${props.theme === "dark" ? '-light' : ''}.svg`} width="15px" className="mr-1" />
                                          <span className={`text-white`}>gurudanito001@gmail.com</span>
                                      </li>
                                      <li className="d-flex align-items-center">
                                          <Image src={`/images/phone-call${props.theme === "dark" ? '-light' : ''}.svg`} width="15px" className="mr-1" />
                                          <span className={`text-white`}>+2348140715723</span>
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
                                    </li>
                                    <li className="font-weight-bolder">
                                        CSS<br/>
                                        {/* <ProgressBar variant="primary" now={80} /> */}
                                    </li>
                                    <li className="font-weight-bolder">
                                        Bootstrap<br/>
                                    </li>
                                    <li className="font-weight-bolder">
                                        Javascript<br/>
                                    </li>
                                    <li className="font-weight-bolder">
                                        ReactJs<br/>
                                    </li>
                                    <li className="font-weight-bolder">
                                        NextJs<br/>
                                    </li>
                                    <li className="font-weight-bolder">
                                        Typescript<br/>
                                    </li>
                                    <li className="font-weight-bolder">
                                        NodeJs<br/>
                                    </li>
                                    <li className="font-weight-bolder">
                                        C#<br/>
                                    </li>
                                    <li className="font-weight-bolder">
                                        Mongodb<br/>
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