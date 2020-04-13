import React from 'react';
import Section from "./Section";
import { Container, Table } from "react-bootstrap";
import SectionHeader from "./SectionHeader";


const TablaTurnos = (props) => {
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
                        <tr>
                            <td>Ricardo Moreno</td>
                            <td>ricky@gmail.com</td>
                            <td>Pago de Cuota</td>
                            <td>15/04/2020</td>
                            <td>08:00</td>
                        </tr>
                        <tr>
                            <td>Juan ALonso</td>
                            <td>juan@gmail.com</td>
                            <td>Consulta</td>
                            <td>20/05/2020</td>
                            <td>13:00</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </Section>

    );
};

export default TablaTurnos;