import React from 'react';
import './styles/App.css';
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';




 export default class Modlandia extends React.Component {
  render() {
    return (
      <Grid className="featured">
            <h2>Modlandia</h2>

          <Row>
            <Col lg={3} md={4} sm={6}>
                <h2>Flickerbox</h2>
                <p>The Portland office of Flickerbox Inc., is the home base of Verge and where we got our start. It is located in downtown Portland. We hold monthly receptions for showing artists and are always available for viewing appointments. Please note, because this is a private office, there are no drop ins.</p>
                <p><Button>View details »</Button></p>
              </Col>
            <Col lg={3} md={4} sm={6}>
                <h2>The Red Fox</h2>
                <p>This cozy, North Portland Bar has monthly rotating shows of local Portland emerging artists. Each month we host an artist reception. The bar is open 7 days a week, 3pm – 1:30am. They have great food too!</p>
                <p>5128 N. Albina, Portland OR 97217</p>
                <p><Button>View details »</Button></p>
            </Col>
          </Row>
        </Grid>

    );
  }
}
