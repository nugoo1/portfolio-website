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
          <NavLink exact to="/"
          activeStyle={{
            fontWeight: 'bold',
            color: 'white'
           }}
           >
           About</NavLink>
          <NavLink exact to="/work"
          activeStyle={{
            fontWeight: 'bold',
            color: 'white'
           }}
           >
           Work</NavLink>
           <NavLink exact to="/notes"
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
      

           
    <div>
    <Card>
      <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
      <CardBody>
        <CardTitle>Card title</CardTitle>
        <CardSubtitle>Card subtitle</CardSubtitle>
        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        <Button>Button</Button>
      </CardBody>
    </Card>
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