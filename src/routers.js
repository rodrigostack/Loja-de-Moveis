import React from "react";

import { Routes, Route } from 'react-router-dom'


import Contatos from "./contatos/Contatos";

export default function Mainrouters(){
    return(
      
        <Routes>
               
                <Route path="/contatos" element = {<Contatos/>}/>
         </Routes>
       
    )
}