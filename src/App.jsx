import { RedirectSecretaria } from './components/Main/RedirectSecretaria.jsx';
import { Matriculacion } from './components/Content/Matriculacion.jsx';
import { Inicio } from './components/Main/Inicio.jsx';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { RedirectDocente } from './components/Main/RedirectDocente.jsx';
import { RegistrarNota } from './components/ContentCourses/RegistrarNota.jsx';

export function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<Inicio />} /> 
                <Route path="/Secretaria/*" element={<RedirectSecretaria />} />
                <Route path="/Docente/*" element={<RedirectDocente />} />
                {/* <Route path={`/Docente/:course./Registrar`} element={<RegistrarNota />} /> */}
                </Routes>
        </BrowserRouter>
    );
}

export function handleDoNothing(event){
    event.preventDefault();
};
