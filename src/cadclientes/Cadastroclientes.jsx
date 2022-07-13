import React from "react";
import InputMask from 'react-input-mask'
import { Containercliente, Formcliente } from "./cadastroclientes.js";

export default function Cadastrocliente(){
    return(
        <Containercliente className="container">
            <h1>Cadastrar cliente</h1>
            <Formcliente>
                <div className="row">
                        <div className="col-md-6">
                            <label className="form-label labelformcadcol">Nome Cliente:</label><br></br>
                            <input type="text" className="form-control" placeholder="Digite o nome cliente"/><br></br>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label labelformcadcol">CPF:</label><br></br>
                            <InputMask mask="999.999.999-99" type="text" className="form-control" placeholder="Digite o CPF"/><br></br>
                        </div>
                 </div>
                 <div className="row">
                        <div className="col-md-6">
                            <label className="form-label labelformcadcol">Telefone:</label><br></br>
                            <InputMask mask="(99)99999-9999" type="text" className="form-control" placeholder="Digite o telefone"/><br></br>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label labelformcadcol">CEP:</label><br></br>
                            <InputMask mask="99999-999" type="text" className="form-control" placeholder="Digite o Cep"/><br></br>
                        </div>
                 </div>
                 <div className="row">
                        <div className="col-md-6">
                            <label className="form-label labelformcadcol">Cidade:</label><br></br>
                            <input type="text" className="form-control" placeholder="Digite a cidade"/><br></br>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label labelformcadcol">Bairro:</label><br></br>
                            <input type="text" className="form-control" placeholder="Digite o nome bairro"/><br></br>
                        </div>
                        
                 </div>
                 <div className="row">
                        <div className="col">
                            <label className="form-label labelformcadcol">Rua:</label><br></br>
                            <input type="text" className="form-control" placeholder="Digite a rua"/><br></br>
                        </div>
                 </div>
                 <div className="col-auto">
                        <button type="submit" className="btn btn-danger mb-3">Cadastrar Cliente</button>
                    </div>
            </Formcliente>

        </Containercliente>
    )
}