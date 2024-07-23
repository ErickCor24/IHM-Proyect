import { Layout } from './components/Layout/Layout.jsx'
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { SideBar } from './components/Layout/SideBar.jsx';
import { Matriculacion } from './components/Content/Matriculacion.jsx';
import { Vista } from './components/Content/Vista.jsx';

export function App(){
    return(
        <BrowserRouter>       
            <Layout>               
                <Routes>
                    <Route path='/matriculacion' element = {<Matriculacion/>}/>
                    <Route path='/vista' element = {<Vista/>}/>
                </Routes>                      
            </Layout>      
        </BrowserRouter>
    );
}
