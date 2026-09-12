/* eslint-disable react/no-unescaped-entities */
"use client"
import React from 'react';
import { createTheme } from '@mui/material/styles';
import Image from 'next/image'
import posterPic from '../images/danVidSnippet.png'
import { Button, Col, Row } from "reactstrap";


import Arrow from "@/components/icons/Arrow";
import Facebook from "@/components/icons/facebook";
import LinkedIn from "@/components/icons/linkedin";
import Github from "@/components/icons/github";
import Twitter from "@/components/icons/twitter";
import Link from 'next/link';

const theme = createTheme();

export default function Home() {

  const resumePdfURL = '/docs/Daniel_Irungu_Latest_CV.pdf'
  const handleOpenPdf = () => {
    window.open(resumePdfURL, '_blank');
  };

  const handleDownloadPdf = () => {
    window.location.href = resumePdfURL;
  };


  return (
    <>
      <Row>
        <Col md={{
          size: 12
        }} sm={{
          size: 12
        }} lg={{
          size: 11
        }}>
          <div className='hometext'>
            <article>
              <h1>
                <mark>I'm Daniel Irungu</mark>
              </h1>
              <div className='video-wrapper' style={{ maxWidth: 900, margin: "2rem auto" }}>
                <iframe
                  src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7467915947824041984?compact=1"
                  height={500}
                  width="100%"
                  allowFullScreen
                  title="Embedded post"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  style={{ border: 0, borderRadius: 12 }}
                />
              </div>
              {/* <div style={{ maxWidth: 900, margin: "2rem auto" }}>
                <video
                  src="../images/Daniel.mp4"
                  controls
                  playsInline
                  poster={posterPic.src}
                  style={{
                    width: "100%",
                    borderRadius: 12,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                    display: "block",
                  }}
                />
              </div> */}
              <p>
                Hey there! 👋 I'm Daniel, your friendly neighborhood coding enthusiast! With a Bachelor's in Computer Science and a toolkit packed with .NET, React, and a sprinkle of Azure, I'm on a mission to turn ideas into digital masterpieces. When I'm not crafting sleek web apps or summoning APIs, you'll find me exploring tech trends, cracking jokes (programming puns, anyone?), and embracing the joy of learning.</p>
              <p>
                But it's not just about the code – I'm all about collaboration, creativity, and bringing a fresh perspective to the table. Let's team up, tackle challenges, and create something amazing together! Whether you're a startup in need of a tech-savvy sidekick or an established company seeking a fresh perspective, I'm here to make magic happen. Ready to dive into the code adventure?
              </p>
              <p>
                Let's do this! 💻✨
              </p>

            </article>
            <div>
              <footer>
                <Link href='/experience'>
                  See my experience <Arrow />
                </Link>
                <div className='resumebutton'>
                  <Button onClick={handleOpenPdf} color="primary">
                    View My Resume
                  </Button>
                </div>

                <div className='socialmedia'>
                  <a href='https://www.facebook.com/daniel.irungu.71/' target='_blank'>
                    <Facebook />
                  </a>
                  <a href='https://www.linkedin.com/in/daniel-irungu/' target='_blank'>
                    <LinkedIn />
                  </a>

                  <a href='https://github.com/dan214' target='_blank'>
                    <Github />
                  </a>

                  <a href='https://twitter.com/DanielI55295980' target='_blank'>
                    <Twitter />
                  </a>
                </div>
              </footer>
            </div>
          </div>
        </Col>
      </Row>

    </>
  );
}
