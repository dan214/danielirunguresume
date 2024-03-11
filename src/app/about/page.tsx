import Image from "next/image";
import { Card, CardBody, CardHeader, CardText, CardTitle, Col, Row } from "reactstrap";
import Img from '../dan.jpg'

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
                                I’m a designer and hand lettering artist based in Detroit, but I’ll always be a California gal at heart.
                                I picked up hand lettering as a hobby while studying advertising at the School of Visual Arts, and over the next few years
                                (+ thanks to the power of the internet) I leveraged a few clever passion projects into a thriving freelance business!</p>

                            <p>I know from experience that building a creative career can be a challenging and overwhelming endeavor,
                                which is why I love sharing what I’ve learned with others through my online courses and free resources on my blog.</p>

                            <p>When I’m not working on client projects or teaching, you can find me learning how to make my favorite foods from scratch or finally
                                making my way through the niche craft supplies I bought last year.</p>

                            <p>My motto is, and will always be, “Work hard, snack often.” After almost a decade in the design industry,
                                I realize that working hard all the time isn't sustainable, but I got it tattooed on my forearms when I was 23 so it will always be my motto and I’m fine with it. I just remind myself and others to take more breaks now.</p>

                            <p>Speaking of snacking often: I recently graduated from the Plant-Based Culinary Arts program at the Institute of Culinary Education in New York.
                                Now I’m back in the studio and available for new creative projects and partnerships (especially food-related ones!).</p>
                        </div>


                    </Col>
                </Row>
            </div >
        </>

    )
}