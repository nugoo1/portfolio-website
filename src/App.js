import React, { Component } from 'react';
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
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

class App extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
              <div className="banner">
              <Navbar 
              color="faded" light
              expand="md"
              className="navbar-dark navbar-expand-sm content-container"
              >
              <div className="header__content">
              <a class="navbar-brand" href="#">
              <img alt="Brand" className="brand" src="https://image.ibb.co/jvvQ5p/logo.png"/>
              </a>
                  <Nav 
                  className="ml-auto" 
                  navbar>
                    <NavItem>
                    <a href="http://www.github.com/nugoo1">
                    <p className="header__link">GitHub</p>
                    </a>
                    </NavItem>
                  </Nav>
              </div>    
              </Navbar>                  
              <h2>
              <figure class="transistion">
                <Media className="container">
                  <Media object className="name-img" src="https://image.ibb.co/nr9zgU/nuwan.png"/>
                </Media>			
                <Media className="container">
                  <Media object className="web-dev-img" src="https://image.ibb.co/f8eeWU/web_dev.png"/>
                </Media>								
              </figure>
              </h2>
              </div>

              <div className="body-section">
                
              <div className="content-container">
                
                <h2>
                <figure class="transistion">
                  <Media className="container">
                    <Media object className="body-logo-img" src="https://image.ibb.co/jvvQ5p/logo.png"/>
                  </Media>						
                </figure>
                </h2>

                <h3 className="section-title"> Hello </h3>
                  <p className="subtitle">Welcome to my portfolio website. I'm a web designer / developer living in Colombo, Sri Lanka.
                  My passion is in technology and trying to learn all the little things that makes the world go round!
                  Right now, I'm working towards becoming a full stack developer.</p>
                </div>

                <div class="breaker">
		              <Container className="bg-stripe">
		              	<Row>	
				            	<div className="line"></div>			
		              	</Row>
	              	</Container>
	              </div>
            

                <div className="content-container">
                <h2 className="section-title"> What Can I Do? </h2>
                <Container className="media-box">
                <Row>
                <Col>
                <Col className="flex-it">
                <Media className="container flex-it bg-stripe">
                  <Media object className="body-logo-img" src="https://image.ibb.co/jvvQ5p/logo.png"/>
                
                <div className="bubble-tag">
                  <div className="bubble right">
                  </div>
                </div>	
                </Media>
                  
              </Col>
              <Col>	
                <h3 className="content-title left">Design what you want.</h3>
                <p className="left">I like keeping my designs simple. Most of the time, I look for inspiration from other designers and developers.</p>
              </Col> 
                
                </Col>
                   
                </Row>
                </Container>

                <div class="breaker">
                <Container className="bg-stripe">
                  <Row>	
                    <div className="line"></div>			
                  </Row>
                </Container>
                </div>

                <Container className="media-box">
                <Row>
                <Col>
                <Col className="flex-it">
                <Media className="container flex-it bg-stripe">
                <div className="bubble-tag">
                  <div className="bubble2 right">
                </div>
                <Media object className="body-logo-img" src="https://image.ibb.co/jvvQ5p/logo.png"/>
                </div>	
                </Media>
                  
              </Col>
              <Col>	
                <h3 className="content-title left">Develop what you need.</h3>
                <p className="left">I like keeping my designs simple. Most of the time, I look for inspiration from other pros
                in the scene.</p>
              </Col> 
                
                </Col>
                   
                </Row>
                </Container>

                
                <div class="breaker">
                <Container className="bg-stripe">
                  <Row>	
                    <div className="line"></div>			
                  </Row>
                </Container>
                </div>


                <h3 className="section-title"> Need my help? </h3>    
                <h4 className="content-title">I'm available for freelance work</h4>
                  <p className="subtitle">If you need a website developed, I'm your guy!</p>
                  <div className="button-container">
                  <Button
                    tag="a"
                    color="success"
                    size="large"
                    href="https://expensify-app-nugoo.herokuapp.com"
                    target="_blank"
                    >
                        SEND MESSAGE
                    </Button>
    
 
                  </div>
                  
                </div>


              </div>       
            </div>
        );
    }
}

export default App;


