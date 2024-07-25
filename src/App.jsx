import { Layout } from './components/Layout/Layout.jsx'
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { SideBar } from './components/Layout/SideBar.jsx';
import { Matriculacion } from './components/Content/Matriculacion.jsx';
import { Delete } from './components/Content/Delete.jsx';
import { Update } from './components/Content/Update.jsx';

export function App(){
    return(
        <BrowserRouter>       
            <Layout>               
                <Routes>
                    <Route path='/Matriculacion' element = {<Matriculacion/>}/>
                    <Route path='/Delete' element = {<Delete/>}></Route>
                    <Route path='/Update' element = {<Update/>}/>
                </Routes>                      
            </Layout>      
        </BrowserRouter>
    );
}
