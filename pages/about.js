import React from 'react';
import ButtonRedirect from '../components/ButtonRedirect';


const About = () => {
    return (<>
        <h1>Sobre Nosotros</h1>
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

        <ButtonRedirect text="Agenda tu Cita" redirect="/getstarted" />
    </>);
}

export default About;