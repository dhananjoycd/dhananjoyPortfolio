import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const ReCapeID = () => {
    return (
        <div>
                  <Row>
        <Col>
          <Card className='border-0' >
            <Row xs={1} md={2} className="g-1">

        <Col  className="d-flex align-items-center">
          <Card className='border-0' >
            <Card.Body>
            <Card.Img variant="top" src="https://i.ibb.co/ckL1zmV/Passportdd.jpg" />
            <Card.Body>
              <Card.Title>Who Am I ?</Card.Title>
              <Card.Text>
[about me hobe here]

                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>

            </Card.Body>
          </Card>
        </Col>

        <Col className="d-flex align-items-center">
        <Card  className='border-0' >
            <Card.Body>
            <div className="d-flex justify-content-center">
              <h3>MY Skill gula thakbe ekhane</h3>
          </div>
              <Card.Text>
[about me hobe here]

                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
          <Card.Footer className='bg-white border-0'>
          <Card.Title>Get Social:
 social id gula thakbe icon diye</Card.Title>

            <div className="d-flex justify-content-center">

                ekhane amk hire korar jonno markplace er btn thakbe
            <Button href="https://drive.google.com/uc?export=download&id=1uaj2xgGPE2irfL3fdkcgXeMeG-2VcJWx" >Download Resume</Button>
            </div>
            </Card.Footer>  
          </Card>
        </Col>

    </Row>
          </Card>
         

        </Col>
    </Row>
        </div>
    );
};

export default ReCapeID;