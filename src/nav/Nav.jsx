import React from "react";
import './Nav.css'
import { Link } from "react-router-dom";

export default function Nav(){
    return(
        <div className="divcontainer">
            <nav className="navbar navbar-expand-lg navbar-light navbarback">
            <div className="container-fluid">
                <Link className="navbar-brand" to="#">Sistema ADM</Link>
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
                        <li><Link className="dropdown-item" to="/cadcolaboradores">Cadastrar</Link></li>
                        <li><Link className="dropdown-item" to="/cadastrados">Colaboradores</Link></li>
                        
                    </ul>
                    
                    </li>
                    <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle active" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Clientes
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><Link className="dropdown-item" to="#">Cadastrar</Link></li>
                        <li><Link className="dropdown-item" to="#">Clientes</Link></li>
                        
                    </ul>
                    
                    </li>
                    <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle active" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Produtos
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><Link className="dropdown-item" to="#">Cadastrar</Link></li>
                        <li><Link className="dropdown-item" to="#">Produtos</Link></li>
                        
                    </ul>
                    
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div>
    )
}