import Image from "next/image";
import { Card, CardBody, CardHeader, CardText, CardTitle, Col, Row } from "reactstrap";
import Img from '../dan.jpg'
import Link from "next/link";

export default function Page() {
    return (
        <>
            <div>
                <Row>
                    <Col md={{
                        size: 12
                    }} sm={{
                        size: 12
                    }} lg={{
                        size: 4
                    }}>
                        <Image src={Img} alt={""} width={400} height={600}>

                        </Image>

                    </Col>
                    <Col md={{
                        size: 12
                    }} sm={{
                        size: 12
                    }} lg={{
                        size: 8
                    }}>
                        <div className="about-text">
                            <p>
                                Hello! I&apos;m <b>Daniel Irungu</b>, a passionate and innovative software engineer with a strong background in .NET development and a knack for building scalable and efficient web applications.
                                With over 5 years of experience in the industry, I&apos;ve had the privilege of working on a diverse range of projects, each presenting its own set of challenges and opportunities for growth.</p>

                            <p>My journey in software development began with a Bachelor&apos;s degree in Computer Science from <Link href={'https://karu.ac.ke/school-of-pure-and-applied-sciences/'}>Karatina University</Link>, where I honed my technical skills and gained a solid foundation in programming principles.
                                Since then, I&apos;ve been on a continuous learning journey, staying up-to-date with the latest technologies and trends in the ever-evolving field of software engineering.</p>

                            <p>Throughout my career, I&apos;ve had the opportunity to work with various technologies and frameworks, including .NET Core, React, ASP.NET, and Azure.
                                At <Link href={'https://technobraingroup.com/digital/engineering-business/'}>TechnoBrain Global Microsoft Engineering Center</Link>, I played a pivotal role in developing .NET Core applications and .NET Web APIs to analyze and monitor Azure DevOps work items and SQL metrics, ensuring compliance with service level agreements (SLAs) and optimizing system performance.
                                I also spearheaded the implementation of telemetry, monitoring, and alerting functionality through Azure Application Insights, resulting in improved application uptime and customer satisfaction.</p>

                            <p>Thank you for taking the time to learn more about me. I look forward to the possibility of collaborating with you!</p>
                        </div>


                    </Col>
                </Row>
            </div >
        </>

    )
}