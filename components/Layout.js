import React, { useEffect } from 'react';
import Footer from './Footer';
import NavBar from "./NavBar"


const Layout = ({ children }) => {

    useEffect(() => {

    }, [])

    return (
        <>
            <NavBar />
            {children}
            <Footer />
        </>
    );
}

export default Layout;