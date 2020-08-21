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
         carts: [],
         totalPrice: 0
      }
   }

   fetchAllProducts = () => {
      const URLString = `${process.env.REACT_APP_API_ADDRESS}/products`;
      Axios.get(URLString)
         .then((res) => {
            this.setState({
               menus: res.data.data
            })
         })
         .catch(err => console.log(err))
   }

   componentDidMount = () => {
      this.fetchAllProducts();
   }

   handleAddToCart = (id, name, price, img) => {
      const index = this.state.carts.findIndex((item) => {
         return item.product_id === id;
      });
      if (index >= 0) {
         this.state.carts.splice(index, 1);//hapus data pada array
         this.setState({
            carts: this.state.carts
         })
      } else {
         const newCart = {
            product_id: id,
            product_name: name,
            quantity: 1,
            price: price,
            image: img,
         };
         this.setState({
            carts: this.state.carts.concat(newCart),
         });
      }
   };

   handleEmptyCart = () => {
      this.setState({
         carts: []
      })
   };

   handleIncreaseQty = (id) => {
      const index = this.state.carts.findIndex((item) => {
         return item.product_id === id;
      })
      let newCart = [...this.state.carts]
      newCart[index] = {
         ...newCart[index],
         quantity: this.state.carts[index].quantity + 1
      }
      this.setState({
         carts: newCart
      })
   };

   handleDecreaseQty = (id) => {
      const index = this.state.carts.findIndex((item) => {
         return item.product_id === id;
      })
      let newCart = [...this.state.carts]
      newCart[index] = {
         ...newCart[index],
         quantity: this.state.carts[index].quantity - 1
      }
      if (newCart[index].quantity === 0) {
         this.state.carts.splice(index, 1);//hapus data pada array
         this.setState({
            carts: this.state.carts
         })
      } else {
         this.setState({
            carts: newCart
         })
      }
   };

   render() {
      return (
         <>
            <div className="container-fluid">
               <div className="row">
                  {/* kiri */}
                  <div className="col-md-8">
                     <HeaderHome />
                     <div className="row">
                        <LeftSidebar />
                        <Menu
                           arrMenus={this.state.menus}
                           handleAddToCart={(id, name, price, img) => this.handleAddToCart(id, name, price, img)}
                        />
                     </div>
                  </div>
                  {/* kanan */}
                  <div className="col-md-4 border-left border-top">
                     <RightSidebar
                        arrCarts={this.state.carts}
                        totalPrice={this.state.totalPrice}
                        handleEmptyCart={this.handleEmptyCart}
                        handleIncreaseQty={(product_id) => {
                           this.handleIncreaseQty(product_id)
                        }}
                        handleDecreaseQty={(product_id) => {
                           this.handleDecreaseQty(product_id)
                        }}
                     />
                  </div>
               </div>
            </div>
         </>
      );
   }
}

export default Home;