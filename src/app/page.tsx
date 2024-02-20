"use client"
import { useEffect, useState } from "react";
import { Container, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
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
          size: 6
        }}>
          <div className="profile-pic-container">
            <Image className="profile-pic"
              src={profilePic}
              alt="Picture of the author"
            />
          </div>
        </Col>
        <Col md={{
          size: 6
        }} sm={{
          size: 12
        }} lg={{
          size: 6
        }}>
          <div>
            <Card
              className="my-2"
              style={{
                width: '18rem'
              }}
            >
              <CardHeader>
                Header
              </CardHeader>
              <CardBody>
                <CardTitle tag="h5">
                  Special Title Treatment
                </CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional content.
                </CardText>
                <Button>
                  Go somewhere
                </Button>
              </CardBody>
              <CardFooter>
                Footer
              </CardFooter>
            </Card>
          </div>
        </Col>
      </Row>

    </>
  );
}
