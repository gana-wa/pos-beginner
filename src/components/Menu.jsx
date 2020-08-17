import React from 'react';
import './styles/Menu.css';
// import tick from '../assets/img/tick.png';

// class Menu extends Component {
//     render() {
//         return (
//             <div className="col-6 col-sm-4 item-menu">
//                 <img src={this.props.image} className="card-img-top" onClick={this.props.handleClick} alt="..." />

//                 <h5>{this.props.product_name}</h5>
//                 <h5 className="font-weight-bold">Rp. {this.props.price}</h5>
//             </div>
//         );
//     }
// }

const Menu = (props) => {
    return (
        <div className="col-lg-11">
            <div className="row py-3">
                {props.arrMenus.map((item) => {
                    return (
                        <div className="col-6 col-sm-4 item-menu" key={item.product_id}>
                            <img src={item.image} className="card-img-top" onClick={() => {
                                props.handleAddToCart(
                                    item.product_id,
                                    item.product_name,
                                    item.price,
                                    item.image
                                )
                            }} alt="..." />
                            <h5>{item.product_name}</h5>
                            <h5 className="font-weight-bold">Rp. {item.price}</h5>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Menu;

