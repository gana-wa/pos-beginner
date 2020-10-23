import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions/menu';

import './styles/Menu.css';
import tick from '../assets/img/tick.png';

const Menu = (props) => {
   return (
      <div className="col-lg-11">
         <div className="row py-3">
            {props.menu.menus.map((item) => {
               return (
                  <div className="col-6 col-sm-4" key={item.product_id}>
                     <div className="container-card-menu" onClick={() => props.addToCart(
                        item.product_id,
                        item.product_name,
                        item.price,
                        item.image
                     )}>
                        <div className="container-img-menu">
                           {
                              item.selected ? (
                                 <div className="checked">
                                    <img src={tick} alt="" />
                                 </div>
                              ) : ("")
                           }
                           <img src={item.image}
                              className="menu-img"
                              alt={`gambar ${item.product_name}`} />
                        </div>
                        <h5>{item.product_name}</h5>
                        <h5 className="font-weight-bold">Rp {item.price.toLocaleString('id-ID')}</h5>
                     </div>
                  </div>
               )
            })
            }
         </div>
      </div>
   )
};

const mapStateToProps = (state) => {
   return {
      menu: state.menu,
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addToCart: (id, name, price, img) => dispatch(addToCart(id, name, price, img))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

