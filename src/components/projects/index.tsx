"use client"
import { useState, useEffect } from 'react';
import { octokit } from '@/utils/octokit';
import { Card, CardBody, CardImg, CardLink, CardSubtitle, CardText, CardTitle, Col, Row } from "reactstrap";

const Projects = () => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await octokit.repos.listForAuthenticatedUser();
                if (response && response.data) {
                    console.log('Response data:', response.data);
                    setRepos(response.data);
                } else {
                    console.error('No data received from GitHub API:', response);
                }
            } catch (error) {
                console.error('Error fetching repositories:', error);
            }
        };

        fetchRepos();
    }, []);


    return (
        <div>
            <Row>
                {repos.map(repo => (
                    <Col key={repo.id} sm="6" md="4" lg="3">
                        <Card className="mb-3">
                            <CardImg top width="100%" src={repo.owner.avatar_url} alt={repo.owner.login} />
                            <CardBody>
                                <CardTitle tag="h5">{repo.name}</CardTitle>
                                <CardText>{repo.description}</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Row className="mb-3 mt-3">
                <Col>
                    <Card
                        style={{
                            width: '18rem'
                        }}
                    >
                        <CardBody>
                            <CardTitle tag="h5">
                                Card title
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                Card subtitle
                            </CardSubtitle>
                        </CardBody>
                        <img
                            alt="Card cap"
                            src="https://picsum.photos/318/180"
                            width="100%"
                        />
                        <CardBody>
                            <CardText>
                                Some quick example text to build on the card title and make up the bulk of the card‘s content.
                            </CardText>
                            <CardLink href="#">
                                Card Link
                            </CardLink>
                            <CardLink href="#">
                                Another Link
                            </CardLink>
                        </CardBody>
                    </Card>
                </Col>

                <Col>
                    <Card
                        style={{
                            width: '18rem'
                        }}
                    >
                        <CardBody>
                            <CardTitle tag="h5">
                                Card title
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                Card subtitle
                            </CardSubtitle>
                        </CardBody>
                        <img
                            alt="Card cap"
                            src="https://picsum.photos/318/180"
                            width="100%"
                        />
                        <CardBody>
                            <CardText>
                                Some quick example text to build on the card title and make up the bulk of the card‘s content.
                            </CardText>
                            <CardLink href="#">
                                Card Link
                            </CardLink>
                            <CardLink href="#">
                                Another Link
                            </CardLink>
                        </CardBody>
                    </Card>
                </Col>

                <Col>
                    <Card
                        style={{
                            width: '18rem'
                        }}
                    >
                        <CardBody>
                            <CardTitle tag="h5">
                                Card title
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                Card subtitle
                            </CardSubtitle>
                        </CardBody>
                        <img
                            alt="Card cap"
                            src="https://picsum.photos/318/180"
                            width="100%"
                        />
                        <CardBody>
                            <CardText>
                                Some quick example text to build on the card title and make up the bulk of the card‘s content.
                            </CardText>
                            <CardLink href="#">
                                Card Link
                            </CardLink>
                            <CardLink href="#">
                                Another Link
                            </CardLink>
                        </CardBody>
                    </Card>
                </Col>

                <Col>
                    <Card
                        style={{
                            width: '18rem'
                        }}
                    >
                        <CardBody>
                            <CardTitle tag="h5">
                                Card title
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                Card subtitle
                            </CardSubtitle>
                        </CardBody>
                        <img
                            alt="Card cap"
                            src="https://picsum.photos/318/180"
                            width="100%"
                        />
                        <CardBody>
                            <CardText>
                                Some quick example text to build on the card title and make up the bulk of the card‘s content.
                            </CardText>
                            <CardLink href="#">
                                Card Link
                            </CardLink>
                            <CardLink href="#">
                                Another Link
                            </CardLink>
                        </CardBody>
                    </Card>
                </Col>

                <Col>
                    <Card
                        style={{
                            width: '18rem'
                        }}
                    >
                        <CardBody>
                            <CardTitle tag="h5">
                                Card title
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                Card subtitle
                            </CardSubtitle>
                        </CardBody>
                        <img
                            alt="Card cap"
                            src="https://picsum.photos/318/180"
                            width="100%"
                        />
                        <CardBody>
                            <CardText>
                                Some quick example text to build on the card title and make up the bulk of the card‘s content.
                            </CardText>
                            <CardLink href="#">
                                Card Link
                            </CardLink>
                            <CardLink href="#">
                                Another Link
                            </CardLink>
                        </CardBody>
                    </Card>
                </Col>


                <Col>
                    <Card
                        style={{
                            width: '18rem'
                        }}
                    >
                        <CardBody>
                            <CardTitle tag="h5">
                                Card title
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                Card subtitle
                            </CardSubtitle>
                        </CardBody>
                        <img
                            alt="Card cap"
                            src="https://picsum.photos/318/180"
                            width="100%"
                        />
                        <CardBody>
                            <CardText>
                                Some quick example text to build on the card title and make up the bulk of the card‘s content.
                            </CardText>
                            <CardLink href="#">
                                Card Link
                            </CardLink>
                            <CardLink href="#">
                                Another Link
                            </CardLink>
                        </CardBody>
                    </Card>
                </Col>

                <Col>
                    <Card
                        style={{
                            width: '18rem'
                        }}
                    >
                        <CardBody>
                            <CardTitle tag="h5">
                                Card title
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                Card subtitle
                            </CardSubtitle>
                        </CardBody>
                        <img
                            alt="Card cap"
                            src="https://picsum.photos/318/180"
                            width="100%"
                        />
                        <CardBody>
                            <CardText>
                                Some quick example text to build on the card title and make up the bulk of the card‘s content.
                            </CardText>
                            <CardLink href="#">
                                Card Link
                            </CardLink>
                            <CardLink href="#">
                                Another Link
                            </CardLink>
                        </CardBody>
                    </Card>
                </Col>

                <Col>
                    <Card
                        style={{
                            width: '18rem'
                        }}
                    >
                        <CardBody>
                            <CardTitle tag="h5">
                                Card title
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                Card subtitle
                            </CardSubtitle>
                        </CardBody>
                        <img
                            alt="Card cap"
                            src="https://picsum.photos/318/180"
                            width="100%"
                        />
                        <CardBody>
                            <CardText>
                                Some quick example text to build on the card title and make up the bulk of the card‘s content.
                            </CardText>
                            <CardLink href="#">
                                Card Link
                            </CardLink>
                            <CardLink href="#">
                                Another Link
                            </CardLink>
                        </CardBody>
                    </Card>
                </Col>

                <Col>
                    <Card
                        style={{
                            width: '18rem'
                        }}
                    >
                        <CardBody>
                            <CardTitle tag="h5">
                                Card title
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                Card subtitle
                            </CardSubtitle>
                        </CardBody>
                        <img
                            alt="Card cap"
                            src="https://picsum.photos/318/180"
                            width="100%"
                        />
                        <CardBody>
                            <CardText>
                                Some quick example text to build on the card title and make up the bulk of the card‘s content.
                            </CardText>
                            <CardLink href="#">
                                Card Link
                            </CardLink>
                            <CardLink href="#">
                                Another Link
                            </CardLink>
                        </CardBody>
                    </Card>
                </Col>

                <Col>
                    <Card
                        style={{
                            width: '18rem'
                        }}
                    >
                        <CardBody>
                            <CardTitle tag="h5">
                                Card title
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                Card subtitle
                            </CardSubtitle>
                        </CardBody>
                        <img
                            alt="Card cap"
                            src="https://picsum.photos/318/180"
                            width="100%"
                        />
                        <CardBody>
                            <CardText>
                                Some quick example text to build on the card title and make up the bulk of the card‘s content.
                            </CardText>
                            <CardLink href="#">
                                Card Link
                            </CardLink>
                            <CardLink href="#">
                                Another Link
                            </CardLink>
                        </CardBody>
                    </Card>
                </Col>

                <Col>
                    <Card
                        style={{
                            width: '18rem'
                        }}
                    >
                        <CardBody>
                            <CardTitle tag="h5">
                                Card title
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                Card subtitle
                            </CardSubtitle>
                        </CardBody>
                        <img
                            alt="Card cap"
                            src="https://picsum.photos/318/180"
                            width="100%"
                        />
                        <CardBody>
                            <CardText>
                                Some quick example text to build on the card title and make up the bulk of the card‘s content.
                            </CardText>
                            <CardLink href="#">
                                Card Link
                            </CardLink>
                            <CardLink href="#">
                                Another Link
                            </CardLink>
                        </CardBody>
                    </Card>
                </Col>

            </Row>
        </div>
    )
}

export default Projects;