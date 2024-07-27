import { Link } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';
import { RedirectSecretaria } from './RedirectSecretaria';
import { RedirectDocente } from './RedirectDocente';

export function Inicio (){
    return(
        <>
            <Link className='' to='/Docente'><button className='btn-options'>&#9658; Profesor</button></Link>
            <Link className='' to='/Secretaria'><button className='btn-options'>&#9658; Secretaria</button></Link>
            <h1>Inicio</h1>

            <Routes>
                <Route path='/Secretaria' element={<RedirectSecretaria />} />
                <Route path='/Docente' element={<RedirectDocente />} />
            </Routes>
        </>
    )
}