import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Card, CardDeck, Container, Table } from 'react-bootstrap';
import moment from 'moment';

const HistoryMainContent = (props) => {

   let getThisDay = new Date().toJSON().split("T", 1).toString();
   let todayHistory = props.history.showHistory.filter(item => item.date.split("T", 1).indexOf(getThisDay) !== -1);
   let todayIncome = todayHistory.reduce((total, item) => { return total + item.total }, 0);

   let getThisYear = new Date().toJSON().split("-", 1).toString();
   let thisYearHistory = props.history.showHistory.filter(item => item.date.split("-", 1).indexOf(getThisYear) !== -1);
   let thisYearIncome = thisYearHistory.reduce((total, item) => { return total + item.total }, 0)

   return (
      <div className="col-lg-11 ">
         {/* 3 CARD */}
         < Container fluid >
            <Row>
               <CardDeck className="my-3 w-100">
                  <Col md={4} className="mb-3">
                     <Card bg="danger" className="shadow">
                        <Card.Body>
                           <h6>Today’s Income</h6>
                           <h3>Rp&nbsp;{todayIncome.toLocaleString()}</h3>
                           <h6>+2% Yesterday</h6>
                        </Card.Body>
                     </Card>
                  </Col>
                  <Col md={4} className="mb-3">
                     <Card bg="primary" className="shadow">
                        <Card.Body>
                           <h6>Orders</h6>
                           <h3>
                              {props.history.showHistory.length}
                           </h3>
                           <h6>+5% Last Week</h6>
                        </Card.Body>
                     </Card>
                  </Col>
                  <Col md={4} className="mb-3">
                     <Card bg="info" className="shadow">
                        <Card.Body>
                           <h6>This Year’s Income</h6>
                           <h3>Rp {thisYearIncome.toLocaleString()}</h3>
                           <h6>+10% Last Year</h6>
                        </Card.Body>
                     </Card>
                  </Col>
               </CardDeck>
            </Row>
            {/* END OF 3 CARD */}

            {/* CHART */}
            <Row className="mb-4">
               <Col>
                  <Card bg="light" className="shadow-lg">
                     <Card.Body>
                        <h3>Revenue</h3>
                        <p>Chart</p>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
            {/* END OF CHART */}

            {/* RECENT ORDER TABLE*/}
            <Row>
               <Col className="mb-4">
                  <Card bg="light" className="shadow-lg">
                     <Card.Body>
                        <Row>
                           <Col>
                              <h4>Recent Order</h4>
                           </Col>
                           <Col xs="5" sm="3" md="2" lg="2" xl="1">
                              <select id="inputState" defaultValue="today" className="form-control btn-sm btn-secondary float-right">
                                 <option value="today">Today</option>
                                 <option>...</option>
                              </select>
                           </Col>
                        </Row>
                        <Table hover responsive>
                           <thead>
                              <tr className="text-center">
                                 <th>INVOICES</th>
                                 <th>CASHIER</th>
                                 <th>DATE</th>
                                 <th>ORDERS</th>
                                 <th>AMOUNT</th>
                              </tr>
                           </thead>
                           <tbody>
                              {todayHistory.map((item) => {
                                 return (
                                    <tr className="text-center" key={item.invoice}>
                                       <td>{item.invoice}</td>
                                       <td>{item.cashier}</td>
                                       <td>{moment(item.date).format('DD MMMM YYYY')}</td>
                                       <td>{props.history.history.filter(el => el.invoice.indexOf(item.invoice) !== -1).map(el => {
                                          return ([el.product_name]).join(" ")
                                       }).join(", ")}</td>
                                       <td>Rp&nbsp;{item.total.toLocaleString()}</td>
                                    </tr>
                                 )
                              })}
                           </tbody>
                        </Table>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
            {/* END OF RECENT ORDER TABLE */}
         </Container >
      </div >
   );
};

const mapStateToProps = (state) => {
   return {
      history: state.history,
   }
}

export default connect(mapStateToProps)(HistoryMainContent);