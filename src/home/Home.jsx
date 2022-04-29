import React from 'react'
import './home.css'
import Espanha from '../imagens/espanha.gif'


export default function Home(){
    return(
        <div className='container-fluid backhome'>
            <div className='row'>
                <div className='col-md-4 divimg'>
                    <img src={Espanha} alt="Bandeira espanha" title='Bandeira Espanha' className='img-fluid'/>
                </div>
                <div className='col-md-8 divtext'>
                    <h2 className='h1'>Sistema Administrativo Moveis Espanha</h2>
                </div>
                
            </div>
           

        </div>
        
    )
}
