import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import Place from "./Place";

function App() {

  return (
    <Container fluid>
      <Row>
        <h1>Compare The Things</h1>
      </Row>
      <Row>
        <Col>
          <Place />
        </Col>
        <Col>
          <Place />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
