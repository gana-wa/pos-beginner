import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// components
import HeaderHistory from '../components/HeaderHistory';
import LeftSidebar from '../components/LeftSidebar';
import HistoryMainContent from '../components/HistoryMainContent';

class History extends Component {
    state = {}
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <HeaderHistory />
                    </Col>
                </Row>
                <Row>
                    <LeftSidebar />
                    <HistoryMainContent />
                </Row>
            </Container>

        );
    }
}

export default History;