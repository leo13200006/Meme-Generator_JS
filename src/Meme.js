import React, { Component } from 'react';
import { Button,Image,Row,Container,Col } from 'react-bootstrap';
import './App.css'
import Form from 'react-bootstrap/Form';

class Meme extends Component{
    render() {
        return (
            <div className="justify-content-center">
                <Form className="row container justify-content-center">
            <Form.Group controlId="formBasicEmail" className="col-lg-6">
            <Form.Label>Top Text</Form.Label>
             <Form.Control type="email" placeholder="Enter text" />
            <Form.Text className="text-muted">
              This will be displayed on top side of the meme.
            </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicEmail" className="col-lg-6">
            <Form.Label>Bottom Text</Form.Label>
             <Form.Control type="email" placeholder="Enter text" />
            <Form.Text className="text-muted">
            This will be displayed on bottom side of the meme.
            </Form.Text>
            </Form.Group>
            <Button variant="primary">Submit</Button>
            </Form>


            <Container>
                <Row>
                <Col xs={6} md={4}>
                <Image src="" rounded />
                </Col>
                </Row>
            </Container>    
            </div>
    
        )
    }
}

export default Meme;