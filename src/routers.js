import React from "react";

import { Routes, Route } from 'react-router-dom'


import Contatos from "./contatos/Contatos";
import Cadastrocolaboradores from "./colaboradores/Cadcolaboradores";
import Cadastrados from "./colcadastrado/Cadastrados.jsx";
import Cadastrocliente from "./cadclientes/Cadastroclientes.jsx";

export default function Mainrouters(){
    return(
      
        <Routes>
               <Route path="/cadcolaboradores" element = {<Cadastrocolaboradores/>}/>
               <Route path="/contatos" element = {<Contatos/>}/>
               <Route path="/cadastrados" element = {<Cadastrados/>}/>
               <Route path="/cadastrocliente" element = {<Cadastrocliente/>}/>
         </Routes>
       
    )
}