import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button'
import './Header.scss'
import { NavLink } from 'react-router-dom';
function Logo(){
    let imgUrl = "assets/img/Logo.svg";
    let logoTxt = "Chef's Kitchen."
    return (
        <Row className="align-items-center">
            <Col xs={12} md={3}> <img src={imgUrl} alt="Logo" /></Col>
            <Col  md={9}  className="px-0 d-none d-md-block"><h4 className="mb-0">{logoTxt}</h4></Col>
         </Row>
       
    )
}

function Menu(){
    let menuUrl = [
        {
            "menuItemName": "Home",
            "menuItemLink": ""
        },
        {
            "menuItemName": "About Us",
            "menuItemLink": "/about"
        },
        {
            "menuItemName": "Recipe",
            "menuItemLink": ""
        },
        {
            "menuItemName": "Gallery",
            "menuItemLink": ""
        },
        {
            "menuItemName": "Contact",
            "menuItemLink": ""
        }
    ];
    return(
        <Row className="align-items-center">
            <Col xs={6} md={8}>
                <Nav className="me-auto">
                    {menuUrl.map((menu) => (
                        <Nav.Link as={NavLink} to={menu.menuItemLink}>
                        {menu.menuItemName}
                        </Nav.Link>
                    ))}
                      <Nav.Link className="d-block d-md-none d-lg-none">Menu</Nav.Link>
                </Nav>
            </Col>
            <Col xs={6} md={4} className="justify-content-end">
              <Button className="btn btn-Primary btn-md me-2">Sign In</Button>
              <Button className="btn btn-danger btn-md">Sign Up</Button>
            </Col>         
        </Row>
       
    )
}

const Header = () =>{
    return (
        <header>
        <Container>
            <Row className="align-items-center">
                <Col xs={4} md={4}><Logo/></Col>
                <Col xs={8} md={8}><Menu /></Col>
            </Row>
        </Container>
        </header>
    )
}
export default Header;