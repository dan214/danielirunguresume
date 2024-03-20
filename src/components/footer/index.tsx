import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <Container fluid className="text-center text-black py-3">
                <Row>
                    <Col>
                        <p>Made with ❤️ by Daniel Irungu</p>
                        <p>
                            <a href="https://github.com/dan214">View on GitHub</a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
