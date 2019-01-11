import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Hero alt="complete labor" backgroundImage="https://images.unsplash.com/photo-1522319532979-f1c35f2f1ae8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2146&q=80">
        <h1><i>Call Us</i></h1>
        <h2>For a free consultation</h2>
        <a href="tel:3463147214"><img alt="complete labor" id="phone-icon" className="animated swing slow infinite" src="https://pngimage.net/wp-content/uploads/2018/06/white-phone-icon-png-transparent-7.png" width="20%" height="auto"></img></a>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h2><b>Construction and Remodeling Services</b></h2>
            <hr></hr>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <h3>
              Experienced Professionals
            </h3>
            <p>
              Steve and the team have been designing, building and remodeling for over 15 years.
            </p>
            <h3>
              Here to Serve You
            </h3>
            <p>
              On top of your free consultation, we will closely collaborate through every step of the process.
            </p>
            <h3>
              Any Special Project
            </h3>
            <p>
              We're ready to get creative with you! Whether it's a project from scratch or a simple remodel.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
