import React, { useState, useEffect } from 'react';
import Section from "./Section";
import { Container, Table } from "react-bootstrap";
import SectionHeader from "./SectionHeader";
import fire from "../util/fire";
import './TablaTurnos.scss'

var turnsRef = fire.database().ref('turns').orderByKey().limitToLast(100);

const TablaTurnos = (props) => {

    const [turns, setTurns] = useState({})
    let tr = []

    useEffect(() => {
        turnsRef.on('value', function (snapshot) {
            setTurns(snapshot.val());
        })
    }, [])


    const handleClick = () => {
        turnsRef.on('value', function (snapshot) {
            setTurns(snapshot.val());
        })
    }
    const array = []
    for (const key in turns) {
        if (turns.hasOwnProperty(key)) {
            const el = turns[key];
            array.push(
                <tr key={key}>
                    <td> {el.nombre} </td>
                    <td> {el.email} </td>
                    <td> {el.motivo} </td>
                    <td> {el.fecha} </td>
                    <td> {el.turno} </td>
                </tr>
            )
        }
    }
    tr = array;

    return (
        <Section
            bg={props.bg}
            textColor={props.textColor}
            size={props.size}
            bgImage={props.bgImage}
            bgImageOpacity={props.bgImageOpacity}
        >
            <Container>
                <SectionHeader
                    title={props.title}
                    subtitle={props.subtitle}
                    size={2}
                    spaced={true}
                    className="text-center"
                ></SectionHeader>
                <button onClick={handleClick}>Refrescar</button>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Motivo</th>
                            <th>Fecha</th>
                            <th>Turno</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tr}
                        {!tr.length &&
                            <tr className="fakeItem">
                                <td>  </td>
                                <td>  </td>
                                <td>  </td>
                                <td>  </td>
                                <td>  </td>
                            </tr>
                        }
                    </tbody>
                </Table>
            </Container>
        </Section>

    );
};

export default TablaTurnos;