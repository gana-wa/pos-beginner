import React, { Component } from 'react';

// image
import espresso from '../assets/img/jeremy-ricketts-6ZnhM-xBpos-unsplash.png';

class Menu extends Component {
    state = {}
    render() {
        const { arrMenus } = this.props;
        return (
            <>
                <div className="col-lg-11">
                    <div className="row py-3">
                        {arrMenus.map((product) => {
                            return (
                                <div className="col-6 col-sm-4 item-menu ">
                                    <img src={product.image} className="card-img-top " alt="..." />
                                    <h5>{product.product_name}</h5>
                                    <h5 className="font-weight-bold">Rp. {product.price}</h5>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </>
        );
    }
}

export default Menu;