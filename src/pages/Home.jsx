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
            product_name: "Esspresso",
            image: "https://week3-pos.netlify.app/assets/firdaus-roslan-pN769u0KHNA-unsplash.png",
            price: 5000
         }
      ]
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

   render() {
      const getCart = () => {
         if (this.state.cart.length) {
            return (
               this.state.cart.map((item) => {
                  return (
                     <div className="row">
                        <div className="col">
                           <img src={item.image} className="w-50" alt="" />
                           <h5>{item.product_name}</h5>
                           <div className="btn-group mt-auto" role="group" aria-label="Basic example">
                              <button type="button" className="btn btn-success ">-</button>
                              <button type="button" className="btn btn-outline-success">1</button>
                              <button type="button" className="btn btn-success ">+</button>
                           </div>
                           <h6>Rp {item.price}</h6>
                        </div>
                     </div>
                  )
               })
            )
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
                           {getCart()}
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