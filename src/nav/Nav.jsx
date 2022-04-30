import React from "react";
import './Nav.css'
import { Link } from "react-router-dom";

export default function Nav(){
    return(
        <div className="divcontainer">
            <nav className="navbar navbar-expand-lg navbar-light navbarback">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Sistema ADM</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" to="/contatos">Contatos</Link>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Colaboradores
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a className="dropdown-item" href="#">Cadastrar</a></li>
                        <li><a className="dropdown-item" href="#">Colaboradores</a></li>
                        
                    </ul>
                    
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Clientes
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a className="dropdown-item" href="#">Cadastrar</a></li>
                        <li><a className="dropdown-item" href="#">Clientes</a></li>
                        
                    </ul>
                    
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Produtos
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a className="dropdown-item" href="#">Cadastrar</a></li>
                        <li><a className="dropdown-item" href="#">Produtos</a></li>
                        
                    </ul>
                    
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div>
    )
}