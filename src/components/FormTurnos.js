import React from 'react';
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Section from './Section';
import SectionHeader from './SectionHeader';


const FormTurnos = (props) => {
    return (

        <Section
            bg={props.bg}
            textColor={props.textColor}
            size={props.size}
            bgImage={props.bgImage}
            bgImageOpacity={props.bgImageOpacity}
        >
            <Container>
                <Row className="justify-content-center align-items-center">
                    <Col xs={12} lg={6}>
                        <SectionHeader
                            title={props.title}
                            subtitle={props.subtitle}
                            size={2}
                            spaced={false}
                        ></SectionHeader>
                    </Col>
                    <Col xs={12} lg={6} className="mt-4 mt-lg-0">
                        <Form>
                            <Form.Group controlId="formNombre">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text" placeholder="Nombre"></Form.Control>
                            </Form.Group>
                            <Form.Group controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="example@example.com"></Form.Control>
                            </Form.Group>
                            <Form.Row>
                                <Col>
                                    <Form.Group controlId="formFecha">
                                        <Form.Label>Fecha</Form.Label>
                                        <Form.Control type="date"></Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formTurno">
                                        <Form.Label>Turnos</Form.Label>
                                        <Form.Control as="select">
                                            <option>08:00</option>
                                            <option>10:00</option>
                                            <option>12:00</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                            </Form.Row>
                            <Form.Group controlId="formEmail">
                                <Form.Label>Motivo</Form.Label>
                                <Form.Control as="select">
                                    <option>Pagar Cuota</option>
                                    <option>Infomacion</option>
                                    <option>Otros...</option>
                                </Form.Control>
                            </Form.Group>
                                <Button
                                    variant={props.buttonColor}
                                    size={props.size}
                                    type="submit"
                                >
                                    {props.buttonText}
                                </Button>
                        </Form>
                    </Col>
                </Row>

            </Container>
        </Section>
    );
};

export default FormTurnos;