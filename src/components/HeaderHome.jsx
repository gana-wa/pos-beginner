import React, { Component } from 'react';

import './styles/HeaderHome.css'

class HeaderHome extends Component {
    render() {
        return (
            <div className="row navbar-light bg-white shadow p-3 border-bottom">
                <div className="col text-left">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03"
                        aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="col-6 my-auto">
                    <h4 className="text-center">Food Item</h4>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <p>hehehe</p>
                    </div>
                </div>
                <div className="col my-auto text-right">
                    <form>
                        <input type="text" className="input-search" name="search"
                            onChange={(event) => {
                                this.props.handleSearch(event.target.value)
                            }}
                        />
                    </form>
                </div>
            </div>
        );
    }
}

export default HeaderHome;