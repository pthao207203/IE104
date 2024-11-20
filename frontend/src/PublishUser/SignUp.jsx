import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navigation from './Navigation';
import SignUpForm from './SignUpForm';

function SignUp() {
  return (
    <div className="bg-[url('Image/BG.png')] bg-cover bg-center flex overflow-hidden flex-col pb-52 relative bg-[#131313] max-md:pb-24">  
      <Navigation />

      <Container fluid className="flex justify-center align-middle mt-5">
        <Row className="justify-center w-100">
          <Col md={12} lg={6} className="relative flex self-center px-20 py-10 mt-10 max-w-full bg-white/10 backdrop-blur-[10px] w-[688px] max-md:px-5 max-md:mt-10">
            <SignUpForm />
            <button type="button" aria-label="Close" className="absolute top-6 right-6 z-10 h-8 w-8 flex items-center justify-center">
              <img src="Icon/X.svg" alt="Close" className="object-contain w-full h-full" />
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SignUp;