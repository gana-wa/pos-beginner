import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Axios from 'axios';
// components
import HeaderHistory from '../components/HeaderHistory';
import LeftSidebar from '../components/LeftSidebar';
import HistoryMainContent from '../components/HistoryMainContent';

class History extends Component {
    constructor() {
        super()
        this.state = {
            history: []
        }
    }

    componentDidMount = () => {
        this.fetchAllHistory();
    }

    fetchAllHistory = () => {
        const URL = `${process.env.REACT_APP_API_ADDRESS}/history`;
        Axios.get(URL)
            .then((res) => {
                this.setState({ history: res.data.data })
            })
            .catch(err => console.log(err))
    }

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
                    <HistoryMainContent
                        history={this.state.history}
                    />
                </Row>
            </Container>

        );
    }
}

export default History;