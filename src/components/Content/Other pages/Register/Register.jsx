import React from 'react';
import FormHeading from '../../Forms/FormHeading';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Register() {
  const formStyle = {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '2rem',
    borderRadius: '8px',
    maxWidth: '600px', // Add maxWidth to keep the form contained
    margin: '0 auto' // Center the form on the page
  };

  const inputStyle = {
    background: 'black',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    color: 'white',
    padding: "10px",
    '::placeholder': {
      color: 'white'
    }
  };

  return (
    <Container className="py-4">
      <Container 
        className="mx-auto"
        style={formStyle}
      >
        <FormHeading 
          content="Registration Form" 
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
              <Form.Control
                size="sm"
                type="text"
                placeholder="First Name"
                style={inputStyle}
              />
            </Col>
            <Col>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Last Name"
                style={inputStyle}
              />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Control
                size="sm"
                placeholder="USN"
                style={inputStyle}
              />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Select 
                size="sm" 
                aria-label="Semester"
                style={inputStyle}
              >
                <option>Semester</option>
                {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </Form.Select>
            </Col>
            <Col>
              <Form.Select 
                size="sm" 
                aria-label="Section"
                style={inputStyle}
              >
                <option>Section</option>
                {['A', 'B', 'C', 'D', 'E', 'F'].map(section => (
                  <option key={section} value={section}>{section}</option>
                ))}
              </Form.Select>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Control
                size="sm"
                placeholder="Mobile Number"
                style={inputStyle}
              />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Select 
                size="sm" 
                aria-label="Domain"
                style={inputStyle}
              >
                <option>Domain of interest</option>
                <option value="A">App development</option>
                <option value="B">Web development</option>
                <option value="C">Competitive programming</option>
                <option value="D">Data Science and Machine Learning</option>
              </Form.Select>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Control
                size="sm"
                type="email"
                placeholder="Email ID"
                style={inputStyle}
              />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col className="text-center">
              <Button
                variant="outline-light"
                size="lg"
                className="font-['Montserrat'] text-lg hover:bg-white hover:text-black transition-all duration-300"
                style={{
                  width: '100%', // Make button responsive to container width
                  margin: "1rem 0"
                }}
              >
                REGISTER
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </Container>
  );
}

export default Register;
