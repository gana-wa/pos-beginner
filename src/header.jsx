import React, { Component } from 'react';
import addIcon from './assets/img/add.png';
import historyIcon from './assets/img/clipboard.png';
import forkIcon from './assets/img/fork.png';
import searchIcon from './assets/img/magnifying-glass.png';
import logoCart from './assets/img/food.png';
import espresso from './assets/img/jeremy-ricketts-6ZnhM-xBpos-unsplash.png'

class Header extends Component {
   state = {
      productCounter: 0,
   };

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
                                 <a href="#"><img src={historyIcon} className="w-75" alt="" /></a>
                              </div>
                              <div className="col-auto my-lg-4">
                                 <a href="#"><img src={addIcon} className="w-75" alt="" /></a>
                              </div>
                           </div>
                        </div>
                        {/* end of left sidebar */}
                        {/* main content */}
                        <div className="col-lg-11">
                           {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos tempore accusamus earum modi dolorem quibusdam at sit assumenda omnis qui reprehenderit veniam placeat impedit soluta harum repellendus quo sequi, ratione reiciendis distinctio itaque asperiores natus. Natus tempora quia quo modi eius, reiciendis sequi odit vero, mollitia veniam a eaque nihil laborum voluptas neque repudiandae reprehenderit commodi aspernatur ducimus, esse enim aliquam? Fuga quasi nesciunt et nobis hic atque minus error ex illo minima quod, aspernatur sapiente obcaecati repudiandae accusantium possimus rerum enim consectetur dolorum accusamus non! Id pariatur quas aliquid earum porro quam! Veniam asperiores voluptates sint velit, inventore doloribus facere accusamus vero sed esse quasi excepturi praesentium tenetur architecto vel sit odit quos hic adipisci aperiam minus. Doloremque, dolores reprehenderit consequatur nulla ipsum qui pariatur fugit, aut totam, rerum sit labore libero accusamus laudantium sapiente nisi rem cupiditate numquam. Doloribus labore, mollitia quis consequatur odio repellendus beatae nisi ab voluptas odit nihil et asperiores nobis sequi sunt architecto deserunt expedita? Amet harum fugit repudiandae, quas at eligendi libero vel magnam non! Ipsum pariatur ad eos quisquam non tempora saepe! Quo illum iusto tempore explicabo corrupti, dolores omnis sapiente, provident doloremque voluptas, quod error. Aut autem aliquam eaque explicabo voluptatum praesentium. Molestiae repellat quae omnis quam magnam. Possimus, eius inventore. Molestias consequatur quisquam voluptas harum, eius consectetur? Animi iste aut nulla ipsam culpa repellat, blanditiis excepturi minima quasi exercitationem rem modi consectetur a odit, quod amet sequi laudantium. Similique nobis veniam velit dolores quae ab, distinctio vel at eum magnam delectus assumenda facere? Perspiciatis, omnis. Maiores eaque labore, accusamus deserunt suscipit odit ex. Ut fugiat quo, beatae vitae adipisci autem itaque ab corrupti similique maiores nihil molestiae, at mollitia consectetur placeat. Labore hic enim architecto necessitatibus autem, velit aut, laborum reprehenderit voluptatibus, debitis quis. Molestiae inventore aspernatur cumque voluptatum labore?.</p> */}
                           <div className="row py-3">
                              <div className="col-6 col-sm-4 item-menu">
                                 <img src={espresso} className="card-img-top" alt="..." />
                                 <h5>Espresso</h5>
                                 <h5 className="font-weight-bold">Rp. 10.000</h5>
                              </div>
                              <div className="col-6 col-sm-4 item-menu">
                                 <img src={espresso} className="card-img-top" alt="..." />
                                 <h5>Espresso</h5>
                                 <h5 className="font-weight-bold">Rp. 10.000</h5>
                              </div>
                              <div className="col-6 col-sm-4 item-menu">
                                 <img src={espresso} className="card-img-top" alt="..." />
                                 <h5>Espresso</h5>
                                 <h5 className="font-weight-bold">Rp. 10.000</h5>
                              </div>
                              <div className="col-6 col-sm-4 item-menu">
                                 <img src={espresso} className="card-img-top" alt="..." />
                                 <h5>Espresso</h5>
                                 <h5 className="font-weight-bold">Rp. 10.000</h5>
                              </div>
                           </div>
                        </div>
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
                     <div className="row">
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

export default Header;