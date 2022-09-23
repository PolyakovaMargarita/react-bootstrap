import React from "react";
import { Button, Container, Form } from "react-bootstrap";

const Contacts = () => {
        return (
            <Container style={{ width: '500px' }}>
                <h1 className="text-center">Contact us</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"></Form.Control>
                        <Form.Text>We`ll never share you email with anyone else</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassport">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" row={3}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me"></Form.Check>
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </Container>
        )
}

export default Contacts;