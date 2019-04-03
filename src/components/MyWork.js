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

import workImage from "../images/work-img.png";
import workJuggle from "../images/work-juggle.png";
import newMacauImage from "../images/macau.jpg";
import expensifyImage from "../images/expensify-img.png";
import sarrademImage from "../images/sarradem-img.png";
import marinaImage from "../images/marina-img.png";
import remoteDevs from "../images/remote_devs.JPG";
import gundaPowerImage from "../images/gundapower.jpg";



const MyWork = () => (
  <div>
    <div className="banner2">
      <Navigation />
      <h2>
        <figure class="transistion">
          <Media className="container">
            <Media object className="work-img" src={workImage} />
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
                <Media object className="my-work-img" src={workJuggle} />
              </Media>
            </figure>
          </h2>
          <h3 className="section-title-work"> Welcome</h3>
        <p className="subtitle">You'll find some of the recent work I've done below. Be patient with the demos as they're hosted on free heroku servers!</p>
        </div>
      </div>

      <div>
      <Card className="card-work-6">
        <CardImg className="card__image" top src={gundaPowerImage} alt="Gunda Power" />
        <CardBody>
          <CardTitle className="card__title">Gunda Power</CardTitle>
          <CardSubtitle className="card__subtitle">Web Design & Development</CardSubtitle>
          <CardText className="card__text">Static website powered by React.js and Gatsby</CardText>
          <a href="https://www.gundapower.com/" target="blank"><Button className="card__button-4">View Demo</Button></a>
        </CardBody>
      </Card>
        <Card className="card-work-5">
          <CardImg className="card__image" top src={remoteDevs} alt="Remote Devs" />
          <CardBody>
            <CardTitle className="card__title">Hobby Project</CardTitle>
            <CardSubtitle className="card__subtitle">Remote Devs</CardSubtitle>
            <CardText className="card__text">This is a web application I started building with React.js, it's still very much a work in progress!</CardText>
            <a href="https://trusting-easley-126adb.netlify.com/" target="blank"><Button className="card__button-2">View Demo</Button></a>
          </CardBody>
        </Card>
      </div>

      <div>
        <Card className="card-work">
          <CardImg className="card__image" top src={newMacauImage} alt="New Macau Casino" />
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
          <CardImg className="card__image" top src={expensifyImage} alt="Expensify App" />
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
          <CardImg className="card__image" top src={sarrademImage} alt="Corporate Website" />
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
        <CardImg className="card__image" top src={marinaImage} alt="Corporate Website" />
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