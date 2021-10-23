import React from 'react';
import styled from "styled-components"
import Link from "next/link"

const ButtonWrapper = styled.a`
    padding: 2vw;
    text-decoration: none;
    color: #2E4494;
    cursor: pointer;
    border: 3px solid #A7DDC7;
    border-radius: 2rem;
    font-weight: bold;
    text-align: center;
    margin: auto;
    
    :hover{
        color: #2F2E41;
        background-color: #A7DDC7;
        border: 3px solid #2E4494;
    }
`


const ButtonRedirect = ({ text, redirect }) => {

    return (
        <Link href={redirect} passHref>
            <ButtonWrapper>
                {text}
            </ButtonWrapper>
        </Link>
    );
}

export default ButtonRedirect;