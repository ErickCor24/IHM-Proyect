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
                {/* <Route path="/" element={<Inicio />} /> 
                <Route path="/Secretaria/*" element={<RedirectSecretaria />} />
                <Route path="/Docente/*" element={<RedirectDocente />} /> */}
                <Route exact path="/" render={() => <Inicio />} />
                <Route exact path="/Secretaria" render={() => <RedirectSecretaria />} />
                <Route exact path="/Docente" render={() => <RedirectDocente />} />
                </Routes>
        </BrowserRouter>
    );
}

export function handleDoNothing(event){
    event.preventDefault();
};
