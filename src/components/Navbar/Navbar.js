import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";

import { NavContainer, NavHeading, NavLink, NavLinksWrapper, NavIcon } from "./Elements";
import Tree from "../Images/Tree.png";

/**
* @author
* @function Navbar
**/

const Navbar = (props) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= window.innerHeight && window.scrollY <= 2*window.innerHeight) {
            setScrollNav(true);
        } else if(window.scrollY > 2*window.innerHeight && window.scrollY <= 3*window.innerHeight) {
            setScrollNav(false);
        } else if(window.scrollY > 3*window.innerHeight && window.scrollY <= 4*window.innerHeight) {
            setScrollNav(true);
        } else{
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    return(
        <NavContainer scrollNav={scrollNav}>
            <NavHeading scrollNav={scrollNav}>Enroot Academy</NavHeading>
            <NavLinksWrapper scrollNav={scrollNav}>
                <NavLink  
                    to="aboutus" 
                    smooth={false}
                    duration={100}
                    spy={true}
                    offset={0}
                >
                    About Us
                </NavLink>
                <NavLink  
                    to="ourresults" 
                    smooth={false}
                    duration={100}
                    spy={true}
                    offset={2}
                >
                    Our Results
                </NavLink>
                <NavLink 
                    to="ourteachers" 
                    smooth={false}
                    duration={100}
                    spy={true}
                    offset={2}
                >
                    Our Teachers
                </NavLink>
                <NavLink 
                    to="contactus"
                    smooth={false}
                    duration={100}
                    spy={true}
                    offset={2} 
                >
                    Contact Us
                </NavLink>
            </NavLinksWrapper>
            <NavIcon onClick={ () => { scroll.scrollToTop({ duration: 100 }) } } src={ Tree } alt="Enroot Academy" />
        </NavContainer>
    );
}

export default Navbar;