import React from "react";
import './cadcolaboradores.css'

export default function Cadastrocolaboradores(){
    return(
        <div className="container divdefault">
            <div className="divheader"><h1 className="h1 haheader">Cadastro de Colaborador</h1></div>
            <form className="formcadcolaborador">
                <div className="row">
                    <div className="col-md-6">
                        <label className="form-label labelformcadcol">Nome Colaborador:</label><br></br>
                        <input type="text" className="form-control" placeholder="Digite o nome colaborador"/><br></br>
                     </div>
                     <div className="col-md-6">
                        <label className="form-label labelformcadcol">Setor de trabalho:</label><br></br>
                        <input type="text" className="form-control" placeholder="Digite o setor"/><br></br>
                     </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                         <label className="form-label labelformcadcol">Cargo:</label><br></br>
                         <input type="text" className="form-control" placeholder="Digite o cargo"/><br></br>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label labelformcadcol">Periodo de trabalho:</label><br></br>
                        <select className="form-control">
                            <option value="Manhã">Manhã</option>
                            <option value="Tarde">Tarde</option>
                            <option value="Noite">Noite</option>
                            <option value="Integral">Integral</option>
                        </select>
                     </div>
                     <div class="col-auto">
                        <button type="submit" class="btn btn-danger mb-3">Cadastrar Colaborador</button>
                    </div>
                </div>
            </form>
        </div>
    )
}