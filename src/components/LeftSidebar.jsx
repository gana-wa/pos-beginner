import React from 'react';
import { Link } from "react-router-dom";

import addIcon from '../assets/img/add.png';
import historyIcon from '../assets/img/clipboard.png';
import forkIcon from '../assets/img/fork.png';

const LeftSidebar = () => {
    return (
        <div className="col-lg-1 bg-white shadow-sm">
            <div className="row flex-lg-column justify-content-around py-2">
                <div className="col-auto my-lg-4">
                    <img src={forkIcon} className="w-75" alt="" />
                </div>
                <div className="col-auto my-lg-4">
                    <Link to="/history">
                        <img src={historyIcon} className="w-75" alt="" />
                    </Link>
                </div>
                <div className="col-auto my-lg-4">
                    <img src={addIcon} className="w-75" alt="" />
                </div>
            </div>
        </div>
    );
}

export default LeftSidebar;