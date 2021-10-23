import React from 'react';
import { Navbar, Container, Nav } from "react-bootstrap"
import Link from "next/link"

const NavBar = () => {
    return (
        <Navbar style={{ backgroundColor: "#2E4494" }} expand="lg">
            <Container>
                <Link href="/" passHref>
                    < Navbar.Brand href="#home" >
                        <img
                            src="/static/logo-healmind.png"
                            width="100"
                            className="d-inline-block align-top"
                            alt="HealMind Logo"
                        />
                    </Navbar.Brand >
                </Link >
            </Container >
        </Navbar >
    );
}

export default NavBar;