import styled from "styled-components";
import { Link } from "react-scroll";

export const FooterContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    background: #8be547;
    overflow: hidden;
`

export const FooterTopContent = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 50px 10px;
    min-height: 100px;

    @media screen and (max-width: 768px) {
        margin: 10px 10px;
    }
`

export const FooterSubContent = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 768px) {
        margin: 0 10px;
    }
`

export const FooterIcon = styled.img`
    width: 200px;
    cursor: pointer;
    background: transparent;

    @media screen and (max-width: 768px) {
        width: 100px;
    }
`

export const FooterHeading = styled.h1`
    font-size: 3rem;

    @media screen and (max-width: 768px) {
        font-size: 130%;
    }
`

export const FooterP = styled.p`
    font-size: 1rem;
    letter-spacing: 5px;

    @media screen and (max-width: 768px) {
        font-size: 70%;
        letter-spacing: 2px;
    }
`

export const FooterLink = styled(Link)`
    text-decoration: none !important;
    color: #f9f9f9;
    margin: 0 20px;

    &:hover {
        color: gray
    }
`

export const FooterHr = styled.hr`
    background: gray;
    width: 100%;
`

export const FooterBottomContent = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 10px;
`

export const FooterCopyright = styled.p`
    color: black;

    @media screen and (max-width: 768px) {
        font-size: 80%;
    }
`