import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Section from './Section';
import SectionHeader from './SectionHeader';
import fire from "../util/fire";
import ReCAPTCHA from "react-google-recaptcha";

const FormTurnos = (props) => {

    // const handleSubmit = (/* userId, name, email, imageUrl */ e) => {

    // }

    const [turno, setTurno] = useState({
        nombre: '',
        email: '',
        fecha: '',
        hora: 'Horario',
        motivo: 'Selecciona el Motivo de tu visita'
    });

    const [error, setError] = useState(false)

    const [recaptcha, setRecaptcha] = useState({
        value: '',

    })
    function recaptchaChange(value) {
        setRecaptcha({ value: value })
    }


    const actualizarState = e => {
        setTurno({
            ...turno,
            [e.target.name]: e.target.value
        })
        setError(false)
    }

    const { nombre, email, fecha, hora, motivo } = turno;
    const { value } = recaptcha;

    const submitTurno = e => {
        e.preventDefault();

        //validando captcha
        if (value.trim() === '') {
            alert("completa el captcha");
            return
        }
        //validando
        if (nombre.trim() === '' || email.trim() === '' || fecha.trim() === '' ||
            hora.trim() === '' || motivo.trim() === '') {
            setError(true)
            return
        }

        e.persist()
        const data = {};
        for (const input of e.target.elements) {
            if (input.id) { data[input.id] = input.value; }
        }


        var database = fire.database();
        database.ref('turns').orderByKey().limitToLast(100)
        database.ref('turns').push(data);

        //limpiar formulario
        setTurno({
            nombre: '',
            email: '',
            fecha: '',
            hora: 'Horario',
            motivo: 'Selecciona el Motivo de tu visita'
        })


    }

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
                        {error ? <p className="alert alert-danger"> Todos los Campos son obligatorios</p> : null}
                        <Form
                            // onSubmit={handleSubmit}
                            onSubmit={submitTurno}
                        >
                            <Form.Group controlId="nombre">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="nombre"
                                    value={nombre}
                                    onChange={actualizarState}
                                    placeholder="Nombre"
                                ></Form.Control>
                            </Form.Group>
                            <Form.Group controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={actualizarState}
                                    placeholder="example@example.com"
                                ></Form.Control>
                            </Form.Group>
                            <Form.Row>
                                <Col>
                                    <Form.Group controlId="fecha">
                                        <Form.Label>Fecha</Form.Label>
                                        <Form.Control
                                            type="date"
                                            name="fecha"
                                            value={fecha}
                                            max="2020-12-31"
                                            min="2020-04-01"
                                            onChange={actualizarState}
                                        ></Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="turno">
                                        <Form.Label>Hora</Form.Label>
                                        <Form.Control
                                            as="select"
                                            name="hora"
                                            value={hora}
                                            onChange={actualizarState}
                                        >
                                            <option disabled="disabled">{hora}</option>
                                            <option>08:00</option>
                                            <option>10:00</option>
                                            <option>12:00</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                            </Form.Row>
                            <Form.Group controlId="motivo">
                                <Form.Label>Motivo</Form.Label>
                                <Form.Control
                                    as="select"
                                    onChange={actualizarState}
                                    name="motivo"
                                    value={motivo}
                                >
                                    <option disabled="disabled">{motivo}</option>
                                    <option>Pagar Cuota</option>
                                    <option>Información</option>
                                    <option>Otros...</option>
                                </Form.Control>
                            </Form.Group>
                            {motivo == "Otros..." ?
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Example textarea</Form.Label>
                                    <Form.Control as="textarea" rows="3" />
                                </Form.Group>
                                : null}
                            <Row className="justify-content-between">
                                <ReCAPTCHA
                                    className="mx-3"
                                    sitekey="6LecQ-0UAAAAAHIXIrLYehkR4rNRzf1wQWIpiiXE"
                                    onChange={recaptchaChange}
                                />
                                <Col>
                                    <Button
                                        style={{ display: "inline-block" }}
                                        variant={props.buttonColor}
                                        size={props.size}
                                        type="submit"
                                    >
                                        {props.buttonText}
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>

            </Container>
        </Section>
    );
};

export default FormTurnos;