import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
    Card, 
    CardImg, 
    CardText, 
    CardBody,
    CardTitle,
    CardSubtitle,
    Media,
    Container,
    Row,
    Col,
    Button,
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

import Disqus from './Disqus';

const MyWork = () => (
    <div>
    <div className="banner2">
    <Navbar 
    color="faded" light
    expand="md"
    className="navbar-dark navbar-expand-sm content-container"
    >
    <div className="header__content">
    <Link to="/" >
    <img alt="Brand" className="brand" src="https://image.ibb.co/jvvQ5p/logo.png"/>
    </Link>
        <Nav 
        className="ml-auto" 
        navbar>
          <NavItem>
          <NavLink 
          className="margin-right nav-color"
          exact to="/"
          activeStyle={{
            fontWeight: 'bold',
            color: 'white'
           }}
           >
           About</NavLink>
          <NavLink 
          className="margin-right nav-color"
          exact to="/work"
          activeStyle={{
            fontWeight: 'bold',
            color: 'white'
           }}
           >
           Work</NavLink>
           <NavLink
           className="nav-color"
           exact to="/notes"
           activeStyle={{
             fontWeight: 'bold',
             color: 'white'
            }}
            >
            Notes</NavLink>
          </NavItem>
        </Nav>
    </div>    
    </Navbar>                  
    <h2>
    <figure class="transistion">
      <Media className="container">
        <Media object className="notes-img" src="https://image.ibb.co/fb8XLp/notes.png"/>
      </Media>										
    </figure>
    </h2>
    </div>

    <div className="body-section">

    <div className="content-container">

      <h2>
        <figure className="transistion">
          <Media className="container">
            <Media object className="body-logo-img" src="https://image.ibb.co/jvvQ5p/logo.png" />
          </Media>
        </figure>
      </h2>

      <h3 className="section-title"> Hi Again </h3>
      <p className="subtitle">This website was inspired by one of my favourite web designers - Sean Halpin. I love his use of 
      SVG images, CSS animation and artwork to create beautiful UI. I tried to recreate his design using React.js and 
      Reactstrap (Bootstrap for React). </p>

      <p className="subtitle">This is still an ongoing project so come back soon to se the finished product.</p>
      

    </div>

    <div className="breaker">
      <Container className="bg-stripe width-set">
        <Row>
          <div className="line"></div>
        </Row>
      </Container>
    </div>




      



    </div> 

    <Row className="footer">
      <Row className="footer-wrapper"> 
        <Container className="footer-container">
        <Col xs="6">
          <h4 className="footer-link">Github</h4>
          <h4 className="footer-link">LinkedIn</h4>
        </Col>
        <Col xs="6">
          <h4 className="footer-link right">Behance</h4>
        </Col>
        </Container>  

        
      </Row>
      <Row className="copyright-wrapper">
        <Container>
          <p className="copyright">© 2018 Nugoo. All rights reserved.</p>   
        </Container>
      </Row>

    </Row>

  </div>
);

export default MyWork;