// <Container>
//                 <Row>
//                     <Col>
//                        <h3>Some Websites & Web Apps I've built on my own</h3>
//                        <p>For more info. on collaborated work, please send me an email on nuwan_g@lve.com</p>
//                     </Col>
//                 </Row>
//                 <Row>
//                     <Col sm="4">
//                       <Card>
//                         <CardImg top width="100%" src="https://image.ibb.co/cSXzd9/expen.jpg" alt="Expensify Application" />
//                           <CardBody>
//                             <CardTitle>Expensify Application</CardTitle>
//                               <CardSubtitle>Uses Firebase Authentication, Real Time Database & Redux</CardSubtitle>
//                                 <CardText>This is built using React.js, using Firebase Authentication and Real Time Database to track expenses.</CardText>
//                                 <Button
//                                 tag="a"
//                                 color="primary"
//                                 size="large"
//                                 href="https://expensify-app-nugoo.herokuapp.com"
//                                 target="_blank"
//                                 >
//                                     View Demo
//                                 </Button>
//                           </CardBody>
//                       </Card>
//                     </Col>
//                     <Col sm="4">
//                       <Card>
//                         <CardImg top width="100%" src="https://image.ibb.co/kNgxFp/crypto.jpg" alt="Crypto Application" />
//                           <CardBody>
//                             <CardTitle>Cryptocurrency Application (Under Development)</CardTitle>
//                               <CardSubtitle>Mock up of Coinmarketcap.com</CardSubtitle>
//                                 <CardText>This is built using React.js taking advantage of CoinMarketCap's API to show realtime market data.</CardText>
//                               <Button
//                               tag="a"
//                               color="primary"
//                               size="large"
//                               href="https://salty-cove-93789.herokuapp.com/"
//                               target="_blank"
//                               >
//                                   View Demo
//                               </Button>
//                           </CardBody>
//                       </Card>
//                     </Col>
//                     <Col sm="4">
//                       <Card>
//                         <CardImg top width="100%" src="https://image.ibb.co/eNgWrU/sarra.jpg" alt="Sarradem Website" />
//                           <CardBody>
//                             <CardTitle>Old School Bootstrap</CardTitle>
//                               <CardSubtitle>Uses Bootstrap, JQuery and fundamental Front-End tools.</CardSubtitle>
//                                 <CardText>This is built using fundamental front end languages like HTML, CSS, Javascript and JQuery.</CardText>
//                                 <Button
//                                 tag="a"
//                                 color="primary"
//                                 size="large"
//                                 href="http://sarradem.com"
//                                 target="_blank"
//                                 >
//                                     View Demo
//                                 </Button>
//                           </CardBody>
//                       </Card>
//                     </Col>
//                   </Row>
//                   <Row>
//                     <Col>
//                      <h3>Graphic Design Work Over The Years</h3>
//                      <p>I use Adobe Illustrator & Photoshop for most of my work.</p>
//                     </Col>
//                   </Row>
//                   <Row>
//                     <Col sm="4">
//                       <Card>
//                         <CardImg top width="100%" src="https://preview.ibb.co/mBu1rU/marina.jpg" alt="Casino Marina Magazine Advert" />
//                           <CardBody>
//                               <CardSubtitle>Casino Marina Art Direction, Project Management & Graphic Design</CardSubtitle>
//                           </CardBody>
//                       </Card>
//                     </Col>
//                     <Col sm="4">
//                       <Card>
//                         <CardImg top width="100%" src="https://image.ibb.co/jjArrU/marina3.jpg" alt="Casino Marina Magazine Advert" />
//                           <CardBody>
//                               <CardSubtitle>Casino Marina Art Direction, Project Management & Graphic Design</CardSubtitle>
//                           </CardBody>
//                       </Card>
//                     </Col>
//                     <Col sm="4">
//                       <Card>
//                         <CardImg top width="100%" src="https://preview.ibb.co/daPvJ9/marina2.jpg" alt="Casino Marina Magazine Advert" />
//                           <CardBody>
//                               <CardSubtitle>Casino Marina Art Direction, Project Management & Graphic Design</CardSubtitle>
//                           </CardBody>
//                       </Card>
//                     </Col>
//                   </Row>
//                   <Row>
//                     <Col sm="4">
//                       <Card>
//                         <CardImg top width="100%" src="https://preview.ibb.co/mBu1rU/marina.jpg" alt="Casino Marina Magazine Advert" />
//                           <CardBody>
//                               <CardSubtitle>Casino Marina Art Direction, Project Management & Graphic Design</CardSubtitle>
//                           </CardBody>
//                       </Card>
//                     </Col>
//                     <Col sm="4">
//                       <Card>
//                         <CardImg top width="100%" src="https://image.ibb.co/cxmLkp/dbu.jpg" alt="Dutch Burgher Union Profile" />
//                           <CardBody>
//                               <CardSubtitle>Phone Click & Photoshop Edit (The DBU)</CardSubtitle>
//                           </CardBody>
//                       </Card>
//                     </Col>
//                     <Col sm="4">
//                       <Card>
//                         <CardImg top width="100%" src="https://preview.ibb.co/daPvJ9/marina2.jpg" alt="Casino Marina Magazine Advert" />
//                           <CardBody>
//                               <CardSubtitle>Casino Marina Art Direction, Project Management & Graphic Design</CardSubtitle>
//                           </CardBody>
//                       </Card>
//                     </Col>
//                   </Row>
//                 <Row>
//               </Row>
//             </Container>