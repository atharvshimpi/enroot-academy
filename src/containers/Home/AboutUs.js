import React from "react";

import { HomeContainer, HomeHeading, HomeContent, HomeP } from "./Elements";

/**
* @author
* @function AboutUs
**/

const AboutUs = ({ id, BgColor, heading, minHeight90vh, subHeading }) => {
    return(
        <HomeContainer minHeight90vh={minHeight90vh} BgColor={BgColor} id={id}>
            <HomeHeading style={{ whiteSpace:"break-spaces" }}>{heading}</HomeHeading>
            <HomeContent>
                <HomeP style={{ whiteSpace:"break-spaces" }}>{subHeading}</HomeP>
            </HomeContent>
        </HomeContainer>
    );
}

export default AboutUs;