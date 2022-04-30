import React from "react";

import { Route, Routes } from 'react-router-dom'

import Home from "./home/Home";
import Contatos from "./contatos/Contatos";

export default function Routers(){
    return(
      
        <Routes>
                <Route exact path="/" component ={Home}></Route>
                <Route exact path="/contatos" component={Contatos}></Route>
        </Routes>  
         
       
    )
}