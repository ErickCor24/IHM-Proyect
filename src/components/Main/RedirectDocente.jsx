import { Layout } from '../LayoutProfesor/Layout.jsx'
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { Matriculacion } from '../Content/Matriculacion.jsx';
import { Delete } from '../Content/Delete.jsx';
import { Update } from '../Content/Update.jsx';

export function RedirectDocente (){
    return (
        <>
            <Layout>
                <Routes>
                    <Route path='/Matriculacion' element = {<Matriculacion/>}/>
                    <Route path='/Delete' element = {<Delete/>}></Route>
                    <Route path='/Update' element = {<Update/>}/>
                </Routes>
            </Layout>
        </>
    )
 }