import { Container, Row, Col } from 'react-bootstrap';

const HeroSection = () => {
  return (
    <div className="hero-section text-center bg-black">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="mb-3">
            <img
              src="../../public/1a.png"
              alt="Chill"
              className="img-fluid"
              style={{ width: '100%', height: 'auto' }} 
            />
          </Col>
          <Col xs={12} md={6} className="mb-3">
            <img
              src="../../public/1b.png"
              alt="Musica Latina"
              className="img-fluid"
              style={{ width: '100%', height: 'auto' }} 
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;

