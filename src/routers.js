import React from "react";

import { Routes, Route } from 'react-router-dom'


import Contatos from "./contatos/Contatos";
import Cadastrocolaboradores from "./colaboradores/Cadcolaboradores";
import Cadastrados from "./colcadastrado/Cadastrados.jsx";

export default function Mainrouters(){
    return(
      
        <Routes>
               <Route path="/cadcolaboradores" element = {<Cadastrocolaboradores/>}/>
               <Route path="/contatos" element = {<Contatos/>}/>
               <Route path="/cadastrados" element = {<Cadastrados/>}/>
         </Routes>
       
    )
}