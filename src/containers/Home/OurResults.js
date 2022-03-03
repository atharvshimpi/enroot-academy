import React from "react";

import { HomeContainer, HomeHeading, Table, Th, Td, HomeP } from "./Elements";

/**
* @author
* @function OurResults
**/

const OurResults = ({ id, BgColor, headingColor, minHeight90vh }) => {
    return(
        <HomeContainer BgColor={BgColor} id={id}>
            <HomeHeading minHeight90vh={minHeight90vh} headingColor={headingColor}>Our Results</HomeHeading>
            <HomeP style={{ fontSize: '1.5rem', color: '#cadc39' }}><i class="fa fa-star" aria-hidden="true"></i>Mathematics (2020)</HomeP>
            <Table align="center">
                <tr>
                    <Th>Name</Th>
                    <Th>Marks <div style={{ fontSize: '1rem', color: 'aqua' }}>(out of 100)</div></Th>
                </tr>
                <tr>
                    <Td>Shrawani Raut</Td>
                    <Td>99</Td>
                </tr>
                <tr>
                    <Td>Vamshika Acharya</Td>
                    <Td>86</Td>
                </tr>
            </Table>
        </HomeContainer>
    );
}

export default OurResults;