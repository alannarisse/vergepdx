import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';

export default class Footer extends React.Component {
  render() {
    return (
      <Grid>
        <hr />
        <footer>
          <p>© Verge PDX 2017</p>
        </footer>
      </Grid>
    );
  }
}
