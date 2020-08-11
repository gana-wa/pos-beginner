import React, { Component } from 'react';
import Axios from 'axios';

// components
import Menu from '../components/Menu';
import HeaderHome from '../components/HeaderHome';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';


class Home extends Component {
   constructor() {
      super();
      this.state = {
         menus: [],
         cart: [

         ],
         totalPrice: 0,
         isChecked: false,
      }
   }

   fetchAllData = () => {
      const URLString = "http://localhost:7000/products";
      Axios.get(URLString)
         .then((res) => {
            this.setState({
               menus: res.data.data
            })
         })
         .catch(err => console.log(err))
   }

   componentDidMount = () => {
      this.fetchAllData();
   }

   handleClick = (index) => {
      const { menus } = this.state;
      const cart = [...this.state.cart];
      // find 
      let idClicked = menus[index].id;
      if (cart.length === 0) {
         cart.push(menus[index]);
         cart[0].quantity = 1
      } else {
         const updatedCart = cart.findIndex(item => item.id === idClicked);
         console.log(updatedCart, 'pertama');
         if (updatedCart === -1) {
            cart.push(menus[index]);
            cart[index].quantity = 1;
         } else {
            cart.splice(updatedCart, 1)
         }
         console.log(cart, 'kedua');
      }

      this.setState({ cart })
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
                        <div className="col-lg-11">
                           <div className="row py-3">
                              {this.state.menus.map((product, index) => {
                                 return (
                                    <Menu
                                       image={product.image}
                                       product_name={product.product_name}
                                       price={product.price}
                                       handleClick={() => this.handleClick(index)}
                                       isChecked={this.state.isChecked}
                                    />
                                 )
                              })}
                           </div>
                        </div>
                        {/* end of menu */}
                     </div>
                  </div>
                  {/* cart */}
                  <RightSidebar
                     cart={this.state.cart}
                     totalPrice={this.state.totalPrice}
                  />
                  {/* end of cart */}
               </div>
            </div>
         </>
      );
   }
}

export default Home;