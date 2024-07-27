import { Link } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';
import { RedirectSecretaria } from './RedirectSecretaria';
import { RedirectDocente } from './RedirectDocente';
import './Inicio.css';

export function Inicio (){
    return(
        <>
            <div className='container'>
                <h1>Inicio Sesión</h1>
                <div className='container-inputs'>
                    <div className='inputs-data'>
                        <h3>Usuario</h3>
                        <input type='text'></input>
                    </div>
                    <div className='inputs-data'>
                        <h3>Contraseña</h3>
                        <input type='password'></input>
                    </div>
                </div>
                <div className='container-buttons'>
                    <Link className='buttons' to='/Docente'><button className='btn-options'>&#9658; Profesor</button></Link>
                    <Link className='buttons' to='/Secretaria'><button className='btn-options'>&#9658; Secretaria</button></Link>
                </div>
            </div>

            <Routes>
                <Route path='/Secretaria' element={<RedirectSecretaria />} />
                <Route path='/Docente' element={<RedirectDocente />} />
            </Routes>
        </>
    )
}