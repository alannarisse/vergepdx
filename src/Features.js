import React from 'react';
import './styles/App.css';
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import schlunegger from './images/schlunegger348x220.jpg';
import mulder from './images/mulder348x220.jpg';
import lorish from './images/lorish348x220.jpg';


 export default class Features extends React.Component {
  render() {
    return (
      <Grid className="featured">
      <h2>Current Exhibitions</h2>
          <Row>
            <Col lg={4} md={4} sm={6}>
                <img src={schlunegger} className="featuredImg" alt="schlunegger" />
                <h2>Danielle Schlunegger-Warner</h2>
                <p>The Red Fox<br/>
                  February 2017<br/>
                  Opening Reception: February 5th 7-10pm<br/>
                  5128 N Albina, Portland OR 97217
                  </p>
                <p><Button>View details »</Button></p>
              </Col>
            <Col lg={4} md={4} sm={6}>
                <img src={mulder} className="featuredImg" alt="mulder" />
                <h2>Rachel Mulder</h2>
                <p>Sit quia nemo quis enim provident porro eaque accusamus tenetur provident aliquid commodi? Velit nesciunt maiores obcaecati totam praesentium sint vitae exercitationem quaerat maxime iusto et! Consequatur aspernatur sit impedit.</p>
                <p><Button>View details »</Button></p>
            </Col>
            <Col lg={4} md={4} sm={6}>
              <img src={lorish} className="featuredImg" alt="lorish" />
              <h2>Andrew Lorish</h2>
              <p>Dolor aliquid dolores perferendis repellendus cum! Quam maiores blanditiis cupiditate voluptatibus voluptas aliquid nisi placeat tempora. Rem debitis accusamus pariatur officia corrupti. Architecto fuga reiciendis quos rem hic? Suscipit dignissimos.</p>
              <p><Button>View details »</Button></p>
            </Col>

          </Row>
        </Grid>

    );
  }
}
