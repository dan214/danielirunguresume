"use client"
import Image from 'next/image';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import elimisha from '../../images/elimishaVideos.png'
import zawadi from '../../images/zawadiUni.png'
import simulation from '../../images/simulation.png'
import rssfeed from '../../images/Manually Hide Posts.jpg'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink, CardGroup } from 'reactstrap';

const Projects = () => {

    return (
        <>
            <Masonry columnsCount={3} gutter="10px">
                <Card
                >
                    <CardBody>
                        <CardTitle tag="h5">
                            Elimisha (Django, Python)
                        </CardTitle>
                    </CardBody>
                    <Image
                        alt="Card cap"
                        src={elimisha}
                        height={300}
                        width={400} />
                    <CardBody>
                        <CardText>
                            Web based project in Django with educational videos. Speakers are able to upload videos and add quizzes for those videos. Students can register and answer quizzes after watching videos.
                        </CardText>
                        <CardText>
                            <b>Frameworks</b>

                            <li>DJANGO</li>
                            <li>Python</li>
                            <li>SQLite</li>
                        </CardText>
                        <CardLink href="http://elimisha.pythonanywhere.com/3/" target='_blank'>
                            Link to website
                        </CardLink>
                        <CardLink href="https://github.com/dan214/Elimisha" target='_blank'>
                            Github
                        </CardLink>
                    </CardBody>
                </Card>
                <Card
                >
                    <CardBody>
                        <CardTitle tag="h5">
                            Zawadi University (React, C#)
                        </CardTitle>
                    </CardBody>
                    <Image
                        alt="Card cap"
                        src={zawadi}
                        height={300}
                        width={400} />
                    <CardBody>
                        <CardText>
                            Zawadi University is React/C# project that houses the courses and departments that the university offers. The app allows one to add/update/create/delete
                            courses and departments. </CardText>
                        <CardText>
                            <b>Frameworks</b>

                            <li>React</li>
                            <li>C#, .NET Web API</li>
                            <li>SQL</li>
                        </CardText>


                        <CardLink href="https://zawadiuni.vercel.app/" target='_blank'>
                            Link to web app
                        </CardLink>
                        <CardLink href="https://github.com/dan214/ZawadiUni" target='_blank'>
                            Github
                        </CardLink>
                    </CardBody>
                </Card>
                <Card
                >
                    <CardBody>
                        <CardTitle tag="h5">
                            Simulation of Virus and Patient Population Dynamics (Python)
                        </CardTitle>
                    </CardBody>
                    <Image
                        alt="Card cap"
                        src={simulation}
                        height={300}
                        width={400} />
                    <CardBody>
                        <CardText>
                            I designed and implemented a
                            stochastic simulation of patient and virus population dynamics, and reach conclusions
                            about treatments regimens based on the simulation results.
                        </CardText>
                        <CardText>
                            <b>Frameworks</b>

                            <li>Python</li>
                            <li>PyQt</li>
                            <li>pylab</li>
                        </CardText>
                        <CardLink href="https://github.com/dan214/Simulation-of-Virus-and-Patient-Population-Dynamics/blob/master/ps8/ps7.py" target='_blank'>
                            GitHub
                        </CardLink>
                    </CardBody>
                </Card>
                <Card
                >
                    <CardBody>
                        <CardTitle tag="h5">
                            RSS Feed Filter (Python)
                        </CardTitle>
                    </CardBody>
                    <Image
                        alt="Card cap"
                        src={rssfeed}
                        height={300}
                        width={400} />
                    <CardBody>
                        <CardText>
                            This app monitors news feeds over
                            the internet, filters the news and alerts the user when it notices a news story that
                            matches the user’s interests. Implemented in Python and Google News Feed, Yahoo
                            News Feed.
                        </CardText>
                        <CardText>
                            <b>Frameworks</b>

                            <li>Python</li>
                        </CardText>
                        <CardLink href="https://github.com/dan214/RSS-Feed-Filter/blob/master/ps5.py" target='_blank'>
                            GitHub
                        </CardLink>
                    </CardBody>
                </Card>

            </Masonry></>
    )
}

export default Projects;