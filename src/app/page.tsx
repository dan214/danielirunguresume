/* eslint-disable react/no-unescaped-entities */
"use client"
import { createTheme } from '@mui/material/styles';
import Image from 'next/image'
import profilePic from '../images/dan.jpg'
import { Button, Card, CardBody, CardFooter, CardHeader, CardText, CardTitle, Col, Row } from "reactstrap";
import Arrow from "@/components/icons/Arrow";
import Facebook from "@/components/icons/facebook";
import LinkedIn from "@/components/icons/linkedin";
import Github from "@/components/icons/github";
import Twitter from "@/components/icons/twitter";
import Link from 'next/link';

const theme = createTheme();

export default function Home() {

  const resumePdfURL = '/docs/DANIELIRUNGUCV.pdf'

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
          size: 9,
          offset: 1
        }}>
          <div className='hometext'>
            <article>
              <h1>
                <mark>I'm Daniel Irungu</mark>
              </h1>
              <p>
                Hey there! 👋 I'm Daniel, your friendly coding enthusiast! With a Bachelor's in Computer Science and a toolkit packed with .NET, React, and a sprinkle of Azure, I'm on a mission to turn ideas into digital masterpieces. When I'm not crafting sleek web apps or summoning APIs, you'll find me exploring tech trends, cracking jokes (programming puns, anyone?), and embracing the joy of learning.</p>
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
