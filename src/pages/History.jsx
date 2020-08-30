import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchHistoryCreator, showHistoryCreator } from '../redux/actions/history';
// components
import HeaderHistory from '../components/HeaderHistory';
import LeftSidebar from '../components/LeftSidebar';
import HistoryMainContent from '../components/HistoryMainContent';

class History extends Component {

    componentDidMount = () => {
        this.props.fetchAllHistory();
        this.props.showHistory();
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
                    <HistoryMainContent />
                </Row>
            </Container>

        );
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllHistory: () => dispatch(fetchHistoryCreator()),
        showHistory: () => dispatch(showHistoryCreator())
    }
}

export default connect(null, mapDispatchToProps)(History);