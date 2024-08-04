import { Layout } from '../LayoutProfesor/Layout.jsx'
import {Routes, Route } from 'react-router-dom';
import { ContentCourses } from '../ContentCourses/ContentCourses.jsx';
import { UpdateGrade } from '../ContentCourses/UpdateGrade.jsx';
import { HomeDocente } from './Home.jsx';
import { RegistrarNota } from '../ContentCourses/RegistrarNota.jsx';

export function RedirectDocente (){
    return (
        <>
            <Layout>
                <Routes>
                    <Route path='/' element = {<HomeDocente/>}/>
                    <Route path='/Curso5-2/*' element = {<ContentCourses course='Curso 5-2'/>}/>
                    <Route path='/Curso5-3/*' element = {<ContentCourses course='Curso 5-3'/>}/>
                    <Route path='/Curso5-6/*' element = {<ContentCourses course='Curso 5-6'/>}/>
                    <Route path='/ActualizarNotas' element = {<UpdateGrade/>}/>    
                    <Route path='Curso5-2/Registrar' element={<RegistrarNota/>}/>           
                    <Route path='Curso5-3/Registrar' element={<RegistrarNota/>}/>   
                    <Route path='Curso5-6/Registrar' element={<RegistrarNota/>}/>        
                </Routes>
            </Layout>
        </>
    )
 }