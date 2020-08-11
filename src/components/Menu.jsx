import React, { Component } from 'react';
import './styles/Menu.css';
// import tick from '../assets/img/tick.png';

class Menu extends Component {
    render() {
        return (
            <div className="col-6 col-sm-4 item-menu">
                <img src={this.props.image} className="card-img-top" onClick={this.props.handleClick} alt="..." />

                <h5>{this.props.product_name}</h5>
                <h5 className="font-weight-bold">Rp. {this.props.price}</h5>
            </div>
        );
    }
}

export default Menu;