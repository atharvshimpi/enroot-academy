import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: ${({minHeight90vh}) => (minHeight90vh) ? 'center' : 'flex-start'};
    align-items: center;
    width: 100%;
    overflow: hidden;
    min-height: 100vh;
    background: ${({BgColor}) => (BgColor)};
`

export const HomeHeading = styled.h1`
    color: ${({headingColor}) => (headingColor)};
    font-size: 3rem;
    text-align: center;
    font-family: 'Roboto', Verdana;
    margin-top: ${({minHeight90vh}) => (minHeight90vh) ? '0' : '100px'};

    @media screen and (max-width: 768px) {
        font-size: 1.7rem;
    }
`

export const HomeContent = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export const HomeP = styled.p`
    font-size: 1.3rem;
    text-align: center;
    letter-spacing: 3px;
    font-weight: bold;

    @media screen and (max-width: 768px) {
        font-size: 1.2rem;
    }
`

export const Table = styled.table`
    border: 2px solid white;
	border-radius: 10px;
	width: 80%;
    height: 60vh;

    @media screen and (max-width: 1260px) {
        height: 55vh;
    }
`

export const Th = styled.td`
    width: 50%;
    font-weight: bold;
    font-size: 2rem;
    color: #fff;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
    }
`

export const Td = styled.td`
    font-size: 1.5rem;
    color: #fff;
    text-align: center;
`

export const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 60vh;

    @media screen and (max-width: 1150px) {
        width: 100%;
        height: auto;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
        height: auto;
    }
`

export const Li = styled.li`
    font-size: 2rem;
    font-weight: bold;
    list-style: none;
    margin-right: 20px;
`

export const P = styled.p`
    font-size: 1.5rem;
    letter-spacing: 3px;
    font-weight: bold;
    color: black;

    @media screen and (max-width: 768px) {
        font-size: 1.2rem;
        letter-spacing: 1px;
    }
`

export const Subject = styled.span`
    font-size: 1.4rem;
    color: #fbff00;

    @media screen and (max-width: 768px) {
        display: inline-block;
        text-align: center;
    }
`

export const Experience = styled.span`
    font-size: 1.2rem;
    color: #333; 

    @media screen and (max-width: 768px) {
        display: block;
    }
`

export const LinksWrapper = styled.div`
    font-size: 1.8rem;

    @media screen and (max-width: 768px) {
        font-size: 1.3rem;
        margin: 0 10px;
    }
`

export const Links = styled.a`
    text-decoration: none !important;
    color: #fff;

    &:hover {
        color: red;
    }
`

export const Row = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    margin: 10px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        margin: auto;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: auto;

    @media screen and (max-width: 768px) {
        width: 100%;
    }

`

export const FormHeading = styled.h2`
    color: #fff;
    text-align: left;
    margin-left: 10px;

    @media screen and (max-width: 768px) {
        font-size: 1rem;
    }
`

export const Input = styled.input`
    width: auto;
    font-size: 1.5rem;
    border-radius: 5px;
    margin: 0 10px 0 0;
    padding: 8px;

    &::placeholder {
        font-size: 1.2rem;
    }

    &:focus {
        background: #8be547;
    }

    @media screen and (max-width: 768px) {
        width: 93%;
        font-size: 1.3rem;
        margin: 10px 0;
    }
`

export const Textarea = styled.textarea`
    width: 96%;
    height: 100px;
    padding: 12px 18px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    resize: none;

    &:focus {
        background: #8be547;
    }

    @media screen and (max-width: 768px) {
        margin: 10px 0;
    }
`

export const Button = styled.button`
    display: block;
    width: 47.3%;
    height: 40px;
    font-size: 1.3rem;
    border-radius: 5px;
    outline: none;
    border: 0;
    margin: 0 10px 0 0;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        background: #8be547;
        transform: translateY(-10%);
    }

    @media screen and (max-width: 768px) {
        width: 96%;
        margin: 10px 0;
    }
`