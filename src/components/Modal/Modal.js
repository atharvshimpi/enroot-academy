import React, { useState } from "react";

import styled from "styled-components";
import Tree from "../Images/Tree.png";
import "./modal.css";

/**
* @author
* @function Modal
**/

const Modal = (props) => {
    const [closeModal, setCloseModal] = useState(false);

    const toggleCloseModal = () => {
        setCloseModal(true);
    }

    return(
        <Container closeModal={closeModal}>
            <div className="content">
                <div className="top">
                    <marquee>
                        <div className="heading-bar">
                            <i className="fa fa-star modal-star" aria-hidden="true"></i>
                            <div className="heading">IMPORTANT</div>
                            <i className="fa fa-star modal-star" aria-hidden="true"></i>
                        </div>
                    </marquee>
                    <i onClick={ toggleCloseModal } className="fa fa-close" aria-hidden="true"></i>
                </div>
                <hr />
                <div className="bottom">
                    <h2 className="notice">ONLINE CLASSES ARE AVAILABLE!!!</h2>
                    <div className="poster">
                        <img src={ Tree } alt="Enroot Academy" />
                        <h2 className="poster-title">Enroot Academy<br/><span className="poster-subtitle">Learn. Grow. Excel.</span></h2>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Modal;

const Container = styled.div`
    display: ${({closeModal}) => (closeModal) ? 'none' : 'flex'};
    justify-content: center;
    align-items: center;
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    z-index: 10;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
`