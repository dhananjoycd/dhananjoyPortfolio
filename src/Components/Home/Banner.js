import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <Row>
        <Col>
          <Card className='border-0' >
            <Row xs={1} lg={2} className="g-3">
        <Col  className="d-flex align-items-center">
          <Card className='border-0' >
            <Card.Body>
            <Card.Img variant="top" src="http://ingenioushubs.com/tweetsbird-new/demo/images/banner-image.png" />
            </Card.Body>
          </Card>
        </Col>
        <Col className="d-flex align-items-center">
        <Card  className='border-0' >
            <Card.Body>
              <Card.Title>I am a mern srack developer</Card.Title>
              <Card.Text>
                [ ekhane amr object ki ta likhbo]  
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
          <Card.Footer className='bg-white border-0'>
            <div className="d-flex justify-content-center">
            <Button href="https://drive.google.com/uc?export=download&id=1uaj2xgGPE2irfL3fdkcgXeMeG-2VcJWx" >Download Resume</Button>
            </div>
            </Card.Footer>  
          </Card>
        </Col>
    </Row>
          </Card>
        </Col>
    </Row>
    );
};

export default Banner;