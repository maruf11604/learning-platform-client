import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const topic = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg='4'>
                        <p>this is p1</p>
                    </Col>
                    <Col lg='5'>
                        <p>this is p2</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default topic;