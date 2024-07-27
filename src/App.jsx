import { RedirectSecretaria } from './components/Main/RedirectSecretaria.jsx';
import { Matriculacion } from './components/Content/Matriculacion.jsx';
import { Inicio } from './components/Main/Inicio.jsx';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { RedirectDocente } from './components/Main/RedirectDocente.jsx';

export function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />} /> 
                <Route path="/Secretaria/*" element={<RedirectSecretaria />} />
                <Route path="/Docente/*" element={<RedirectDocente />} />
            </Routes>
        </BrowserRouter>
    );
}
