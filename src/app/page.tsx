/* eslint-disable react/no-unescaped-entities */
"use client"
import { createTheme } from '@mui/material/styles';
import Image from 'next/image'
import profilePic from '../images/dan.jpg'
import { Button, Card, CardBody, CardFooter, CardHeader, CardText, CardTitle, Col, Row } from "reactstrap";

const theme = createTheme();

export default function Home() {
  return (
    <>
      <Row>
        <Col md={{
          size: 6
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
          </div>
        </Col>
      </Row>

    </>
  );
}
