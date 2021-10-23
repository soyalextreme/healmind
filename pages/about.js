import React from 'react';
import ButtonRedirect from '../components/ButtonRedirect';
import styled from "styled-components"

const Wrapper = styled.div`

    
    margin-top: 3rem;
    margin-bottom: 10rem;

    section {
        width: 65vw;
        margin: auto;
        margin-bottom: 3rem;
        padding: 2rem;
        border: 3px dotted #A7DDC7;
    }


`

const About = () => {
    return (
        <Wrapper>
            <section>
                <h3>¿Quienes Somos?</h3>
                <p>Somos una empresa que se dedica a ayudar a las personas a mejor su mentalida y sentirse mucho mejor con su persona.</p>
            </section>
            <section>
                <h3>Que Buscamos?</h3>
                <p>Buscamos crear una cultura de cuidado de nuestros pensamientos y emociones para crear un hábito de cuidado personal potenciador.</p>
            </section>
            <section>
                <h3>¿Cuales son nuestros objetivos?</h3>
                <p>Estamos en desarrollo de nuestra app y mejorando continuamente para brindar una mejor experiencia.</p>
            </section>
        </Wrapper>

    );
}

export default About;