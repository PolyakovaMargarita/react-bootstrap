import React from "react";
import { Container, Form, FormControl, Nav, Navbar, Button } from "react-bootstrap";
import logo from "../logo.svg"
import { Routes, Route } from "react-router-dom"
import About from "../Pages/About.js";
import Contacts from "../Pages/Contacts.js";
import Blog from "../Pages/Blog.js";
import Home from "../Pages/Home.js";


const Header = () => {

        return (
            <>
                <Navbar sticky="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                className="d-inline-block align-top"
                                alt="Logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/"> Home </Nav.Link>
                                <Nav.Link href="/about"> About us </Nav.Link>
                                <Nav.Link href="/contacts"> Contacts </Nav.Link>
                                <Nav.Link href="/blog"> Blog </Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <FormControl 
                                    type="text" 
                                    placeholder="Search" 
                                    className="me-sm-2"
                                />
                                <Button variant="outline-info">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contacts" element={<Contacts />} />
                    <Route path="blog" element={<Blog />} />
                </Routes>
            </>
        )
}

export default Header;