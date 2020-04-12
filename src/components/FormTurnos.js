import React from 'react';
import { Form, Container, Row, Col } from "react-bootstrap";


const FormTurnos = () => {
    return (
        <Container>
            <Row className="justify-content-center align-items-center">
                <Col xs={12} lg={6}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam neque dolorum, earum itaque suscipit officiis? Asperiores autem, culpa excepturi natus laboriosam possimus provident ea quam optio quae fugit, necessitatibus cum.</p>
                </Col>
                <Col xs={12} lg={6} className="mt-4 mt-lg-0">
                    <Form>
                        <Form.Group controlId="formNombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Juan Diaz"></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="example@example.com"></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formFecha">
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control type="date"></Form.Control>
                        </Form.Group>
                        <Row>
                            <Col>
                                <Form.Group controlId="formTurno">
                                    <Form.Label>Turnos</Form.Label>
                                    <Form.Control as="select">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formEmail">
                                    <Form.Label>Motivo</Form.Label>
                                    <Form.Control as="select">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>

        </Container>
    );
};

export default FormTurnos;