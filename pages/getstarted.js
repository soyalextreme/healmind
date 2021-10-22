import React from 'react';
import ButtonRedirect from '../components/ButtonRedirect';


const getStarted = () => {
    return (
        <>
            <section>
                <h1>Paso 1</h1>
                <p>Siguenos en Instagram y mandanos un mensaje para solicitar tu cita, pon algunos de los motivos por
                    los que requieres una cita "Con esa informacion nosotros te podremos orientar mejor".</p>
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
            <section>
                <ButtonRedirect text="Mas sobre nosotros!" redirect="/about" />
            </section>
        </>
    );
}

export default getStarted;