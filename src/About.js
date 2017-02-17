import React from 'react';
import './styles/App.css';
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import alanna from './images/alanna.jpg';



 export default class About extends React.Component {
  render() {
    return (
      <Grid className="featured">
            <h2>About Verge PDX</h2>

          <Row>
            <Col sm={4}>
                <img src={alanna} className="featuredImg" alt="alanna" />
                
              </Col>
            <Col sm={8}>
                <p>Verge is a Portland-based art curation and collaboration service. Let us curate your professional space with monthly or quarterly rotations of professional works from Oregon-based emerging artists.</p>

                <p>We are always on the lookout for more spaces and artists. Contact Alanna if you are a Portland area business looking for rotating art exhibits or if you are an artist interested in participating.</p>
                <p><Button>View details »</Button></p>
            </Col>
          </Row>
        </Grid>

    );
  }
}
