import React from 'react';

const HeaderHistory = () => {
    return (
        <div className="row navbar-light bg-white shadow p-3 border-bottom">
            <div className="col-2 text-left">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03"
                    aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="col-8 my-auto">
                <h4 className="text-center">History</h4>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <p>hehehe</p>
                </div>
            </div>
        </div>
    );
}

export default HeaderHistory;