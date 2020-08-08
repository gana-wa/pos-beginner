import React, { Component } from 'react';

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
                                <div className="col-6 col-sm-4 item-menu" onClick>
                                    <img src={product.image} className="card-img-top " alt="..." id={product.product_id} />
                                    <h5 id={product.product_id}>{product.product_name}</h5>
                                    <h5 id={product.product_id} className="font-weight-bold">Rp. {product.price}</h5>
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