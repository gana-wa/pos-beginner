import React, { Component } from 'react';
import Axios from 'axios';

// components
import Menu from '../components/Menu';
import HeaderHome from '../components/HeaderHome';
import LeftSidebar from '../components/LeftSidebar';

// image
import logoCart from '../assets/img/food.png';

class Home extends Component {
   constructor() {
      super();
   }

   state = {
      menus: [],
      cart: [
         {
            product_name: "Cappucino",
            image: "https://week3-pos.netlify.app/assets/firdaus-roslan-pN769u0KHNA-unsplash.png",
            price: 5000,
            quantity: 2
         },
         {
            product_name: "Esspresso",
            image: "https://week3-pos.netlify.app/assets/jeremy-ricketts-6ZnhM-xBpos-unsplash.png",
            price: 10000,
            quantity: 3
         },
         {
            product_name: "Black Forest",
            image: "https://week3-pos.netlify.app/assets/blackforest.png",
            price: 30000,
            quantity: 1
         }
      ],
      totalPrice: 0
   };

   componentDidMount = () => {
      const URLString = "http://localhost:7000/products";
      Axios.get(URLString)
         .then((res) => {
            this.setState({
               menus: res.data.data
            })
         })
         .catch(err => console.log(err))
   }

   showCart = () => {
      if (this.state.cart.length) {
         return <>
            {this.state.cart.map((item) => {
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
                           <button type="button" className="btn btn-success" onClick={
                              this.handleIncrementQuantity
                           } >+</button>
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
                  <h4 className="ml-auto font-weight-bold">Rp {this.state.totalPrice}*</h4>
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

   render() {
      return (
         <>
            <div className="container-fluid">
               <div className="row">
                  <div className="col-md-8">
                     <HeaderHome />
                     <div className="row">
                        <LeftSidebar />
                        {/* <Menu
                           arrMenus={this.state.menus}
                        /> */}
                        <div className="col-lg-11">
                           <div className="row py-3">
                              {this.state.menus.map((product) => {
                                 return (
                                    <div className="col-6 col-sm-4 item-menu">
                                       <img src={product.image} className="card-img-top " alt="..." id={product.product_id} />
                                       <h5 ref={this.newCart} id={product.product_id}>{product.product_name}</h5>
                                       <h5 id={product.product_id} className="font-weight-bold">Rp. {product.price}</h5>
                                    </div>
                                 )
                              })}
                           </div>
                        </div>
                        {/* end of menu */}
                     </div>
                  </div>
                  {/* cart */}
                  <div className="col-md-4 border-left border-top">
                     <div className="row navbar-light bg-white p-3 border-bottom">
                        <div className="col text-center">
                           <h4 className="">Cart
                           <span className="badge badge-pill badge-info">{this.state.cart.length}</span>
                           </h4>
                        </div>
                     </div>
                     <div className="row h-100"> {/* masalah disini (h-100) */}
                        <div className="col bg-white text-center border-top">
                           {this.showCart()}
                        </div>
                     </div>
                  </div>
                  {/* end of cart */}
               </div>
            </div>
         </>
      );
   }
}

export default Home;