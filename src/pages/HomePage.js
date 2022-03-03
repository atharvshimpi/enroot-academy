import React from "react";

import Navbar from "../components/Navbar/Navbar";
import Home from "../containers/Home/Home";
import Footer from "../components/Footer/Footer";
import Modal from "../components/Modal/Modal";

/**
* @author
* @function HomePage
**/

const HomePage = (props) => {
    return(
        <>
            <Modal />
            <Navbar />
            <Home />
            <Footer />
        </>
    );
}

export default HomePage;