import React from 'react';
import { Media, Container, Row, Col } from 'reactstrap';
import { Navigation } from './Navigation'
import { Footer } from './Footer';
import { Comments } from './Comments';


const MyWork = () => (
  <div>
    <div className="banner2">
      <Navigation />
      <h2>
        <figure class="transistion">
          <Media className="container">
            <Media object className="notes-img" src="https://image.ibb.co/fb8XLp/notes.png" />
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
        <p className="subtitle add-some-margin-2">Please let me know what you think of my work in the comments below</p>
      </div>
      <div className="breaker">
        <Container className="bg-stripe width-set">
          <Row>
            <div className="line"></div>
          </Row>
        </Container>
      </div>
    </div>
    <Comments />
    <Footer />
  </div>
);

export default MyWork;