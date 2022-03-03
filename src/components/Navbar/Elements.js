import styled from "styled-components";
import { Link } from "react-scroll";

export const NavContainer = styled.div`
    position: fixed;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    max-height: 12vh;
    z-index: 5;
    overflow: hidden;
    background: ${({scrollNav}) => (scrollNav) ? '#4caf50' : '#8be547'};
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    @media screen and (max-width: 768px) {
        background: #e6e5e5;
    }
`

export const NavHeading = styled.h1`
    color: ${({scrollNav}) => (scrollNav) ? '#e6e5e5' : '#333'};
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
        color: #333;
    }
`

export const NavLinksWrapper = styled.div`
    color: ${({scrollNav}) => (scrollNav) ? '#e6e5e5' : '#333'};
    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavLink = styled(Link)`
    padding: 4vh 15px;
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;
    font-family: 'Roboto', Verdana;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        background: rgba(0, 0, 0, 0.2);
    }

    &.active {
        background: rgba(0, 0, 0, 0.2);
    }
`

export const NavIcon = styled.img`
    width: 100px;
    border-radius: 60px;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        width: 90px;
        margin: 10px 0;
    }
`