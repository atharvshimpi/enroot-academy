import React from "react";

import { aboutus, ourresults, ourteachers, contactus } from "./Data";
import AboutUs from "./AboutUs";
import OurResults from "./OurResults";
import OurTeachers from "./OurTeachers";
import ContactUs from "./ContactUs";

/**
* @author
* @function Home
**/

const Home = (props) => {
    return(
        <>
            <AboutUs {...aboutus} />
            <OurResults {...ourresults} />
            <OurTeachers {...ourteachers} />
            <ContactUs {...contactus} />
        </>
    );
}

export default Home;