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
        <Media object className="work-img" src="https://image.ibb.co/b3Bit9/my_work.png"/>
      </Media>										
    </figure>
    </h2>
    </div>

    <div className="body-section remove-margin">

    <div className="content-container add-some-margin">
    <div className="section-title">
    <h2>I'll be adding the rest of my work soon... As soon as I get back from a much needed vacation!</h2>
    <h2  className="add-some-margin">
              <figure className="transistion">
                <Media className="container">
                  <Media object className="body-logo-img" src="https://image.ibb.co/dDzx39/logo_dev_2.png" class="body-logo-img media-object" />
                </Media>
              </figure>
            </h2>
    </div>
    </div>

           
    <div>
    <Card className="card-work">
      <CardImg className="card__image" top src="https://image.ibb.co/iAoHoK/cryptos_nugoo.png" alt="Card image cap" />
      <CardBody>
        <CardTitle className="card__title">Cryptocurrency Tracker</CardTitle>
        <CardSubtitle className="card__subtitle">Realtime Market Information</CardSubtitle>
        <CardText className="card__text">This is a mock-up of coinmarketcap.com and uses their API to fetch real-time market data. This is still a work in progress!</CardText>
        <a href="http://salty-cove-93789.herokuapp.com/" target="_blank"><Button className="card__button">View Demo</Button></a>
      </CardBody>
    </Card>
    </div>  

            



  


    </div> 

    <Row className="footer remove-margin">
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