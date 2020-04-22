import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Section from './Section';
import SectionHeader from './SectionHeader';
import fire from "../util/fire";




const FormTurnos = (props) => {

    // const handleSubmit = (/* userId, name, email, imageUrl */ e) => {
    //     e.preventDefault();
    //     e.persist()
    //     const data = {};
    //     for (const input of e.target.elements) {
    //         if (input.id) { data[input.id] = input.value; }
    //     }


    //     console.log(data);
    //     var database = fire.database();
    //     database.ref('turns').orderByKey().limitToLast(100)
    //     database.ref('turns').push(data);

    // }

    const [turno, setTurno] = useState({
        nombre: '',
        email: '',
        fecha: '',
        hora: 'Horario',
        motivo: 'Selecciona el Motivo de tu visita'
    });


    const actualizarState = e => {
        setTurno({
            ...turno,
            [e.target.name]: e.target.value
        })
    }
    const { nombre, email, fecha, hora, motivo } = turno;

    const submitTurno = e => {
        e.preventDefault();

        //validando
        if (nombre.trim() === '' || email.trim() === '' || fecha.trim() === '' ||
            hora.trim() === '' || motivo.trim() === '') {
            // setError(true)
            alert("completa los campos")
            return
        }

        e.persist()
        const data = {};
        for (const input of e.target.elements) {
            if (input.id) { data[input.id] = input.value; }
        }


        console.log("daataa", data);
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