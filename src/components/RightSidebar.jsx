import React from 'react';

import logoCart from '../assets/img/food.png';

// class RightSidebar extends Component {
//     showCart = () => {
//         if (this.props.cart.length) {
//             return <>
//                 {this.props.cart.map((item) => {
//                     return (
//                         <div className="row my-5">
//                             <div className="col">
//                                 <img src={item.image} className="w-75 rounded-lg" alt="" />
//                             </div>
//                             <div className="col">
//                                 <h5>{item.product_name}</h5>
//                                 <div className="btn-group mt-auto" role="group" aria-label="Basic example">
//                                     <button type="button" className="btn btn-success">-</button>
//                                     <h5 className="m-2">{item.quantity}</h5>
//                                     <button type="button" className="btn btn-success" onClick={
//                                         this.handleIncrementQuantity
//                                     } >+</button>
//                                 </div>
//                             </div>
//                             <div className="col d-flex">
//                                 <h6 className="mt-auto ml-auto">Rp {item.price * item.quantity}</h6>
//                             </div>
//                         </div>
//                     )
//                 })}
//                 <div className="row mx-2">
//                     <div className="col d-flex">
//                         <h4 className="mr-auto font-weight-bold">Total :</h4>
//                     </div>

//                     <div className="col d-flex">
//                         <h4 className="ml-auto font-weight-bold">Rp {this.props.totalPrice}*</h4>
//                     </div>
//                 </div>
//                 <div className="row mx-2">
//                     <div className="col d-flex">
//                         <p className="mr-auto">*Belum termasuk ppn</p>
//                     </div>
//                 </div>
//                 <div className="row mx-2 my-2">
//                     <div className="col">
//                         <button
//                             type="button"
//                             className="btn btn-info btn-block btn-lg">
//                             Checkout
//                     </button>
//                     </div>
//                 </div>
//                 <div className="row mx-2 my-2">
//                     <div className="col">
//                         <button
//                             type="button"
//                             className="btn btn-danger btn-block btn-lg">
//                             Cancel
//                     </button>
//                     </div>
//                 </div>
//             </>
//         } else {
//             return (
//                 <>
//                     <img src={logoCart} className="w-50" alt="" />
//                     <h5>Your cart is empty</h5>
//                     <p className="text-secondary">Please add some items from the menu</p>
//                 </>
//             )
//         }
//     }

//     render() {
//         // console.log(this.props.cart);
//         return (
//             <div className="col-md-4 border-left border-top">
//                 <div className="row navbar-light bg-white p-3 border-bottom">
//                     <div className="col text-center">
//                         <h4 className="">Cart
//                            <span className="badge badge-pill badge-info">{this.props.cart.length}</span>
//                         </h4>
//                     </div>
//                 </div>
//                 <div className="row h-100"> {/* masalah disini (h-100) */}
//                     <div className="col bg-white text-center border-top">
//                         {this.showCart()}
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

const RightSidebar = (props) => {
    const showCart = () => {
        if (props.arrCarts.length) {
            return <>
                {props.arrCarts.map((item) => {
                    return (
                        <div className="row my-5">
                            <div className="col">
                                <img src={item.image} className="w-75 rounded-lg" alt="" />
                            </div>
                            <div className="col">
                                <h5>{item.product_name}</h5>
                                <div className="btn-group mt-auto" role="group" aria-label="Basic example">
                                    <button type="button" className="btn btn-success">-</button>
                                    <h5 className="m-2">{item.quantity}</h5>
                                    <button type="button" className="btn btn-success" >+</button>
                                </div>
                            </div>
                            <div className="col d-flex">
                                <h6 className="mt-auto ml-auto">Rp {item.price * item.quantity}</h6>
                            </div>
                        </div>
                    )
                })}
                <div className="row mx-2">
                    <div className="col d-flex">
                        <h4 className="mr-auto font-weight-bold">Total :</h4>
                    </div>

                    <div className="col d-flex">
                        <h4 className="ml-auto font-weight-bold">Rp {props.totalPrice}*</h4>
                    </div>
                </div>
                <div className="row mx-2">
                    <div className="col d-flex">
                        <p className="mr-auto">*Belum termasuk ppn</p>
                    </div>
                </div>
                <div className="row mx-2 my-2">
                    <div className="col">
                        <button
                            type="button"
                            className="btn btn-info btn-block btn-lg">
                            Checkout
                    </button>
                    </div>
                </div>
                <div className="row mx-2 my-2">
                    <div className="col">
                        <button
                            type="button"
                            className="btn btn-danger btn-block btn-lg">
                            Cancel
                    </button>
                    </div>
                </div>
            </>
        } else {
            return (
                <>
                    <img src={logoCart} className="w-50" alt="" />
                    <h5>Your cart is empty</h5>
                    <p className="text-secondary">Please add some items from the menu</p>
                </>
            )
        }
    }

    // console.log(props.carts);
    return (
        <div className="col-md-4 border-left border-top">
            <div className="row navbar-light bg-white p-3 border-bottom">
                <div className="col text-center">
                    <h4 className="">Cart
                           <span className="badge badge-pill badge-info">{props.arrCarts.length}</span>
                    </h4>
                </div>
            </div>
            <div className="row h-100"> {/* masalah disini (h-100) */}
                <div className="col bg-white text-center border-top">
                    {showCart()}
                </div>
            </div>
        </div>
    );
}

export default RightSidebar;