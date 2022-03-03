import React from "react";
import { animateScroll as scroll } from "react-scroll";

import { FooterBottomContent, FooterContainer, FooterCopyright, FooterHr, FooterIcon, FooterHeading, FooterP, FooterSubContent, FooterTopContent } from "./Elements";
import Tree from "../Images/Tree.png";

/**
* @author
* @function Footer
**/

const Footer = (props) => {
    return(
        <FooterContainer>
            <FooterTopContent>
                <FooterIcon onClick={ () => { scroll.scrollToTop({ duration: 100 }) } } src={ Tree } alt="Enroot Academy" />
                <FooterSubContent>
                    <FooterHeading>
                        Enroot Academy<br />
                        <FooterP>Learn. Grow. Excel.</FooterP>
                    </FooterHeading>
                </FooterSubContent>
            </FooterTopContent>
            <FooterHr />
            <FooterBottomContent>
                <FooterCopyright>Copyright &copy; 2021 <b style={{ fontFamily: 'Noto Sans' }}>Enroot Academy</b>. All Rights Reserved</FooterCopyright>
            </FooterBottomContent>
        </FooterContainer>
    );
}

export default Footer;