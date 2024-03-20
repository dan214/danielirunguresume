"use client"
import Image from 'next/image';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import elimisha from '../../images/elimishaVideos.png'
import zawadi from '../../images/zawadiUni.png'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink, CardGroup } from 'reactstrap';

const Projects = () => {

    return (
        <>
            <Masonry columnsCount={3} gutter="10px">
                <Card
                >
                    <CardBody>
                        <CardTitle tag="h5">
                            Elimisha
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
                            Zawadi University
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
                        width="100%" />
                    <CardBody>
                        <CardText>
                            Some quick example text to build on the card title and make up the bulk of the card‘s content.
                        </CardText>
                        <CardLink href="#">
                            Card Link
                        </CardLink>
                    </CardBody>
                </Card>

                <Card
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
                        width="100%" />
                    <CardBody>
                        <CardText>
                            Some quick example text to build on the card title and make up the bulk of the card‘s content.
                        </CardText>
                        <CardLink href="#">
                            Card Link
                        </CardLink>
                    </CardBody>
                </Card>

                <Card
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
                        width="100%" />
                    <CardBody>
                        <CardText>
                            Some quick example text to build on the card title and make up the bulk of the card‘s content.
                        </CardText>
                        <CardLink href="#">
                            Card Link
                        </CardLink>
                    </CardBody>
                </Card>


                <Card
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
                        width="100%" />
                    <CardBody>
                        <CardText>
                            Some quick example text to build on the card title and make up the bulk of the card‘s content.
                        </CardText>
                        <CardLink href="#">
                            Card Link
                        </CardLink>
                    </CardBody>
                </Card>

            </Masonry></>
    )
}

export default Projects;