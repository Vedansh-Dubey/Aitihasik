import Container from 'react-bootstrap/Container';
import React, { useState } from "react";
import Box from "@mui/material/Box";
import RegisterForm from '../Authentication Models/RegisterForm';
import LoginForm from '../Authentication Models/LoginForm';
import Modal from "@mui/material/Modal";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Navbar1() {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleOpen1 = () => setOpen1(true);
    const handleClose = () => setOpen(false);
    const handleClose1 = () => setOpen1(false);
    return (
        <Navbar bg="dark" variant="dark" expand="lg" style={{ position: "sticky", top: 0, zIndex: 10 }}>
            <Container>
                <Link to='/'><Navbar.Brand  >Aitihasik</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" style={{ flexGrow: "0" }}>
                    <Nav className="me-auto">
                        <Link to='/'><Nav.Link >Home</Nav.Link></Link>
                        <Nav.Link onClick={handleOpen} >Register</Nav.Link>
                        <Nav.Link onClick={handleOpen1}>Login</Nav.Link>
                        <Nav.Link >About Us</Nav.Link>
                        <Nav.Link >Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Modal
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                >
                    <Box >
                        <RegisterForm handleClose={handleClose} />
                    </Box>
                </Modal>
                <Modal
                    keepMounted
                    open={open1}
                    onClose={handleClose1}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                >
                    <Box >
                        <LoginForm handleClose={handleClose1} />
                    </Box>
                </Modal>
            </Container>
        </Navbar>
    );
}

export default Navbar1;