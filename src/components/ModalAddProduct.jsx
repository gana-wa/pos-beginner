import React, { Component } from 'react';
import { Modal, Row, Col, Form, Button, Container } from 'react-bootstrap';
import Axios from 'axios';

class ModalAddProduct extends Component {
    state = {
        name: null,
        price: null,
        category: null,
        image: null,
        allCategory: [],
    };


    fetchCategory = () => {
        const URL = `${process.env.REACT_APP_API_ADDRESS}/category`;
        Axios.get(URL)
            .then((res) => {
                this.setState({
                    allCategory: res.data.data
                })
            })
            .catch(err => console.log(err))
    };

    componentDidMount = () => {
        this.fetchCategory();
    }

    insertProduct = () => {
        let formData = new FormData();
        formData.append("product_name", this.state.name);
        formData.append("price", this.state.price);
        formData.append("category_id", this.state.category);
        formData.append("image", this.state.image);

        const configHeader = {
            headers: {
                "content-type": "multipart/form-data",
                // "x-access-token":
                // "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRhdnZmaXEiLCJsZXZlbF9pZCI6NCwiaWF0IjoxNTk3MjM3NDAyLCJleHAiOjE1OTczMjM4MDJ9.cOLO2mvbIfEdq0bxnKHoCX52uNS_uQh8E6raDgPlrJs",
            }
        };

        const URLString = `${process.env.REACT_APP_API_ADDRESS}/products`;
        console.log(formData);
        this.setState({
            name: null,
            price: null,
            category: null,
            image: null,
        })
        this.props.handleCloseModal();

        Axios.post(URLString, formData, configHeader)
            .then((res) => {
                console.log(res);
                this.props.handleCloseModal();
            })
            .catch(err => console.log(err))
    };

    render() {
        return (
            <Modal show={this.props.showModal} onHide={this.props.handleCloseModal} centered>
                <Modal.Body>
                    <Row>
                        <Col><h5>Add Item</h5></Col>
                    </Row>
                    <Form>
                        <Container>
                            <Form.Group as={Row} controlId="formPlaintextName">
                                <Form.Label column sm="2">
                                    <h6>Name</h6>
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control
                                        required
                                        type="text"
                                        className="shadow-sm"
                                        onChange={(event) => {
                                            this.setState({ name: event.target.value })
                                        }}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formPlaintextImage">
                                <Form.Label column sm="2">
                                    <h6>Image</h6>
                                </Form.Label>
                                <Col sm="10">
                                    {/* <Form.Control type="text" className="shadow-sm" /> */}
                                    <Form.File
                                        id="image"
                                        onChange={(event) => {
                                            this.setState({ image: event.target.files[0] })
                                        }}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formPlaintextPrice">
                                <Form.Label column sm="2">
                                    <h6>Price</h6>
                                </Form.Label>
                                <Col sm="8">
                                    <Form.Control
                                        type="number"
                                        className="shadow-sm"
                                        onChange={(event) => {
                                            this.setState({ price: event.target.value })
                                        }}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formPlaintextCategory">
                                <Form.Label column sm="2">
                                    <h6>Category</h6>
                                </Form.Label>
                                <Col sm="6">
                                    <Form.Control
                                        as="select"
                                        defaultValue=""
                                        className="shadow-sm"
                                        onChange={(event) => {
                                            this.setState({ category: event.target.value })
                                        }}
                                    >
                                        <option value="" disabled hidden>Category</option>
                                        {this.state.allCategory.map((item) => {
                                            return (
                                                <option key={item.category_id} value={item.category_id}>{item.category_name}</option>
                                            )
                                        })}
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                        </Container>
                    </Form>
                    <Row className="mt-sm-5">
                        <Col className="text-right">
                            <Button variant="danger" className="mx-3 px-3" onClick={() => this.props.handleCloseModal()}>Cancel</Button>
                            <Button variant="info" className="px-4" onClick={() => {
                                this.insertProduct();
                            }}>Add</Button>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        );
    }
}

export default ModalAddProduct;