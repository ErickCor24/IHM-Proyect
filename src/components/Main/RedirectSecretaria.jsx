import { Layout } from '../LayoutSecretaria/Layout.jsx'
import { Routes, Route } from 'react-router-dom';
import { Matriculacion } from '../Content/Matriculacion.jsx';
import { Delete } from '../Content/Delete.jsx';
import { Update } from '../Content/Update.jsx';
import { Vista } from '../Content/Vista.jsx';
import { HomeSecretaria } from './Home.jsx';

export function RedirectSecretaria(){
    return(
            <Layout>
                
                    <Routes>
                        <Route path='/' element = {<HomeSecretaria/>}/>
                        <Route path='/Matriculacion' element = {<Matriculacion/>}/>
                        <Route path='/Delete' element = {<Delete/>}></Route>
                        <Route path='/Update' element = {<Update/>}/>
                        <Route path='/Vista' element = {<Vista/>}/>
                    </Routes>
            </Layout>
    );
}