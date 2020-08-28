import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions/menu';

import './styles/Menu.css';
// import tick from '../assets/img/tick.png';

const Menu = (props) => {
   return (
      <div className="col-lg-11">
         <div className="row py-3">
            {props.menu.menus.map((item) => {
               return (
                  <div className="col-6 col-sm-4 item-menu" key={item.product_id}>
                     <img src={item.image} className="card-img-top" onClick={() => props.addToCart(
                        item.product_id,
                        item.product_name,
                        item.price,
                        item.image
                     )} alt={`gambar ${item.product_name}`} />
                     <h5>{item.product_name}</h5>
                     <h5 className="font-weight-bold">Rp {item.price.toLocaleString()}</h5>
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

