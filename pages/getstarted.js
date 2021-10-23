import React from 'react';
import ButtonRedirect from '../components/ButtonRedirect';
import styled from "styled-components";

const Wrapper = styled.div`
    margin: 5rem 0;

    h1 {
        color: #2E4494;
        margin-bottom: 1rem;
    }

    section {
        padding: 3rem;
        border: 2px #A7DDC7 dotted;
        width: 80vw;
        text-align: center;
        margin-left: 10vw;
        margin-bottom: 2rem;
    }

    a {
        font-style: italic;
        color: #2E4494; 
    }

`;

const getStarted = () => {
    return (
        <>
            <Wrapper>
                <section>
                    <h1>Paso 1</h1>
                    <p>Siguenos en Instagram y mandanos un mensaje para solicitar tu cita.</p>
                    <a href="https://www.instagram.com/healmind_/" target="_blank">Nuestro Instagram!</a>
                </section>
                <section>
                    <h1>Paso 2</h1>
                    <p>Nosotros te mandaremos la informacion sobre tu posible cita y más detalles
                        sobre los profesionales que te pueden atender.</p>
                </section>
                <section>
                    <h1>Paso 3</h1>
                    <p>Te mandamos un link de Zoom de tu reunion asi como los horarios en que se pueda realizar.</p>
                </section>
                <section>
                    <h1>Paso 4</h1>
                    <p>Un profesional llevara tu caso documentado y te ayudara en el progreso de tus
                        sentimientos.
                    </p>
                </section>
                <section>
                    <h1>Paso 5</h1>
                    <p>
                        Te mandaremos una encuesta de calidad y escucharemos tus comentarios en dias
                        posteriores.
                    </p>
                </section>
            </Wrapper>
            <section style={{ margin: "auto", textAlign: 'center' }}>
                <ButtonRedirect text="Mas sobre nosotros!" redirect="/about" />
            </section>
        </>
    );
}

export default getStarted;