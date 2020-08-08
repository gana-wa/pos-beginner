import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Axios from 'axios';
import Menu from '../components/Menu'

// image
import addIcon from '../assets/img/add.png';
import historyIcon from '../assets/img/clipboard.png';
import forkIcon from '../assets/img/fork.png';
import searchIcon from '../assets/img/magnifying-glass.png';
import logoCart from '../assets/img/food.png';

class Home extends Component {
   state = {
      productCounter: 0,
      menus: [],
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
      return (
         <>
            <div className="container-fluid">
               <div className="row">
                  <div className="col-md-8">
                     {/* Header */}
                     <div className="row navbar-light bg-white shadow p-3 border-bottom">
                        <div className="col-1">
                           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03"
                              aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                           </button>
                        </div>
                        <div className="col-10 my-auto">
                           <h4 className="text-center">Food Item</h4>
                           <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                              <p>hehehe</p>
                           </div>
                        </div>
                        <div className="col-1 my-auto">
                           <a href="#"><img src={searchIcon} width="25" alt="" /></a>
                        </div>
                     </div>
                     {/* end of header */}
                     <div className="row">
                        {/* left sidebar */}
                        <div className="col-lg-1 bg-white shadow-sm">
                           <div className="row flex-lg-column justify-content-around py-2">
                              <div className="col-auto my-lg-4">
                                 <a href="#"><img src={forkIcon} className="w-75" alt="" /></a>
                              </div>
                              <div className="col-auto my-lg-4">
                                 <Link to="/history">
                                    <img src={historyIcon} className="w-75" alt="" />
                                 </Link>
                              </div>
                              <div className="col-auto my-lg-4">
                                 <a href="#"><img src={addIcon} className="w-75" alt="" /></a>
                              </div>
                           </div>
                        </div>
                        {/* end of left sidebar */}
                        {/* main content */}
                        <Menu arrMenus={this.state.menus} />

                        {/* end of main content */}
                     </div>
                  </div>
                  {/* cart */}
                  <div className="col-md-4 border-left border-top">
                     <div className="row navbar-light bg-white p-3 border-bottom">
                        <div className="col text-center">
                           <h4 className="">Cart <span className="badge badge-pill badge-info">{this.state.productCounter}</span></h4>
                        </div>
                     </div>
                     <div className="row h-100"> {/* masalah disini (h-100) */}
                        <div className="col bg-white text-center border-top">
                           <img src={logoCart} className="w-50" alt="" />
                           <h5>Your cart is empty</h5>
                           <p className="text-secondary">Please add some items from the menu</p>
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