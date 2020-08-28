import React from 'react';
import { Link } from "react-router-dom";

import ModalAddProduct from './ModalAddProduct';

import addIcon from '../assets/img/add.png';
import historyIcon from '../assets/img/clipboard.png';
import forkIcon from '../assets/img/fork.png';
import { useState } from 'react';

const LeftSidebar = (props) => {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
    return (
        <>
            <div className="col-lg-1 bg-white shadow-sm">
                <div className="row flex-lg-column justify-content-around py-2">
                    <Link to="/">
                        <div className="col-auto my-lg-4">
                            <img src={forkIcon} className="w-75" alt="" />
                        </div>
                    </Link>
                    <div className="col-auto my-lg-4">
                        <Link to="/history">
                            <img src={historyIcon} className="w-75" alt="" />
                        </Link>
                    </div>
                    <div className="col-auto my-lg-4">
                        {/* <Link> */}
                        <img src={addIcon} className="w-75" alt="" onClick={handleShowModal} />
                        {/* </Link> */}
                    </div>
                </div>
            </div>
            <ModalAddProduct
                showModal={showModal}
                handleCloseModal={handleCloseModal}
                fetchAllProducts={props.fetchAllProducts}
            />
            {/* <AlertAddProduct
                showAlert={showAlert}
                setShowAlert={setShowAlert}
            /> */}
            {/* <ToastAddProduct
                showToast={props.showToast}
                setShowToast={props.setShowToast}
            /> */}
        </>
    );
}

export default LeftSidebar;