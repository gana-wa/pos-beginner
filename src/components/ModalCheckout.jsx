import React from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import { Modal, Button, Row, Col, Container } from 'react-bootstrap';
import { clearCartCreator, fetchMenus } from '../redux/actions/menu';
import './styles/ModalCheckout.css'

const ModalCheckout = (props) => {
   let invoice = new Date().getTime();

   let totalAll = props.menu.carts.reduce((total, item) => { return total + (item.price * item.quantity * 0.1) + (item.price * item.quantity) }, 0);

   const insertTransaction = () => {
      const transactionItem = props.menu.carts.map((item) => {
         return {
            product_id: item.id,
            quantity: item.quantity,
         }
      })
      const URLString = `${process.env.REACT_APP_API_ADDRESS}/transaction`;
      const data = {
         invoice: invoice,
         // cashier: props.menu.cashier,
         cashier: props.auth.user.username,
         total: totalAll,
         transaction: transactionItem,
      };
      // console.log(data);
      Axios.post(URLString, data)
         .then((res) => {
            // console.log(res);
            props.clearCart();
            props.handleClose();
            props.fetchMenus();
         })
         .catch(err => console.log(err))
   };

   return (
      <Modal show={props.showModal} onHide={props.handleClose} centered>
         <Modal.Body>
            <Container>
               <Row>
                  <Col xs={4}><h5>Checkout</h5></Col>
                  <Col xs={8}><h6 className="text-right">Receipt no: #{invoice}</h6></Col>
               </Row>
               <Row>
                  <Col><h6 className="text-cashier">Cashier : {props.auth.user.username}</h6></Col>
               </Row>
               {props.menu.carts.map((item) => {
                  return (
                     <Row className="my-1" key={item.id}>
                        <Col xs={8}>
                           <h6>{item.name}&nbsp;{`${item.quantity}x`}</h6>
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
                        Rp&nbsp;{props.menu.carts.reduce((total, item) => { return total + (item.price * item.quantity * 0.1) }, 0).toLocaleString()}
                     </h6>
                  </Col>
               </Row>
               <Row className="my-1">
                  <Col>
                     <h6 className="text-right">Total:&nbsp;&nbsp;Rp&nbsp;{totalAll.toLocaleString()}
                     </h6>
                  </Col>
               </Row>
               <Row>
                  <Col><h6>Payment : Cash</h6></Col>
               </Row>
               <Row className="flex-column">
                  <Col>
                     <Button variant="danger" className="btn-print" onClick={() => { insertTransaction() }} block><h5>Print</h5></Button>
                  </Col>
                  <Col><h6 className="text-center">Or</h6></Col>
                  <Col>
                     <Button variant="info" className="btn-send-email" onClick={props.handleClose} block><h5>Send Email</h5></Button>
                  </Col>
               </Row>
            </Container>
         </Modal.Body>
      </Modal>
   );
};

const mapStateToProps = (state) => {
   return {
      menu: state.menu,
      auth: state.auth,
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
      clearCart: () => dispatch(clearCartCreator()),
      fetchMenus: () => dispatch(fetchMenus()),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalCheckout);