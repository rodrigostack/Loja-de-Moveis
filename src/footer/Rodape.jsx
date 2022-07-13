import React from "react";
import { Footer, Listbox } from "./rodape"; 
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'


export default function Rodape(){
    return(
        <Footer className="container=fluid">
             <Listbox>
                <li>
                  <FaFacebook />
                </li>
                <li>
                  <FaInstagram />
                </li>
                <li>
                  <FaLinkedin />
                </li>
            </Listbox>
        </Footer>
    )
}