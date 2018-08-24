import React from 'react';
import {  Container, Row, Col} from 'reactstrap';

export const Footer = () => (
    <Row className="footer">
        <Row className="footer-wrapper">
            <Container className="footer-container">
                <Col xs="6">
                    <a href="http://www.github.com/nugoo1" target="_blank"><h4 className="footer-link">Github</h4></a>
                    <a href="https://www.linkedin.com/in/nuwan-goonewardena-6146a549/" target="_blank"><h4 className="footer-link">Linkedin</h4></a>
                </Col>
                <Col xs="6">
                    <a href="https://www.behance.net/nuwan_gec8b" target="_blank"><h4 className="footer-link right">Behance</h4></a>
                </Col>
            </Container>
        </Row>
        <Row className="copyright-wrapper">
            <Container>
                <p className="copyright">© 2018 Nugoo. All rights reserved.</p>
            </Container>
        </Row>
    </Row>
);
