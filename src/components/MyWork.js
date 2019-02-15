import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Media,
  Button
} from 'reactstrap';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

const MyWork = () => (
  <div>
    <div className="banner2">
      <Navigation />
      <h2>
        <figure class="transistion">
          <Media className="container">
            <Media object className="work-img" src="https://image.ibb.co/b3Bit9/my_work.png" />
          </Media>
        </figure>
      </h2>
    </div>

    <div className="body-section remove-margin">
      <div className="container">
        <div className="content-container add-some-margin">
          <h2 className="add-some-margin">
            <figure className="transistion">
              <Media className="container2">
                <Media object className="my-work-img" src="https://image.ibb.co/dDzx39/logo_dev_2.png" />
              </Media>
            </figure>
          </h2>
          <h3 className="section-title-work"> Welcome</h3>
        <p className="subtitle">You'll find some of the recent work I've done below. Be patient with the demos as they're hosted on free heroku servers!</p>
        </div>
      </div>

      <div>
        <Card className="card-work">
          <CardImg className="card__image" top src="https://i.ibb.co/VJC0hy4/seee.jpg" alt="Crypto Tracker" />
          <CardBody>
            <CardTitle className="card__title">Casino Website</CardTitle>
            <CardSubtitle className="card__subtitle">New Macau Casino</CardSubtitle>
            <CardText className="card__text">This website is built with React.js and Gatsby, which makes it optimized straight outta the box!</CardText>
            <a href="https://newmacaucasino.com/" target="blank"><Button className="card__button">View Demo</Button></a>
          </CardBody>
        </Card>
      </div>
      
      <div>
        <Card className="card-work-2">
          <CardImg className="card__image" top src="https://image.ibb.co/i0WbXp/expensify_nugoo.png" alt="Expensify App" />
          <CardBody>
            <CardTitle className="card__title">Expensify Application</CardTitle>
            <CardSubtitle className="card__subtitle">Firebase Realtime Database</CardSubtitle>
            <CardText className="card__text">Login with your Facebook, Google or Github account and track all your expenses through this budget app.</CardText>
            <a href="https://expensify-app-nugoo.herokuapp.com/" target="blank"><Button className="card__button-2">View Demo</Button></a>
          </CardBody>
        </Card>
      </div>

      <div>
        <Card className="card-work-3">
          <CardImg className="card__image" top src="https://image.ibb.co/nQTvQ9/sarradem_nugoo.png" alt="Corporate Website" />
          <CardBody>
            <CardTitle className="card__title">Corporate Website</CardTitle>
            <CardSubtitle className="card__subtitle">Old School Bootstrap & Javascript</CardSubtitle>
            <CardText className="card__text">I made this for using HTML, CSS and Javascript (some JQuery too).</CardText>
            <a href="http://www.sarradem.com/" target="blank"><Button className="card__button-3">View Demo</Button></a>
          </CardBody>
        </Card>
      </div>

      <div>
      <Card className="card-work-4">
        <CardImg className="card__image" top src="https://image.ibb.co/eSkj2p/marina_nugoo.png" alt="Corporate Website" />
        <CardBody>
          <CardTitle className="card__title">Marketing Campaign</CardTitle>
          <CardSubtitle className="card__subtitle">Art Direction & Coordination</CardSubtitle>
          <CardText className="card__text">This is something I'm quite proud of.. Some of these photos ended up on the back cover of the Serendib Magazine (Sri Lankan Airlines).</CardText>
          <a href="https://www.behance.net/gallery/69189333/Casino-Marina-Magazine-Ad" target="blank"><Button className="card__button-4">View on Behance</Button></a>
        </CardBody>
      </Card>
    </div>
    </div>

    <Footer />

  </div>
);

export default MyWork;