import React from 'react';
import { Toast, Row, Col } from 'react-bootstrap';

const ToastAddProduct = (props) => {
    return (
        <div
            aria-live="polite"
            aria-atomic="true"
            style={{
                position: 'relative',
                minHeight: '100px',
            }}
        >
            <Row>
                <Col xs={12}>
                    <Toast onClose={() => props.setShowToast(false)} show={props.showToast} delay={3000} autohide
                        style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                        }}>
                        <Toast.Header>
                            <img
                                src="holder.js/20x20?text=%20"
                                className="rounded mr-2"
                                alt=""
                            />
                            <strong className="mr-auto">Add Product</strong>
                            <small>Now</small>
                        </Toast.Header>
                        <Toast.Body>Product successfully added..!</Toast.Body>
                    </Toast>
                </Col>
            </Row>
        </div>
    );
}

export default ToastAddProduct;