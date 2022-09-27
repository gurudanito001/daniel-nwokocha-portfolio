import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Sidebar from './sidebar';
import Navbar from '../components/navbar'

export const siteTitle = 'Daniel Nwokocha'

export default function Layout( props ) {
    return (
      <div className='container-fluid'>
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

        <div className='row'>
          <Sidebar />
          <main className='col-lg-9 px-0' style={{ background: "#f0f0f6"}}>
            <Navbar />
            {props.children}
          </main>
        </div>
      </div>
            
    )
}