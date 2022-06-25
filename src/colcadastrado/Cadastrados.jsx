import React from "react";
import { Container, Title, Tablebody } from "./cadastrados";

export default function Cadastrados(){
    return(
        <Container className="container">
            <Title className="h1">Colaboradores cadastrados</Title>
            <Tablebody>
            <table className="table table table-hover">
                
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Colaborador</th>
                    <th scope="col">Cargo</th>
                    <th scope="col">Setor</th>
                    <th scope="col">Periodo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>

                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                    <td>@fat</td>
                    </tr>
                    
                </tbody>
                 
                </table>
                </Tablebody>
        </Container>

    )
}