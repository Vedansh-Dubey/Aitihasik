import React from 'react'
import styled from 'styled-components'
import { Typography, Container } from '@mui/material'

const Navbar = () => {
    return (
        <div style={{ background: "#080c24ff" }}>
            <Container maxWidth={'md'}>
                <Nav>
                    <ul>
                        <div style={{ flex: "1" }}>
                            <Typography variant='h6' color="white" style={{ cursor: "pointer" }}> Aitihasik</Typography>
                        </div>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact</li>
                    </ul>
                </Nav>
            </Container>
        </div>
    )
}


const Nav = styled.nav`
background-color:  #080c24ff;
font-size: 1.1rem;
ul{
    min-height: 5rem;
    font-weight: 500;
    letter-spacing: 0.12rem;
    display: flex;
    list-style: none;
    align-items: center;
    color: white;
    justify-content: center;
    gap: 1rem;
    li{
        padding: 1rem 1.2rem;

        &:hover{
            background-color: #2B6BE9;
        }
    }
}
`
export default Navbar