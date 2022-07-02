import React from "react";

import { HomeContainer, HomeHeading, Ul, Li, P, Subject, Experience } from "./Elements";

/**
* @author
* @function OurTeachers
**/

const OurTeachers = ({ id, BgColor, headingColor, minHeight90vh }) => {
    return(
        <HomeContainer BgColor={BgColor} id={id}>
            <HomeHeading minHeight90vh={minHeight90vh} headingColor={headingColor}>Our Teachers</HomeHeading>
            <Ul>
                <Li><i class="fa fa-star" aria-hidden="true"></i>{" "}Reena Shimpi{" "}<Subject>[MATHEMATICS]</Subject>{" "}<br /><Experience>(Experience of <b style={{ color: "black" }}> 10+ </b> Years, Qualification- B.Sc Chem)</Experience>
                    <br /><br />
                    <P>
                        1. Last year, 2 of her students scored 99 & 86 out of 100 in CBSE board class 10th Maths.
                        <br /><br /><br />
                        2. All of her students do exceptionally well in their further studies & show a sense of acknowledgment towards her holistic approach towards studies.
                    </P>
                </Li>
            </Ul>
        </HomeContainer>
    );
}

export default OurTeachers;