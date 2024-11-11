import React from 'react';
import FormHeading from '../../Forms/FormHeading';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Contact() {
  const formStyle = {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(5px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '2rem',
    borderRadius: '8px',
    maxWidth: '600px',
    margin: '25px auto',
  };

  const inputStyle = {
    background: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    color: 'white',
    padding: '10px',
    '::placeholder': {
      color: 'white',
      opacity: '1' 
    }
  };

  return (
    <Container className="py-4">
      <Container style={formStyle}>
        <FormHeading 
          content="Contact Us" 
          styling={{
            color: "white",
            textAlign: "center",
            fontFamily: "Montserrat",
            marginBottom: "2rem"
          }}
        />
        
        <Form>
          <Row className="mb-3">
            <Col>
              <Form.Group>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder="First Name"
                  style={inputStyle}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder="Last Name"
                  style={inputStyle}
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Control
              size="sm"
              type="email"
              placeholder="Email ID"
              style={inputStyle}
            />
            <Form.Label className="text-white text-base font-['Aileron'] opacity-50">
              Please use a real email address
            </Form.Label>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              size="sm"
              type="text"
              placeholder="Subject"
              style={inputStyle}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              size="sm"
              as="textarea"
              placeholder="Message"
              className="h-40"
              style={inputStyle}
            />
          </Form.Group>

          <Row className="mb-3 text-center">
            <Button
              variant="outline-light"
              size="lg"
              className="font-['Montserrat'] text-lg hover:bg-white hover:text-black transition-all duration-300"
              style={{
                width: '100%',
                marginTop: "1rem"
              }}
            >
              Send Message
            </Button>
          </Row>
        </Form>
      </Container>
    </Container>
  );
}

export default Contact;
