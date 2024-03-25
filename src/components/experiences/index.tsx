import React, { useEffect } from 'react';
import { Container, Row, Col, Button, Card, CardBody, CardHeader, CardSubtitle, CardText, CardTitle } from 'reactstrap';

const Experiences: React.FC = () => {

    const resumePdfURL = '/docs/DANIELIRUNGUCV.pdf'

    const handleDownloadPdf = () => {
        window.location.href = resumePdfURL;
    };

    useEffect(() => {
        // Add transition classes when the page is loaded
        document.querySelectorAll('.experience-card').forEach((card, index) => {
            if (index % 2 === 0) {
                card.classList.add('left-slide');
            } else {
                card.classList.add('right-slide');
            }
        });
    }, []);

    return (
        <>
            <Row>
                <Col l md={{
                    size: 12
                }} sm={{
                    size: 12
                }} lg={{
                    size: 3,
                    offset: 9
                }}>
                    <Button onClick={handleDownloadPdf} color="primary">
                        Download My Resume
                    </Button>
                </Col>
            </Row>
            <Row>
                <div className="experiences-container">
                    <Card
                        className="experience-card my-2"
                        color="light"
                        outline
                    >
                        <CardHeader>
                            November 2019 - Present
                        </CardHeader>
                        <CardBody>
                            <CardTitle tag="h5">
                                Software Engineer - TechnoBrain Group Ltd
                            </CardTitle>
                            <CardSubtitle>
                                <u>Key Achievements</u>
                            </CardSubtitle>
                            <CardText>
                                <ul>
                                    <li>
                                        Designed and developed <b>C# .NET Core</b> applications and <b>Web APIs</b> to analyze and monitor metrics collected from various data repositories, aggregate and report, ensuring compliance with our Service Level Agreements (SLAs).
                                    </li>
                                    <li>
                                        Implemented automated notification system to alert stakeholders promptly if metrics deviated from SLA thresholds. Resulted in a <b>25% reduction</b> in SLA violations and improved overall efficiency in monitoring and managing metrics.                            </li>
                                    <li>
                                        Developed highly responsive and user-friendly <b>React</b> web applications utilizing the <b>Next.js</b> framework to interface with our exposed Web APIs. Enhanced user experience and accessibility by implementing dynamic data rendering and seamless navigation. Resulted in a 20% increase in user engagement and overall satisfaction with the platform.              </li>
                                    <li>
                                        Improved application uptime by <b>20% </b>through the implementation of telemetry, monitoring, and alerting functionality via Azure Application Insights, ensuring adherence to Service Level Objective and Agreement with our customer.                            </li>
                                    <li>
                                        Enhanced metric monitoring efficiency by <b>30%</b> through the development of Business Intelligence (BI) reports for Privacy team Health Metrics using M language, DAX, and SQL, facilitating data-driven decision-making processes.                       </li>
                                </ul>
                            </CardText>
                        </CardBody>
                    </Card>

                    <Card
                        className="experience-card my-2"
                        color="light"
                        outline
                    >
                        <CardHeader>
                            September 2016 - November 2019
                        </CardHeader>
                        <CardBody>
                            <CardTitle tag="h5">
                                Software Engineer, Granular IT
                            </CardTitle>
                            <CardSubtitle>
                                <u>Key Achievements</u>
                            </CardSubtitle>
                            <CardText>
                                <ul>
                                    <li>
                                        Facilitated access to events hosted by pharmaceutical companies like Merck and AstraZeneca, resulting in a
                                        <b> 40% increase</b> in attendee registrations through the development of web and mobile-based platforms
                                        providing seamless ticketing and information dissemination.
                                    </li>
                                    <li> Increased provision of healthcare by <b>building .NET MVC web platforms</b> for pharmaceutical companies such as
                                        AstraZeneca
                                    </li>
                                    <li>
                                        Enabled our clients to access healthcare education by <b>building and maintaining</b> a video conferencing
                                        education platform built in <b>React</b> and <b>.NET Core</b> to connect medical innovators and world leading educators.
                                    </li>
                                </ul>
                            </CardText>
                        </CardBody>
                    </Card>

                    <Card
                        className="experience-card left-slide my-2"
                        color="light"
                        outline
                    >
                        <CardHeader>
                            May 2016 - August 2016
                        </CardHeader>
                        <CardBody>
                            <CardTitle tag="h5">
                                Test Automation Engineer, Granular IT
                            </CardTitle>
                            <CardSubtitle>
                                <u>Key Achievements</u>
                            </CardSubtitle>
                            <CardText>
                                <ul>
                                    <li>
                                        Reduced testing time by <b>50%</b> and improved software quality by automating testing of company’s main web
                                        services using <b>Specflow</b> and <b>Selenium</b>, resulting in a <b>30% decrease in regression issues.</b>
                                    </li>
                                    <li>
                                        Improved quality of software solutions by reducing time for <b>regression testing</b> and confidence of the quality
                                        of code generated.</li>
                                </ul>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </Row>
        </>
    );
};

export default Experiences;