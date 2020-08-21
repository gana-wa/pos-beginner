import React, { Component } from 'react';
import { Modal, Button, Row, Col, Container } from 'react-bootstrap';
import Axios from 'axios';

class ModalCheckout extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         invoice: new Date().getTime(),
    //         cashier: "Chelsea",
    //     }
    // };
    state = {
        invoice: new Date().getTime(),
        cashier: "Chelsea",
    }

    totalPrice = () => {
        return (
            this.props.arrCarts.reduce((total, item) => { return total + (item.price * item.quantity * 0.1) + (item.price * item.quantity) }, 0)
        );
    };

    insertTransaction = () => {
        const transactionItem = this.props.arrCarts.map((item) => {
            return {
                product_id: item.product_id,
                quantity: item.quantity,
            }
        })
        const URLString = `${process.env.REACT_APP_API_ADDRESS}/transaction`;
        const data = {
            invoice: this.state.invoice,
            cashier: this.state.cashier,
            total: this.totalPrice(),
            transaction: transactionItem,
        };
        // console.log(data.invoice);
        Axios.post(URLString, data)
            .then((res) => {
                console.log(res);
                this.props.handleEmptyCart();
                this.props.handleClose();
            })
            .catch(err => console.log(err))

    };

    render() {
        return (
            <Modal show={this.props.showModal} onHide={this.props.handleClose} centered>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col xs={4}><h5>Checkout</h5></Col>
                            <Col xs={8}><h6 className="text-right">Receipt no: #{this.state.invoice}</h6></Col>
                        </Row>
                        <Row>
                            <Col><p>Cashier : {this.state.cashier}</p></Col>
                        </Row>
                        {this.props.arrCarts.map((item) => {
                            return (
                                <Row className="my-1" key={item.product_id}>
                                    <Col xs={8}>
                                        <h6>{item.product_name}&nbsp;{`${item.quantity}x`}</h6>
                                    </Col>
                                    <Col xs={4}>
                                        <h6 className="text-right">Rp&nbsp;{(item.price * item.quantity).toLocaleString()}</h6>
                                    </Col>
                                </Row>
                            )
                        })}
                        <Row className="my-1">
                            <Col><h6>Ppn 10%</h6></Col>
                            <Col>
                                <h6 className="text-right">
                                    Rp&nbsp;{this.props.arrCarts.reduce((total, item) => { return total + (item.price * item.quantity * 0.1) }, 0).toLocaleString()}
                                </h6>
                            </Col>
                        </Row>
                        <Row className="my-1">
                            <Col>
                                <h6 className="text-right">Total:&nbsp;&nbsp;Rp&nbsp;{this.totalPrice().toLocaleString()}
                                </h6>
                            </Col>
                        </Row>
                        <Row>
                            <Col><h6>Payment : Cash</h6></Col>
                        </Row>
                        <Row className="flex-column">
                            <Col>
                                <Button variant="danger" onClick={() => { this.insertTransaction() }} block><h5>Print</h5></Button>
                            </Col>
                            <Col><h6 className="text-center">Or</h6></Col>
                            <Col>
                                <Button variant="info" onClick={this.props.handleClose} block><h5>Send Email</h5></Button>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        );
    }
}

export default ModalCheckout;