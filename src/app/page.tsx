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
                I am a Software Engineer with 5+ years of experience in developing commercial software
                applications. I am eager to be challenged in building innovative business solutions. In previous
                roles, ensured 90% on time deliverables and projects completion.
              </p>
              <p>
                Built Microsoft Windows
                Browsers and Devices test automation suites which reduced manual workload by 75% and
                increased efficiency. Designed robust database systems and APIs by following best practices.
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
