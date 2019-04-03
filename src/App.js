import React, { Component } from "react";
import { Navigation } from "./components/Navigation";
import { Media, Container, Row, Col, Button } from "reactstrap";
import { Footer } from "./components/Footer";

import Skills from "./components/Skills";

import nameImage from "./images/name-img.png";
import webDevImage from "./images/web-dev.png";
import bodyImage from "./images/body-img.png";
import bodyCompImage from "./images/body-comp.png";
import bodyJuggleImage from "./images/body-juggle.png";

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
          <Navigation />
          <h2>
            <figure className="transistion">
              <Media className="container">
                <Media object className="name-img" src={nameImage} />
              </Media>
              <Media className="container">
                <Media object className="web-dev-img" src={webDevImage} />
              </Media>
            </figure>
          </h2>
        </div>

        <div className="body-section">
          <div className="content-container">
            <h2>
              <figure className="transistion">
                <Media className="container">
                  <Media object className="body-logo-img" src={bodyImage} />
                </Media>
              </figure>
            </h2>

            <h3 className="section-title"> Welcome </h3>
            <p className="subtitle">
              Welcome to my portfolio website. I'm a web designer / developer
              living in Colombo, Sri Lanka. My passion is in technology and
              trying to learn all the little things that makes the world go
              round! Right now im working as a freelance fullstack developer
              from things like websites & mobile apps to cloud based systems
              using robust technologies like React, React Native, Nodejs,
              Socket.io, GraphQL and Electron.
            </p>
          </div>

          <div className="breaker">
            <Container className="bg-stripe width-set">
              <Row>
                <div className="line" />
              </Row>
            </Container>
          </div>

          <div className="content-container">
            <h2 className="section-title"> What Can I Do? </h2>
            <Container className="media-box">
              <Row>
                <Col>
                  <Col className="flex-it">
                    <Media className="container flex-it bg-stripe width-max">
                      <Media
                        object
                        className="body-logo-img"
                        src={bodyCompImage}
                      />

                      <div className="bubble-tag">
                        <div className="bubble right" />
                      </div>
                    </Media>
                  </Col>
                  <Col>
                    <h3 className="content-title left">
                      Design what you want.
                    </h3>
                    <p className="left">
                      I like keeping my designs simple. Most of the time, I look
                      for inspiration from other designers and developers.
                    </p>
                  </Col>
                </Col>
              </Row>
            </Container>

            <Container className="media-box">
              <Row>
                <Col>
                  <Col className="flex-it">
                    <Media className="container flex-it bg-stripe width-max">
                      <div className="bubble-tag">
                        <div className="bubble2 right" />
                      </div>
                      <Media
                        object
                        className="body-logo-img"
                        src={bodyJuggleImage}
                      />
                    </Media>
                  </Col>
                  <Col>
                    <h3 className="content-title left">
                      Develop what you need.
                    </h3>
                    <p className="left">
                      I'm a full stack developer on the MERN stack. I'm focusing
                      on React.Js, React Native & Node.Js for my applications as
                      they modern, blazing fast and have huge supporting
                      communities.
                    </p>
                  </Col>
                </Col>
              </Row>
            </Container>

            <div className="breaker">
              <Container className="bg-stripe width-set">
                <Row>
                  <div className="line" />
                </Row>
              </Container>
            </div>

            <h2 className="message-title"> Need my help? </h2>
            <h4 className=" message-subtitle">
              I'm available for freelance work
            </h4>
            <p className="subtitle">
              If you need some help with designing and developing your website,
              hire me!
            </p>

            <div className="button-container">
              <a className="message-link" href="mailto:nuwan_g@live.com">
                <Button
                  className="button-color"
                  color="success"
                  size="large"
                  target="_blank"
                >
                  SEND MESSAGE
                </Button>
              </a>
            </div>
          </div>
          <Skills />
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
