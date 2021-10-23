import React from 'react';
import styled from "styled-components"

const FooterContainer = styled.div`
        background-color: #2E4494;
        padding: 2rem;
        justify-content: center;
        text-align: center;
        margin: auto;    
        position: fixed;
        bottom: 0;
        width: 100%;
        color: white;
`;


const Footer = () => {



    return (
        <FooterContainer>
            <small>Estamos en desarrollo.</small>
            <br />
            <small>Hecho con ❤</small>
        </FooterContainer>
    );
}

export default Footer;